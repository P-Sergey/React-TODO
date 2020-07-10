import React from 'react';
import Input from './Input';
import Counter from './Counter';
import Checkbox from './Checkbox';
import DeleteButton from './DeleteButton';
import './TodoList.css';
import { connect } from 'react-redux';
import {
  addTodo,
  filterTodo,
  toggleTodo,
  deleteTodo,
  deleteCompletedTodo,
} from './store/actions/actions';

class TodoList extends React.Component {
  /* addItem = (e) => {
    const { listItems } = this.props;
    const { value } = this.props;

    if (e.which === 13) {
      if (value !== '') {
        const id =
          listItems.length === 0 ? 1 : listItems[listItems.length - 1].id + 1;
        const item = {
          id,
          value,
          isDone: false,
        };
        //const dispatch = this.props.dispatch;
        this.props.addTodo(item);
        //this.setState({ listItems: [...listItems, item], value: '' });
      }
    }
  }; */

  onDelete = (id) => {
    this.props.deleteTodo(id);
  };

  onCheck = (id) => {
    this.props.toggleTodo(id);
  };

  filter = (filter, value) => {
    this.props.filterTodo(filter, value);
  };

  removeCompleted = () => {
    this.props.deleteCompletedTodo();
  };

  render() {
    const { isAll, isActive } = this.props;
    const { listItems } = this.props;
    const filteredList = isAll
      ? listItems
      : listItems.filter((item) => item.isDone !== isActive);

    const counter = listItems.length;
    const active = listItems.filter((item) => !item.isDone).length;
    const completed = listItems.filter((item) => item.isDone).length;

    return (
      <div>
        <Input
          addTodo={this.props.addTodo}
          listItems={listItems}
          //addItem={this.addItem}
        />
        {filteredList.map(({ id, value, isDone }) => (
          <div className='listItem' key={id}>
            <Checkbox isDone={isDone} onCheck={() => this.onCheck(id)} />
            <span className={isDone ? 'done' : 'active'}>{value}</span>
            <DeleteButton onDelete={() => this.onDelete(id)} />
          </div>
        ))}
        <div>
          <Counter counter={counter} active={active} completed={completed} />
        </div>
        <div className='filter'>
          <div>
            <button onClick={() => this.filter('isAll', true)}>All</button>
            <button onClick={() => this.filter('isActive', true)}>
              Active
            </button>
            <button onClick={() => this.filter('isActive', false)}>
              Completed
            </button>
          </div>
          <button onClick={this.removeCompleted}>Remove completed</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => state;
const mapDispatchToProps = {
  addTodo,
  filterTodo,
  toggleTodo,
  deleteTodo,
  deleteCompletedTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
