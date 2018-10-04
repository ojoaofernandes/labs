import React from 'react';
import PropTypes from 'prop-types';
import ContactInitials from '../ContactInitials';
import ContactDetails from '../ContactDetails';

import './index.css';

function Contact({ name, lastMessage, onClick }) {
  return (
    <div className="contact" onClick={onClick}>
      <ContactInitials name={name} />
      <ContactDetails name={name} extra={lastMessage} />
    </div>
  );
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  lastMessage: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Contact;
