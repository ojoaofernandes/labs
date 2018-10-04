import React from 'react';
import PropTypes from 'prop-types';
import Message from '../Message';

import './index.css';

function MessageList({ messages }) {
  return (
    <div className="message-list">
      {messages.map(({ id, author, message }) => (
        <Message
          key={id}
          className={author === 'recipient' ? 'from' : 'to'}
          message={message}
        />
      ))}
    </div>
  );
}

MessageList.defaultProps = {
  messages: [],
};

MessageList.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    author: PropTypes.string,
    message: PropTypes.string,
  })),
};

export default MessageList;
