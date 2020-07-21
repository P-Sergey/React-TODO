import axios from 'axios';

const getApi = () => {
  const URL = 'https://gorest.co.in/public-api/posts';
  const key = 'biGLcKTcfADe4RZxxPszlTuRt8OTRFOARUds';
  return axios.get(`${URL}?access-token=${key}`);
};
export default getApi;
