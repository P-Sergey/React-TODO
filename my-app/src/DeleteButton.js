import React from 'react';

const DeleteButton = (props) => {
  const { onDelete } = props;

  return (
    <div>
      <button onClick={onDelete} className={'deleteButton'}>
        X
      </button>
    </div>
  );
};

export default DeleteButton;
