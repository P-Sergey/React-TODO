export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const DELETE_COMPLETED_TODOS = 'DELETE_COMPLETED_TODOS';

export const addTodo = (item) => ({
  type: ADD_TODO,
  payload: item,
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

export const deleteCompletedTodos = () => {
  return {
    type: DELETE_COMPLETED_TODOS,
  };
};