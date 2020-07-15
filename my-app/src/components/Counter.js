import React from 'react';

const Counter = (props) => {
  const { listItems } = props;
  const counter = listItems.length;
  const active = listItems.filter((item) => !item.isDone).length;
  const completed = listItems.filter((item) => item.isDone).length;

  return (
    <div className='counter'>
      <span>Items: {counter}</span>
      <span>Active: {active}</span>
      <span>Completed: {completed}</span>
    </div>
  );
};

export default Counter;
