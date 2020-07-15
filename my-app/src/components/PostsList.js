import React from 'react';

const PostsList = ({ posts }) =>
  posts.map((post) => <div key={id}>{post}</div>);

export default PostsList;
