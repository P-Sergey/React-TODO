import React from 'react';

const DeleteButton = (props) => {
  const { deleteTodo } = props;

  return (
    <div>
      <button onClick={deleteTodo} className={'deleteButton'}>
        X
      </button>
    </div>
  );
};

export default DeleteButton;
