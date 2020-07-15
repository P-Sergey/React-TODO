import React from 'react';

const Filter = (props) => {
  const { setIsAll, setIsActive, deleteCompleted } = props;
  return (
    <div className='filter'>
      <div>
        <button onClick={setIsAll}>All</button>
        <button onClick={() => setIsActive(true)}>Active</button>
        <button onClick={() => setIsActive(false)}>Completed</button>
      </div>
      <button
        onClick={() => {
          deleteCompleted();
        }}
      >
        Remove completed
      </button>
    </div>
  );
};

export default Filter;
