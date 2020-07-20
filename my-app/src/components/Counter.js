import React from 'react';
import { getListItems } from '../store/selectors/selector';
import { connect } from 'react-redux';

const Counter = (props) => {
  const { listItems } = props;
  const counter = listItems.length;
  const active = listItems.filter((item) => !item.isDone).length;
  const completed = listItems.filter((item) => item.isDone).length;

  return (
    <div className='counter'>
      <span>Items: {counter}</span>
      <span>Active: {active}</span>
      <span>Completed: {completed}</span>
    </div>
  );
};

const mapStateToProps = (state) => ({
  listItems: getListItems(state),
});

const finalCounter = connect(mapStateToProps)(Counter);
export default finalCounter;
