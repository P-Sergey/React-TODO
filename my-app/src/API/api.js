import axios from 'axios';

const getApi = (url) => {
  const key = 'biGLcKTcfADe4RZxxPszlTuRt8OTRFOARUds';
  return axios.get(`${url}?access-token=${key}`);
};

export const getPostApi = () => {
  const URL = 'https://gorest.co.in/public-api/posts';
  return getApi(URL);
};
