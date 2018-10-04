import React from 'react';
import PropTypes from 'prop-types';
import Message from '../Message';

import './index.css';

const messages = [
  { author: 'recipient', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing.' },
  { author: 'recipient', message: 'Nunc interdum erat lorem, ac semper nibh.' },
  { author: 'user', message: 'Suspendisse id accumsan tellus, nec malesuada orci.' },
  { author: 'user', message: 'Etiam interdum enim nec hendrerit aliquet.' },
  { author: 'recipient', message: 'Integer consequat velit id lectus elementum, at tempus.' },
  { author: 'recipient', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing.' },
  { author: 'recipient', message: 'Nunc interdum erat lorem, ac semper nibh.' },
  { author: 'user', message: 'Suspendisse id accumsan tellus, nec malesuada orci.' },
  { author: 'user', message: 'Etiam interdum enim nec hendrerit aliquet.' },
  { author: 'recipient', message: 'Integer consequat velit id lectus elementum, at tempus.' },
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

      <div className="messages">
        {messages.map(({ author, message }, index) => (
          <Message
            key={index}
            className={author === 'recipient' ? 'from' : 'to'}
            message={message}
          />
        ))}
      </div>

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
