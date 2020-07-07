export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const DELETE_COMPLETED_TODOS = 'DELETE_COMPLETED_TODOS';

export const addTodo = (text) => {
  return {
    type: ADD_TODO,
    text,
  };
};

export const toggleTodo = (isDone) => {
  return {
    type: TOGGLE_TODO,
    isDone,
  };
};

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    id,
  };
};

export const deleteCompletedTodo = (id) => {
  return {
    type: DELETE_COMPLETED_TODOS,
    id,
  };
};
