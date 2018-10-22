import React from 'react';
import PropTypes from 'prop-types';

function CurrentTopic({ topic }) {
  return (
    <div>
      <h3>Current Topic</h3>
      <div>
        {topic}
        <button type="button">Refresh</button>
      </div>
    </div>
  );
}

CurrentTopic.propTypes = {
  topic: PropTypes.string.isRequired,
};

export default CurrentTopic;
