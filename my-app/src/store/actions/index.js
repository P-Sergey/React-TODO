import axios from 'axios';
import { setPosts, setError, setLoading } from './posts';
export * from './filter';
export * from './todo';
export * from './posts';

export const getPosts = () => {
  return (dispatch) => {
    axios
      .get(
        'https://gorest.co.in/public-api/posts?access-token=biGLcKTcfADe4RZxxPszlTuRt8OTRFOARUds'
      )
      .then((response) => {
        if (!Array.isArray(response.data.result) || response.data.result === undefined) {
          throw new Error('Wrong data');
        }
        dispatch(setPosts(response.data.result));
      })
      .catch((error) => dispatch(setError(error)))
      .finally(() => dispatch(setLoading(false)));
  };
};
