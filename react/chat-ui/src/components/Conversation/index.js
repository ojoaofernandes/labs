import React from 'react';
import PropTypes from 'prop-types';

function Conversation({ className }) {
  return (
    <div className={className}>
      content
    </div>
  );
}

Conversation.defaultProps = {
  className: '',
};

Conversation.propTypes = {
  className: PropTypes.string,
};

export default Conversation;
