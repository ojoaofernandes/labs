import React from 'react';
import PropTypes from 'prop-types';
import Contact from '../Contact';

import './index.css';

function ContactList({ className, contacts }) {
  return (
    <div className={`contact-list ${className}`}>
      <h2 className="title">Contacts</h2>

      <div className="search-bar">
        <input type="text" placeholder="Search..." />
      </div>

      <div className="list">
        {contacts.map((contact, index) => (
          <Contact key={index} {...contact} />
        ))}
      </div>
    </div>
  );
}

ContactList.defaultProps = {
  className: '',
};

ContactList.propTypes = {
  className: PropTypes.string,
  contacts: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    lastMessage: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  })).isRequired,
};

export default ContactList;
