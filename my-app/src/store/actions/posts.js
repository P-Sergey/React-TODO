import getApi from '../../API/api';
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
  return (dispatch) => {
    getApi()
      .then((response) => {
        if (
          !Array.isArray(response.data.result) ||
          response.data.result === undefined
        ) {
          throw new Error('Wrong data');
        }
        dispatch(setPosts(response.data.result));
      })
      .catch((error) => dispatch(setError(error)))
      .finally(() => dispatch(setLoading(false)));
  };
};
