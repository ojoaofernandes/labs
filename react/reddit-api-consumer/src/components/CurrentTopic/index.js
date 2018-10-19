import React from 'react';
import PropTypes from 'prop-types';

function CurrentTopic({ topic }) {
  return (
    <div>
      Current Topic:
      {topic}
      <button type="button">Refresh</button>
    </div>
  );
}

CurrentTopic.propTypes = {
  topic: PropTypes.string.isRequired,
};

export default CurrentTopic;
