import React from 'react';

class Input extends React.Component {
  render() {
    const { value, onInputChange, onInputClick } = this.props;
    return (
      <div>
        <input value={value} onChange={onInputChange} />
        <button onClick={onInputClick}>Add Item</button>
      </div>
    );
  }
}

export default Input;
