import React from 'react';

class DeleteButton extends React.Component {
  onDeleteClick = () => {
    const { index, listItems } = this.props;
    listItems.splice(index, 1);
  };
  render() {
    return (
      <div>
        <button onClick={this.onDeleteClick}>X</button>
      </div>
    );
  }
}

export default DeleteButton;
