import React from 'react';

class PostsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      posts: [],
    };
  }

  componentDidMount() {
    fetch(
      'https://gorest.co.in/public-api/posts?access-token=biGLcKTcfADe4RZxxPszlTuRt8OTRFOARUds'
    )
      .then((response) => response.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            posts: result,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }
  render() {
    const { error, isLoaded, posts } = this.state;
    console.log(posts);
    if (error) {
      return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Загрузка...</div>;
    } else {
      return (
        <ul className='postsList'>
          {posts.result.map((post) => (
            <li key={post.id} className='postsList__post'>
              {post.body}
            </li>
          ))}
        </ul>
      );
    }
  }
}
export default PostsList;
