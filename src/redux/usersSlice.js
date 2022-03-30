import {
  createSlice,
  createEntityAdapter,
  createAsyncThunk,
} from '@reduxjs/toolkit';
import { registerUser } from '../api/Api';

const usersAdapter = createEntityAdapter({
  selectId: (user) => user._id,
})

const initialState = usersAdapter.getInitialState();

export const register = createAsyncThunk('users/register', registerUser)

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(register.fulfilled, usersAdapter.addOne)
  }
})

export const usersReducer = usersSlice.reducer;