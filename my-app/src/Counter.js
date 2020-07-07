import React from 'react';

const Counter = (props) => {
  const { counter, active, completed } = props;

  return (
    <div className='counter'>
      <span>Items: {counter}</span>
      <span>Active: {active}</span>
      <span>Completed: {completed}</span>
    </div>
  );
};

export default Counter;
