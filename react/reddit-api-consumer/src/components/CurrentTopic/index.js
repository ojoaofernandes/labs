import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

function CurrentTopic({ topic, fetchedAt }) {
  return (
    <div className="current-topic">
      <h3>Current Topic</h3>

      {!topic
        ? <div className="topic text-secondary">No topics fetched yet.</div>
        : (
          <React.Fragment>
            <div className="topic">
              {topic}
              <button type="button">Refresh</button>
            </div>
            <span className="text-secondary">
              Fetched at
              {fetchedAt}
            </span>
          </React.Fragment>
        )
      }
    </div>
  );
}

CurrentTopic.defaultProps = {
  topic: null,
  fetchedAt: null,
};

CurrentTopic.propTypes = {
  topic: PropTypes.string,
  fetchedAt: PropTypes.string,
};

export default CurrentTopic;
