import React from 'react';

class Counter extends React.Component {
  render() {
    const { counter, active, completed } = this.props;

    return (
      <div className='counter'>
        <span>Items: {counter}</span>
        <span>Active: {active}</span>
        <span>Completed: {completed}</span>
      </div>
    );
  }
}

export default Counter;
