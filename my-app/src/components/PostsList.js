import React from 'react';
import axios from 'axios';

class PostsList extends React.Component {
  componentDidMount() {
    const { setPosts, setLoading, setError } = this.props;

    setLoading(true);
    axios
      .get(
        'https://gorest.co.in/public-api/posts?access-token=biGLcKTcfADe4RZxxPszlTuRt8OTRFOARUds'
      )
      .then((response) => {
        if (!Array.isArray(response.data.result)) {
          throw new Error('Wrong data');
        }
        setPosts(response.data.result);
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }

  render() {
    const { posts, loading, error } = this.props;
    if (error) {
      return <div>Ошибка: {error.message}</div>;
    } else if (loading) {
      return <div>Загрузка...</div>;
    } else {
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
}
export default PostsList;
