export const SET_IS_ALL = 'SET_IS_ALL';
export const SET_IS_ACTIVE = 'SET_IS_ACTIVE';

export const setIsAll = (isAll) => ({
  type: SET_IS_ALL,
  payload: isAll,
});

export const setIsActive = (isActive) => ({
  type: SET_IS_ACTIVE,
  payload: isActive,
});
