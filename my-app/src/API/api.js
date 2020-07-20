import axios from 'axios';
import { setPosts, setError, setLoading } from '../store/actions';

const getPostsApi = () => {
  const URL = 'https://gorest.co.in/public-api/posts';
  const key = 'biGLcKTcfADe4RZxxPszlTuRt8OTRFOARUds';
  return (dispatch) => {
    setTimeout(() => {
      axios
        .get(`${URL}?access-token=${key}`)
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
    }, 3000);
  };
};
export default getPostsApi;
