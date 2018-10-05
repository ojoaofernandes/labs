import React from 'react';
import PropTypes from 'prop-types';
import ContactInitials from '../ContactInitials';
import ContactDetails from '../ContactDetails';

import './index.css';

function Contact({ name, lastMessage, openConversation }) {
  const clickProps = !openConversation ? {} : {
    onClick: openConversation,
    onKeyPress: openConversation,
    role: 'button',
    tabIndex: 0,
  };

  return (
    <div className="contact" {...clickProps}>
      <ContactInitials name={name} />
      <ContactDetails name={name} extra={lastMessage} />
    </div>
  );
}

Contact.defaultProps = {
  openConversation: null,
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  lastMessage: PropTypes.string.isRequired,
  openConversation: PropTypes.func,
};

export default Contact;
