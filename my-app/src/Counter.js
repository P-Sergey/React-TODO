import React from 'react';

class Counter extends React.Component {
  render() {
    const { listItems } = this.props;
    const counter = listItems.length;
    return <div>Amount of list-items: {counter} </div>;
  }
}

export default Counter;
