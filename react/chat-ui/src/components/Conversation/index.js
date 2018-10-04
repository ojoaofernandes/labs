import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

function Conversation({ className }) {
  return (
    <div className={`${className} conversation`}>
      <div className="recipient">
        recipient details
      </div>
      <div className="messages">messages</div>
      <div className="sender">
        <textarea></textarea>
        <button className="btn btn-success">Send</button>
      </div>
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
