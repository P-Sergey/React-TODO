import React from 'react';

const Checkbox = (props) => {
  const { isDone, onCheck } = props;

  return (
    <div className='checkBox'>
      <input
        type='checkbox'
        checked={isDone}
        value={isDone}
        onChange={onCheck}
      />
    </div>
  );
};

export default Checkbox;
