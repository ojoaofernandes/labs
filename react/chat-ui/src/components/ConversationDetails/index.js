import React from 'react';
import Contact from '../Contact';

import './index.css';

function ConversationDetails({ contact }) {
  const { lastMessage: { time } } = contact;

  return (
    <div className="conversation-details">
      <Contact contact={contact} extra={`last message at ${time}`} />
      <div className="options">
        <button type="button">&times;</button>
      </div>
    </div>
  );
}

ConversationDetails.defaultProps = {
  contact: {},
  extra: '',
};

export default ConversationDetails;
