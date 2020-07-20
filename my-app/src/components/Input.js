import React from 'react';
import { addTodo } from '../store/actions';
import { connect } from 'react-redux';
import { getListItems } from '../store/selectors/selector';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  addItem = (event) => {
    const { listItems, addTodo } = this.props;
    const { value } = this.state;

    if (event.which === 13) {
      if (value !== '') {
        const id =
          listItems.length === 0 ? 1 : listItems[listItems.length - 1].id + 1;
        const item = {
          id,
          value,
          isDone: false,
        };
        addTodo(item);
        this.setState({ value: '' });
      }
    }
  };

  render() {
    const { value } = this.state;
    return (
      <div>
        <div className='inputHeader'>TODO list</div>
        <div onKeyPress={this.addItem}>
          <input
            className='input'
            value={value}
            placeholder='Input new task...'
            onChange={(event) => this.setState({ value: event.target.value })}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  listItems: getListItems(state),
});

const mapDispatchToProps = {
  addTodo,
};

const finalInput = connect(mapStateToProps, mapDispatchToProps)(Input);
export default finalInput;
