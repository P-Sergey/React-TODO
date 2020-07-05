import React from 'react';

class Checkbox extends React.Component {
  render() {
    const { isDone, onCheck } = this.props;
    return (
      <div>
        <input type="checkbox" checked={isDone} value={isDone} onChange={onCheck} />
      </div>
    );
  }
}

export default Checkbox;
