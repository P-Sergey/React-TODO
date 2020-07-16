import React from 'react';
import Input from './Input';
import Filter from './Filter';
import Counter from './Counter';
import Checkbox from './Checkbox';
import DeleteButton from './DeleteButton';
import PostsList from './PostsList';
import './TodoList.css';
import { connect } from 'react-redux';
import { getListItems, getFilteredList } from '../store/selectors/selector';
import {
  setIsAll,
  setIsActive,
  addTodo,
  toggleTodo,
  deleteTodo,
  deleteCompletedTodos,
} from '../store/actions';

class TodoList extends React.Component {
  render() {
    const {
      addTodo,
      setIsAll,
      setIsActive,
      toggleTodo,
      deleteTodo,
      deleteCompletedTodos,
      listItems,
      filteredList,
    } = this.props;

    return (
      <div>
        <Input addTodo={addTodo} listItems={listItems} />
        {filteredList.map(({ id, value, isDone }) => (
          <div className='listItem' key={id}>
            <Checkbox isDone={isDone} onCheck={() => toggleTodo(id)} />
            <span className={isDone ? 'done' : 'active'}>{value}</span>
            <DeleteButton onDelete={() => deleteTodo(id)} />
          </div>
        ))}
        <div>
          <Counter listItems={listItems} />
        </div>
        <Filter
          setIsAll={setIsAll}
          setIsActive={setIsActive}
          deleteCompleted={deleteCompletedTodos}
        />
        <PostsList />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  listItems: getListItems(state),
  filteredList: getFilteredList(state),
});
const mapDispatchToProps = {
  addTodo,
  setIsAll,
  setIsActive,
  toggleTodo,
  deleteTodo,
  deleteCompletedTodos,
};

const finalTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default finalTodoList;
