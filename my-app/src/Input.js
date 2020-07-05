import React from 'react';

class Input extends React.Component {
  render() {
    const { value, onInputChange, addItem } = this.props;
    return (
      <div>
        <input value={value} onChange={onInputChange} />
        <button onClick={addItem}>Add Item</button>
      </div>
    );
  }
}

export default Input;
