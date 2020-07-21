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
import { toggleTodo, deleteTodo } from '../store/actions';

class TodoList extends React.Component {
  render() {
    const { filteredList, deleteTodo, toggleTodo } = this.props;

    return (
      <div>
        <Input />
        {filteredList.map(({ id, value, isDone }) => (
          <div className='listItem' key={id}>
            <Checkbox isDone={isDone} toggleTodo={() => toggleTodo(id)} />
            <span className={isDone ? 'done' : 'active'}>{value}</span>
            <DeleteButton deleteTodo={() => deleteTodo(id)} />
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

const mapDispatchToProps = {
  deleteTodo,
  toggleTodo,
};

const finalTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default finalTodoList;
