export const ADD_TODO = 'ADD_TODO';
export const FILTER_TODO = 'FILTER_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const DELETE_COMPLETED_TODOS = 'DELETE_COMPLETED_TODOS';

export const addTodo = (item) => ({
  type: ADD_TODO,
  payload: item,
});

export const filterTodo = (filter, value) => ({
  type: FILTER_TODO,
  filter: filter,
  value: value,
});

export const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    payload: id,
  };
};

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: id,
  };
};

export const deleteCompletedTodo = () => {
  return {
    type: DELETE_COMPLETED_TODOS,
  };
};
