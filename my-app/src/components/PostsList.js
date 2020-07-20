import React from 'react';
import axios from 'axios';
//import { getPosts } from '../store/actions';

class PostsList extends React.Component {
  componentDidMount() {
    const { setPosts, setLoading, setError, getPosts } = this.props;

    setLoading(true);
    getPosts();
    /* axios
      .get(
        'https://gorest.co.in/public-api/posts?access-token=biGLcKTcfADe4RZxxPszlTuRt8OTRFOARUds'
      )
      .then((response) => {
        if (!Array.isArray(response.data.result) || response.data.result === undefined) {
          throw new Error('Wrong data');
        }
        setPosts(response.data.result);
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false)); */
  }

  render() {
    const { posts, loading, error } = this.props;
    if (error) {
      return <div>Ошибка: {error.message}</div>;
    } else if (loading) {
      return <div>Загрузка...</div>;
    } else {
      return (
        <ul className="postsList">
          {posts.map((post) => (
            <li key={post.id} className="postsList__post">
              {post.title}
            </li>
          ))}
        </ul>
      );
    }
  }
}
export default PostsList;
