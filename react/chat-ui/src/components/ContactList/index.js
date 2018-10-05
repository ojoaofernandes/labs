import React from 'react';
import PropTypes from 'prop-types';
import Contact from '../../containers/Contact';

import './index.css';

function ContactList({ className, contacts }) {
  return (
    <div className={`contact-list ${className}`}>
      <h2 className="title">Contacts</h2>

      <div className="search-bar">
        <input type="text" placeholder="Search..." />
      </div>

      <div className="list">
        {contacts.map(contact => (
          <Contact
            key={contact.id}
            contact={contact}
            extra={contact.lastMessage.message}
          />
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
    lastMessage: PropTypes.shape({
      message: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
    }).isRequired,
  })).isRequired,
};

export default ContactList;
