import React from 'react';

import './index.css';

function ConversationDetails() {
  return (
    <div className="conversation-details">
      <div className="initials">AL</div>
      <div className="details">
        <div>Alice</div>
        <div className="last-message">last message at 13:53</div>
      </div>
      <div className="options">
        <button type="button">&#x022EE;</button>
      </div>
    </div>
  );
}

export default ConversationDetails;
