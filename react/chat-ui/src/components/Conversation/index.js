import React from 'react';
import PropTypes from 'prop-types';
import MessageList from '../MessageList';
import MessageSender from '../MessageSender';

import './index.css';

function Conversation({ className, messages }) {
  return (
    <div className={`${className} conversation`}>
      <div className="recipient">
        <div className="initials">AL</div>
        <div className="details">
          <div>Alice</div>
          <div className="last-message">last message at 13:53</div>
        </div>
        <div className="options">
          <button type="button">&#x022EE;</button>
        </div>
      </div>

      <MessageList messages={messages} />
      <MessageSender />
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
