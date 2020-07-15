import { createSelector } from 'reselect';

export const getListItems = (state) => {
  return state.todo.listItems;
};

export const getIsActive = (state) => {
  return state.filter.isActive;
};

export const getIsAll = (state) => {
  return state.filter.isAll;
};

export const getFilteredList = createSelector(
  [getListItems, getIsAll, getIsActive],
  (listItems, isAll, isActive) => {
    return isAll
      ? listItems
      : listItems.filter((item) => item.isDone !== isActive);
  }
);
