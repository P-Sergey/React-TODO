import React from 'react';
import Input from './Input';
import Counter from './Counter';
import Checkbox from './Checkbox';
import DeleteButton from './DeleteButton';
import './TodoList.css';
import { connect } from 'react-redux';
import {
  addTodo,
  toggleTodo,
  deleteTodo,
  deleteCompletedTodo,
} from './store/actions/actions';
import { bindActionCreators } from 'redux';

class TodoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      isAll: true,
      isActive: false,
    };
  }

  onInputChange = (e) => {
    this.setState({ value: e.target.value });
  };

  addItem = (e) => {
    const { listItems } = this.props;
    const { value } = this.state;

    const id =
      listItems.length === 0 ? 1 : listItems[listItems.length - 1].id + 1;
    if (e.which === 13) {
      if (value !== '') {
        const item = {
          id,
          value,
          isDone: false,
        };
        //const dispatch = this.props.dispatch;
        addTodo(item);
        //this.setState({ listItems: [...listItems, item], value: '' });
      }
    }
  };

  onDelete = (id) => {
    /* const { listItems } = this.props;
    const newLisItems = listItems.filter((item) => item.id !== id);

    this.setState({ listItems: newLisItems }); */
    //const dispatch = this.props.dispatch;
    deleteTodo(id);
  };

  onCheck = (id) => {
    /*const { listItems } = this.props;

     const newLisItems = listItems.map((item) => {
      if (id === item.id) {
        return {
          ...item,
          isDone: !item.isDone,
        };
      }
      return item;
    });
    this.setState({ listItems: newLisItems }); */
    //const dispatch = this.props.dispatch;
    toggleTodo(id);
  };

  filter = (filter, value) => {
    this.setState({
      isAll: filter === 'isAll' ? true : false,
      isActive: value,
    });
  };

  removeCompleted = () => {
    /* const { listItems } = this.props;
    this.setState({ listItems: listItems.filter((item) => !item.isDone) }); */
    //const dispatch = this.props.dispatch;
    deleteCompletedTodo();
  };

  render() {
    const { value, isAll, isActive } = this.state;
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
          <button onClick={this.removeCompleted}>Remove completed</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => ({
  addTodo: bindActionCreators(addTodo, dispatch),
  toggleTodo: bindActionCreators(toggleTodo, dispatch),
  deleteTodo: bindActionCreators(deleteTodo, dispatch),
  deleteCompletedTodo: bindActionCreators(deleteCompletedTodo, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
