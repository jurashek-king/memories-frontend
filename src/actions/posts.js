import * as api from '../api/Api';

export const getPosts = () => async (dispatch) => {
  try{
    const data = await api.fetchPosts();
    dispatch({ type: 'FETCH_ALL', payload: data});
  } catch (error) {
    console.log(error);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const data = await (await api.createPost(post)).json();
    console.log(data);

    dispatch({type: 'CREATE', payload: data})

  } catch (error) {
    console.log(error);
  }
}