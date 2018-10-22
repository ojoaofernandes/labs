import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

function CurrentTopic({ topic }) {
  return (
    <div className="current-topic">
      <h3>Current Topic</h3>

      <div className="topic">
        {topic}
        <button type="button">Refresh</button>
      </div>

      <span className="secondary-text">Updated at 11:10 am</span>
    </div>
  );
}

CurrentTopic.propTypes = {
  topic: PropTypes.string.isRequired,
};

export default CurrentTopic;
