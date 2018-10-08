import React from 'react';
import PropTypes from 'prop-types';
import ConversationDetails from '../ConversationDetails';
import MessageList from '../MessageList';
import MessageSender from '../MessageSender';

import './index.css';

function Conversation({ className, conversation }) {
  if (conversation === undefined) {
    return <div className={`conversation ${className}`} />;
  }

  const { contact, messages } = conversation;
  const extra = contact.lastMessage.time;

  return (
    <div className={`conversation ${className}`}>
      <ConversationDetails contact={contact} extra={extra} />
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
  converstion: PropTypes.shape({
    contact: PropTypes.object,
    messages: PropTypes.array,
  }),
};

export default Conversation;
