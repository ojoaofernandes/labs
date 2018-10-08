import React from 'react';
import PropTypes from 'prop-types';
import Contact from '../Contact';

import './index.css';

function ConversationDetails({ contact, closeConversation }) {
  const { lastMessage: { time } } = contact;

  return (
    <div className="conversation-details">
      <Contact contact={contact} extra={`last message at ${time}`} />
      <div className="options">
        <button type="button" onClick={closeConversation}>&times;</button>
      </div>
    </div>
  );
}

ConversationDetails.defaultProps = {
  contact: {},
};

ConversationDetails.propTypes = {
  contact: PropTypes.shape(),
  closeConversation: PropTypes.func.isRequired,
};

export default ConversationDetails;
