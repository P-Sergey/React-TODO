import React from 'react';

class DeleteButton extends React.Component {
  render() {
    const { onDeleteClick } = this.props;
    return (
      <div>
        <button onClick={onDeleteClick}>X</button>
      </div>
    );
  }
}

export default DeleteButton;
