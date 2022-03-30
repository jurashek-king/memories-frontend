import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from '@reduxjs/toolkit';
import { fetchPosts, createPost, deletePost, updatePost, likePost } from '../api/Api';

const postsAdapter = createEntityAdapter({
  selectId: (post) => post._id,
  sortComparer: (a, b) => b.createdAt.localeCompare(a.createdAt),
});

export const fetchAll = createAsyncThunk('posts/fetchPosts', fetchPosts);

export const addNewPost = createAsyncThunk('posts/addNewPost', createPost);

export const deletePostById = createAsyncThunk(
  'posts/deletePost/:id',
  deletePost
);

export const updatePostById = createAsyncThunk('posts/updatePost/:id', updatePost);

export const updateLike = createAsyncThunk('posts/likePost/:id', likePost);

const initialState = postsAdapter.getInitialState({
  status: 'idle',
  error: null,
});

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAll.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchAll.fulfilled, (state, action) => {
        state.status = 'succeeded';
        postsAdapter.upsertMany(state, action.payload);
      })
      .addCase(fetchAll.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addNewPost.fulfilled, postsAdapter.addOne)
      .addCase(deletePostById.fulfilled, postsAdapter.removeOne)
      .addCase(updatePostById.fulfilled, postsAdapter.updateOne)
      .addCase(updateLike.fulfilled, postsAdapter.updateOne)
  },
});

export const postsReducer = postsSlice.reducer;

export const { selectAll: selectAllPosts, selectById } =
  postsAdapter.getSelectors((state) => state.posts);

