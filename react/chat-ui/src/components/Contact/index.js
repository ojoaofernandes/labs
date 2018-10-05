import React from 'react';
import PropTypes from 'prop-types';
import ContactInitials from '../ContactInitials';
import ContactDetails from '../ContactDetails';

import './index.css';

function Contact({ id, name, lastMessage, onClick }) {
  return (
    <div className="contact" onClick={onClick} data-id={id}>
      <ContactInitials name={name} />
      <ContactDetails name={name} extra={lastMessage} />
    </div>
  );
}

Contact.defaultProps = {
  onClick: null,
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  lastMessage: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Contact;
