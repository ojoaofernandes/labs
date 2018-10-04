import React from 'react';
import Contact from '../Contact';

import './index.css';

function ConversationDetails() {
  return (
    <div className="conversation-details">
      <Contact name="Alice" lastMessage="last message at 16:50" />
      <div className="options">
        <button type="button">&#x022EE;</button>
      </div>
    </div>
  );
}

export default ConversationDetails;