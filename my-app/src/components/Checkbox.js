import React from 'react';
import { toggleTodo } from '../store/actions';
import { connect } from 'react-redux';

const Checkbox = (props) => {
  const { isDone, id, toggleTodo } = props;

  return (
    <div className='checkBox'>
      <input
        type='checkbox'
        checked={isDone}
        value={isDone}
        onChange={() => toggleTodo(id)}
      />
    </div>
  );
};

const mapDispatchToProps = {
  toggleTodo,
};

const finalCheckbox = connect(null, mapDispatchToProps)(Checkbox);
export default finalCheckbox;
