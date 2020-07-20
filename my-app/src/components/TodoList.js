import React from 'react';
import Input from './Input';
import Filter from './Filter';
import Counter from './Counter';
import Checkbox from './Checkbox';
import PostsList from './PostsList';
import DeleteButton from './DeleteButton';
import './TodoList.css';
import { connect } from 'react-redux';
import { getFilteredList } from '../store/selectors/selector';

class TodoList extends React.Component {
  render() {
    const { filteredList } = this.props;

    return (
      <div>
        <Input />
        {filteredList.map(({ id, value, isDone }) => (
          <div className='listItem' key={id}>
            <Checkbox isDone={isDone} id={id} />
            <span className={isDone ? 'done' : 'active'}>{value}</span>
            <DeleteButton id={id} />
          </div>
        ))}
        <div>
          <Counter />
        </div>
        <Filter />
        <PostsList />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  filteredList: getFilteredList(state),
});

const finalTodoList = connect(mapStateToProps)(TodoList);

export default finalTodoList;
