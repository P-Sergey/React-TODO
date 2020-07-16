import { SET_POSTS, SET_LOADING, SET_ERROR } from '../actions/posts';

const initialState = { posts: [], loading: false, error: null };

const posts = (state = initialState, action) => {
  switch (action.type) {
    case SET_POSTS:
      return { ...state, posts: [...state.posts, action.payload] };

    case SET_LOADING:
      return { ...state, loading: action.payload };

    case SET_ERROR:
      return { ...state, error: action.payload };

    default:
      return state;
  }
};

export default posts;
