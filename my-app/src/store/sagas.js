import { takeEvery, put, call } from 'redux-saga/effects';
import { getPostApi } from '../API/api';
import { GET_POSTS, setPosts, setError, setLoading } from './actions';

function* fetchPosts() {
  try {
    const result = yield call(getPostApi);
    if (result.data.result || !Array.isArray(result.data.result)) {
      throw new Error('Wrong API-data');
    }
    yield put(setPosts(result.data.result));
  } catch (error) {
    yield put(setError(error));
  }
  yield put(setLoading(false));
}

export function* getPostsWatcher() {
  yield takeEvery(GET_POSTS, fetchPosts);
}
