import React from 'react';

const Input = (props) => {
  const { value, onInputChange, addItem } = props;

  return (
    <div>
      <div className='inputHeader'>TODO list</div>
      <div onKeyPress={addItem}>
        <input
          className='input'
          value={value}
          placeholder='Input new task...'
          onChange={onInputChange}
        />
      </div>
    </div>
  );
};

export default Input;
