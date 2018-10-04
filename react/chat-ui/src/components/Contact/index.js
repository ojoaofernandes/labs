import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Contact({
  name, profile, online, open, onClick,
}) {
  return (
    <div
      className={classNames('contact', { online, open })}
      onClick={onClick}
    >
      <div>{name}</div>
      <div>{profile}</div>
    </div>
  );
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  profile: PropTypes.string.isRequired,
  online: PropTypes.bool.isRequired,
  open: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Contact;
