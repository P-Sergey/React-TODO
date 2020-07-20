import React from 'react';
import { deleteTodo } from '../store/actions';
import { connect } from 'react-redux';

const DeleteButton = (props) => {
  const { id, deleteTodo } = props;

  return (
    <div>
      <button onClick={() => deleteTodo(id)} className={'deleteButton'}>
        X
      </button>
    </div>
  );
};

const mapDispatchToProps = {
  deleteTodo,
};

const finalDeleteButton = connect(null, mapDispatchToProps)(DeleteButton);
export default finalDeleteButton;
