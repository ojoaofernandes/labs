import React from 'react';
import PropTypes from 'prop-types';
import MessageList from '../MessageList';

import './index.css';

const messages = [
  { id: 'a', author: 'recipient', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing.' },
  { id: 'b', author: 'recipient', message: 'Nunc interdum erat lorem, ac semper nibh.' },
  { id: 'c', author: 'user', message: 'Suspendisse id accumsan tellus, nec malesuada orci.' },
  { id: 'd', author: 'user', message: 'Etiam interdum enim nec hendrerit aliquet.' },
  { id: 'e', author: 'recipient', message: 'Integer consequat velit id lectus elementum, at tempus.' },
  { id: 'f', author: 'recipient', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing.' },
  { id: 'g', author: 'recipient', message: 'Nunc interdum erat lorem, ac semper nibh.' },
  { id: 'h', author: 'user', message: 'Suspendisse id accumsan tellus, nec malesuada orci.' },
  { id: 'i', author: 'user', message: 'Etiam interdum enim nec hendrerit aliquet.' },
  { id: 'j', author: 'recipient', message: 'Integer consequat velit id lectus elementum, at tempus.' },
];

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
          <button type="button">&#x022EE;</button>
        </div>
      </div>

      <MessageList messages={messages} />

      <div className="sender">
        <textarea />
        <button type="button">Send</button>
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
