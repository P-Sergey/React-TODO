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
      counter: 0,
    };
  }
  onInputChange = (e) => {
    this.setState({ value: e.target.value });
  };
  onInputClick = () => {
    const { value, listItems } = this.state;
    if (value !== '') {
      this.setState({ listItems: [...listItems, value] });
      this.setState({ value: '' });
    }
  };
  onDeleteClick = (index) => {
    const { listItems } = this.state;
    listItems.splice(index, 1);
    this.setState({ listItems: listItems });
  };
  onCheckboxClick = (index) => {
    const check = document.getElementById(index);
    const listItem = document.getElementById('item ' + index);
    if (check.checked) {
      console.log('checked', index, listItem);
      listItem.style.textDecoration = 'line-through';
    } else {
      console.log('unchecked', index);
      listItem.style.textDecoration = 'none';
    }
  };
  render() {
    const { value, listItems } = this.state;
    return (
      <div>
        <Input
          value={value}
          listItems={listItems}
          onInputChange={this.onInputChange}
          onInputClick={this.onInputClick}
        />
        {listItems.map((item, index) => (
          <div className="listItem" key={index}>
            <Checkbox id={index} onCheckboxClick={() => this.onCheckboxClick(index)} />
            <span id={'item ' + index}>{item}</span>
            <DeleteButton
              listItems={listItems}
              onDeleteClick={() => this.onDeleteClick(index)}
            />
          </div>
        ))}
        <Counter listItems={listItems} />
      </div>
    );
  }
}

export default TodoList;
