import React from 'react';
import PropTypes from 'prop-types';
import ConversationDetails from '../ConversationDetails';
import MessageList from '../MessageList';
import MessageSender from '../MessageSender';

import './index.css';

function Conversation({ className, messages }) {
  return (
    <div className={`conversation ${className}`}>
      <ConversationDetails />
      <MessageList messages={messages} />
      <MessageSender />
    </div>
  );
}

Conversation.defaultProps = {
  className: '',
  messages: [],
};

Conversation.propTypes = {
  className: PropTypes.string,
  messages: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    author: PropTypes.string,
    message: PropTypes.string,
  })),
};

export default Conversation;
