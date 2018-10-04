import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

function Contact({ name, lastMessage, onClick }) {
  return (
    <div className="contact" onClick={onClick}>
      <div className="initials">{name.slice(0, 2).toUpperCase()}</div>
      <div className="details">
        <div>{name}</div>
        <div className="last-message">{lastMessage}</div>
      </div>
    </div>
  );
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  lastMessage: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Contact;
