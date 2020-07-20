import React from 'react';
import { setIsAll, setIsActive, deleteCompletedTodos } from '../store/actions';
import { getIsAll } from '../store/selectors/selector';
import { connect } from 'react-redux';

const Filter = (props) => {
  const { setIsAll, setIsActive, deleteCompletedTodos, isAll } = props;
  return (
    <div className='filter'>
      <div>
        <button onClick={() => setIsAll(isAll)}>All</button>
        <button onClick={() => setIsActive(true)}>Active</button>
        <button onClick={() => setIsActive(false)}>Completed</button>
      </div>
      <button
        onClick={() => {
          deleteCompletedTodos();
        }}
      >
        Remove completed
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAll: getIsAll(state),
});

const mapDispatchToProps = {
  setIsAll,
  setIsActive,
  deleteCompletedTodos,
};

const finalFilter = connect(mapStateToProps, mapDispatchToProps)(Filter);

export default finalFilter;
