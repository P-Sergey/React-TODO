import React from 'react';

class Input extends React.Component {
  render() {
    const { value, onInputChange, addItem } = this.props;
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
  }
}

export default Input;
