import React from 'react';
import PropTypes from 'prop-types';
import Contact from '../Contact';

import './index.css';

function ContactList({ className, contacts }) {
  return (
    <div className={`${className} contact-list`}>
      <h2 className="title">Heading</h2>
      <div className="search-bar">
        <input type="text" className="form-control" placeholder="Search..." />
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
    profile: PropTypes.string.isRequired,
    online: PropTypes.bool.isRequired,
    open: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
  })).isRequired,
};

export default ContactList;
