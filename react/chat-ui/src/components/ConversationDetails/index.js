import React from 'react';
import Contact from '../Contact';

import './index.css';

function ConversationDetails({ contact, extra }) {
  return (
    <div className="conversation-details">
      <Contact />
      <div className="options">
        <button type="button">&#x022EE;</button>
      </div>
    </div>
  );
}

ConversationDetails.defaultProps = {
  contact: {},
  extra: '',
};

export default ConversationDetails;
