import getPostsApi from '../../API/api';
export const SET_POSTS = 'SET_POSTS';
export const SET_LOADING = 'SET_LOADING';
export const SET_ERROR = 'SET_ERROR';

export const setPosts = (posts) => ({
  type: SET_POSTS,
  payload: posts,
});

export const setLoading = (value) => ({
  type: SET_LOADING,
  payload: value,
});

export const setError = (value) => ({
  type: SET_ERROR,
  payload: value,
});

export const getPosts = () => {
  return getPostsApi();
};
