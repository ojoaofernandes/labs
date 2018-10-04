import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './index.css';

function Contact({
  name, lastMessage, online, open, onClick,
}) {
  return (
    <div
      className={classNames('contact', { online, open })}
      onClick={onClick}
    >
      <div className="thumb">{name.slice(0,2).toUpperCase()}</div>
      <div>
        <div>{name}</div>
        <div className="last-message text-truncate">{lastMessage}</div>
      </div>
    </div>
  );
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  lastMessage: PropTypes.string.isRequired,
  online: PropTypes.bool.isRequired,
  open: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Contact;
