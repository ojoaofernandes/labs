import React from 'react';
import PropTypes from 'prop-types';

function FetchedTopics({ topics }) {
  return (
    <div>
      Jump to:
      {topics.join(' | ')}
    </div>
  );
}

FetchedTopics.propTypes = {
  topics: PropTypes.string.isRequired,
};

export default FetchedTopics;
