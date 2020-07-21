import React from 'react';

const Checkbox = (props) => {
  const { isDone, toggleTodo } = props;

  return (
    <div className='checkBox'>
      <input
        type='checkbox'
        checked={isDone}
        value={isDone}
        onChange={toggleTodo}
      />
    </div>
  );
};

export default Checkbox;
