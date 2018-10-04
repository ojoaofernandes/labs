import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

function Message({ className, message }) {
  return (
    <div className={`message ${className}`}>
      <span>{message}</span>
    </div>
  );
}

Message.defaultProps = {
  className: '',
};

Message.propTypes = {
  className: PropTypes.string,
  message: PropTypes.string.isRequired,
};

export default Message;
