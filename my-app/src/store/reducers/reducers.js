import {
  ADD_TODO,
  TOGGLE_TODO,
  DELETE_TODO,
  DELETE_COMPLETED_TODOS,
} from '../actions/actions';

const initialState = {
  listItems: [],
};

const todoApp = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, listItems: [...state.listItems, action.payload] };

    case TOGGLE_TODO:
      return {
        ...state,
        listItems: state.listItems.map((item) => {
          if (item.id === action.payload) {
            return { ...item, isDone: !item.isDone };
          }
          return item;
        }),
      };

    case DELETE_TODO:
      return {
        ...state,
        listItems: state.listItems.filter((item) => item.id !== action.payload),
      };

    case DELETE_COMPLETED_TODOS:
      return {
        ...state,
        listItems: state.listItems.filter((item) => !item.isDone),
      };
    default:
      return state;
  }
};

export default todoApp;
