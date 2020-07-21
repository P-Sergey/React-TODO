import React from 'react';
import Error from './Error';
import Loading from './Loading';
import { connect } from 'react-redux';
import { setLoading, getPosts } from '../store/actions';
import {
  getSettedPosts,
  getSettedLoading,
  getSettedError,
} from '../store/selectors/selector';

class PostsList extends React.Component {
  componentDidMount() {
    const { setLoading, getPosts } = this.props;

    setLoading(true);
    getPosts();
  }

  render() {
    const { posts, loading, error } = this.props;
    if (loading) {
      return <Loading />;
    }
    if (error) {
      return <Error error={error} />;
    }
    return (
      <ul className='postsList'>
        {posts.map((post) => (
          <li key={post.id} className='postsList__post'>
            {post.title}
          </li>
        ))}
      </ul>
    );
  }
}

const mapStateToProps = (state) => ({
  posts: getSettedPosts(state),
  loading: getSettedLoading(state),
  error: getSettedError(state),
});
const mapDispatchToProps = {
  getPosts,
  setLoading,
};

const finalPostsList = connect(mapStateToProps, mapDispatchToProps)(PostsList);
export default finalPostsList;
