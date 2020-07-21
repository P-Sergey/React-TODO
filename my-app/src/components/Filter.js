import React from 'react';
import { setIsAll, setIsActive, deleteCompletedTodos } from '../store/actions';
import { connect } from 'react-redux';

const Filter = (props) => {
  const { setIsAll, setIsActive, deleteCompletedTodos } = props;
  return (
    <div className='filter'>
      <div>
        <button onClick={setIsAll}>All</button>
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

const mapDispatchToProps = {
  setIsAll,
  setIsActive,
  deleteCompletedTodos,
};

const finalFilter = connect(null, mapDispatchToProps)(Filter);

export default finalFilter;
