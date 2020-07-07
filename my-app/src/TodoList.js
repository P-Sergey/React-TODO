import React from 'react';
import Input from './Input';
import Counter from './Counter';
import Checkbox from './Checkbox';
import DeleteButton from './DeleteButton';
import './TodoList.css';
import {
  ADD_TODO,
  TOGGLE_TODO,
  DELETE_TODO,
  DELETE_COMPLETED_TODOS,
} from './store/actions/actions';

class TodoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      listItems: [],
      isAll: true,
      isActive: false,
    };
  }

  onInputChange = (e) => {
    this.setState({ value: e.target.value });
  };

  addItem = (e) => {
    const { value, listItems } = this.state;

    if (e.which === 13) {
      if (value !== '') {
        const id =
          listItems.length === 0 ? 1 : listItems[listItems.length - 1].id + 1;

        const item = {
          id,
          value,
          isDone: false,
        };

        this.setState({ listItems: [...listItems, item], value: '' });
      }
    }
  };

  onDelete = (id) => {
    const { listItems } = this.state;
    const newLisItems = listItems.filter((item) => item.id !== id);

    this.setState({ listItems: newLisItems });
  };

  onCheck = (id) => {
    const { listItems } = this.state;

    const newLisItems = listItems.map((item) => {
      if (id === item.id) {
        return {
          ...item,
          isDone: !item.isDone,
        };
      }
      return item;
    });
    this.setState({ listItems: newLisItems });
  };

  filter = (type, value) => {
    this.setState({
      isAll: type === 'isAll' ? true : false,
      isActive: value,
    });
  };

  removeDone = () => {
    const { listItems } = this.state;
    this.setState({ listItems: listItems.filter((item) => !item.isDone) });
  };

  render() {
    const { value, listItems, isAll, isActive } = this.state;
    const filteredList = isAll
      ? listItems
      : listItems.filter((item) => item.isDone !== isActive);

    const counter = listItems.length;
    const active = listItems.filter((item) => !item.isDone).length;
    const completed = listItems.filter((item) => item.isDone).length;

    return (
      <div>
        <Input
          value={value}
          listItems={listItems}
          onInputChange={this.onInputChange}
          addItem={this.addItem}
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
          <button onClick={this.removeDone}>Remove completed</button>
        </div>
      </div>
    );
  }
}

export default TodoList;
