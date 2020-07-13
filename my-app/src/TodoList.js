import React from 'react';
import Input from './Input';
import Counter from './Counter';
import Checkbox from './Checkbox';
import DeleteButton from './DeleteButton';
import './TodoList.css';
import { connect } from 'react-redux';
import { setIsAll, setIsActive } from './store/actions/filter';
import {
  addTodo,
  toggleTodo,
  deleteTodo,
  deleteCompletedTodos,
} from './store/actions/todo';

class TodoList extends React.Component {
  render() {
    const {
      addTodo,
      setIsAll,
      setIsActive,
      toggleTodo,
      deleteTodo,
      deleteCompletedTodos,
    } = this.props;
    const { isAll, isActive } = this.props.filter;
    const { listItems } = this.props.todo;
    const filteredList = isAll
      ? listItems
      : listItems.filter((item) => item.isDone !== isActive);

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
        <div className='filter'>
          <div>
            <button onClick={() => setIsAll(true)}>All</button>
            <button onClick={() => setIsActive(true)}>Active</button>
            <button onClick={() => setIsActive(false)}>Completed</button>
          </div>
          <button
            onClick={() => {
              deleteCompletedTodos();
            }}
          >
            Remove completed
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => state;
const mapDispatchToProps = {
  addTodo,
  setIsAll,
  setIsActive,
  toggleTodo,
  deleteTodo,
  deleteCompletedTodos,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
