export const GET_POSTS = 'GET_POSTS';
export const SET_POSTS = 'SET_POSTS';
export const SET_LOADING = 'SET_LOADING';
export const SET_ERROR = 'SET_ERROR';

export const getPosts = () => ({
  type: GET_POSTS,
});

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
