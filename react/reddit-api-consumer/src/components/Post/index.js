import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

function Post({ date, description, title }) {
  return (
    <div className="post">
      <h3 className="title">{title}</h3>
      <p className="description">{description}</p>
      <span className="date secondary-text">
        Posted at
        {date}
      </span>
    </div>
  );
}

Post.propTypes = {
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Post;
