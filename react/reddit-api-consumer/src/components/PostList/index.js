import React from 'react';
import PropTypes from 'prop-types';

function PostList({ posts }) {
  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {posts.map(p => <li key={p.id}>{p.title}</li>)}
      </ul>
    </div>
  );
}

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
};

export default PostList;
