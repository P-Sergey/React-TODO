import React from 'react';
import Input from './Input';
import Counter from './Counter';
import DeleteButton from './DeleteButton';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      listItems: [],
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
  /* onDeleteClick = () => {
    const { listItems } = this.state;
    this.setState({ listItems: listItems.splice(index, 1) });
  }; */
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
          <div key={index}>
            {item} <DeleteButton index={this.index} listItems={listItems} />
          </div>
        ))}
        <Counter listItems={listItems} />
      </div>
    );
  }
}

export default TodoList;
