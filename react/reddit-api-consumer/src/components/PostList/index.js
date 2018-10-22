import React from 'react';
import PropTypes from 'prop-types';
import Post from '../Post';
import './index.css';

function PostList({ posts }) {
  if (posts.length === 0) return null;

  return (
    <div className="post-list">
      <div className="container">
        <h2>Posts</h2>

        {posts.map(p => (
          <Post
            key={p.id}
            title={p.title}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquam ligula ut erat interdum mattis. Vestibulum ligula orci, volutpat quis sodales et, mollis nec orci."
            date="2018-10-22 10:45"
          />
        ))}
      </div>
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
