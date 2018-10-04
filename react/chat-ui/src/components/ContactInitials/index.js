import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

function ContactInitials({ name }) {
  const initials = name.slice(0, 2).toUpperCase();

  return (
    <div className="contact-initials">{initials}</div>
  );
}

ContactInitials.propTypes = {
  name: PropTypes.string.isRequired,
};

export default ContactInitials;
