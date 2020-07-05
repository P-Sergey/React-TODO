import React from 'react';

class DeleteButton extends React.Component {
  render() {
    const { onDelete } = this.props;
    return (
      <div>
        <button onClick={onDelete} className={'deleteButton'}>
          X
        </button>
      </div>
    );
  }
}

export default DeleteButton;
