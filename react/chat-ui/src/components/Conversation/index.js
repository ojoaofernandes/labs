import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

function Conversation({ className }) {
  return (
    <div className={`${className} conversation`}>
      <div className="recipient">
        <div className="initials">AL</div>
        <div className="details">
          <div>Alice</div>
          <div className="last-message">last message at 13:53</div>
        </div>
        <div className="options">
          <button className="btn btn-secondary">&#x022EE;</button>
        </div>
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
