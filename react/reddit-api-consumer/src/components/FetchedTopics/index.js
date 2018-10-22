import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

function FetchedTopics({ topics }) {
  return (
    <div className="fetched-topics">
      <h3>Jump To</h3>
      <div>
        {topics.join(' | ')}
      </div>
    </div>
  );
}

FetchedTopics.propTypes = {
  topics: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FetchedTopics;
