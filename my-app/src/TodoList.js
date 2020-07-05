import React from 'react';
import Input from './Input';
import Counter from './Counter';
import Checkbox from './Checkbox';
import DeleteButton from './DeleteButton';
import './TodoList.css';

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
  addItem = () => {
    const { value, listItems } = this.state;
    if (value !== '') {
      const id = listItems.length === 0 ? 1 : listItems[listItems.length - 1].id + 1;
      const item = {
        id,
        value,
        isDone: false,
      };
      this.setState({ listItems: [...listItems, item] });
      this.setState({ value: '' });
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
  render() {
    const { value, listItems, isAll, isActive } = this.state;
    const filteredList = isAll
      ? listItems
      : listItems.filter((item) => item.isDone !== isActive);
    return (
      <div>
        <Input
          value={value}
          listItems={listItems}
          onInputChange={this.onInputChange}
          addItem={this.addItem}
        />
        {filteredList.map(({ id, value, isDone }) => (
          <div className="listItem" key={id}>
            <Checkbox isDone={isDone} onCheck={() => this.onCheck(id)} />
            <span className={isDone ? 'done' : 'undone'}>{value}</span>
            <DeleteButton onDelete={() => this.onDelete(id)} />
          </div>
        ))}
        <Counter listItems={listItems} />
        <div>
          <button onClick={() => this.filter('isAll', true)}>All</button>
          <button onClick={() => this.filter('isActive', true)}>Active</button>
          <button onClick={() => this.filter('isActive', false)}>Completed</button>
        </div>
      </div>
    );
  }
}

export default TodoList;
