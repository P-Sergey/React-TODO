import { SET_IS_ALL, SET_IS_ACTIVE } from '../actions/filter';

const initialState = { isAll: true, isActive: false };

const filter = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_ALL:
      return {
        ...state,
        isAll: action.payload,
      };
    case SET_IS_ACTIVE:
      return {
        ...state,
        isAll: false,
        isActive: action.payload,
      };
    default:
      return state;
  }
};

export default filter;
