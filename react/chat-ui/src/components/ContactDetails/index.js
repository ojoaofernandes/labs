import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

function ContactDetails({ name, extra }) {
  return (
    <div className="contact-details">
      <div>{name}</div>
      <div className="extra">{extra}</div>
    </div>
  );
}

ContactDetails.propTypes = {
  name: PropTypes.string.isRequired,
  extra: PropTypes.string.isRequired,
};

export default ContactDetails;
