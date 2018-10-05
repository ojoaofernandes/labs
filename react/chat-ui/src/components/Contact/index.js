import React from 'react';
import PropTypes from 'prop-types';
import ContactInitials from '../ContactInitials';
import ContactDetails from '../ContactDetails';

import './index.css';

function Contact({ contact, extra, openConversation }) {
  const clickProps = !openConversation ? {} : {
    onClick: openConversation.bind(null, contact),
    onKeyPress: openConversation.bind(null, contact),
    role: 'button',
    tabIndex: 0,
  };

  const { name } = contact;

  return (
    <div className="contact" {...clickProps}>
      <ContactInitials name={name} />
      <ContactDetails name={name} extra={extra} />
    </div>
  );
}

Contact.defaultProps = {
  openConversation: null,
};

Contact.propTypes = {
  openConversation: PropTypes.func,
};

export default Contact;
