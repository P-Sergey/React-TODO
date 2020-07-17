import React from 'react';
import Input from './Input';
import Filter from './Filter';
import Counter from './Counter';
import Checkbox from './Checkbox';
import PostsList from './PostsList';
import DeleteButton from './DeleteButton';
import './TodoList.css';
import { connect } from 'react-redux';
import {
  getListItems,
  getFilteredList,
  getSettedPosts,
  getSettedLoading,
  getSettedError,
} from '../store/selectors/selector';
import {
  setIsAll,
  setIsActive,
  addTodo,
  toggleTodo,
  deleteTodo,
  deleteCompletedTodos,
  setPosts,
  setLoading,
  setError,
  getPosts,
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
      posts,
      loading,
      error,
      setPosts,
      setLoading,
      setError,
      getPosts,
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
        <PostsList
          posts={posts}
          loading={loading}
          error={error}
          setPosts={setPosts}
          setLoading={setLoading}
          setError={setError}
          getPosts={getPosts}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  listItems: getListItems(state),
  filteredList: getFilteredList(state),
  posts: getSettedPosts(state),
  loading: getSettedLoading(state),
  error: getSettedError(state),
});
const mapDispatchToProps = {
  addTodo,
  setIsAll,
  setIsActive,
  toggleTodo,
  deleteTodo,
  deleteCompletedTodos,
  setPosts,
  setLoading,
  setError,
  getPosts,
};

const finalTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default finalTodoList;
