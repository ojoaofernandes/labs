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
        {contacts.map(({ id, name, lastMessage }) => (
          <Contact
            key={id}
            name={name}
            lastMessage={lastMessage.message}
            onClick={() => console.log(`open conversation ${id}`)}
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
