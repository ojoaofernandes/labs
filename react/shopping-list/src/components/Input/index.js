import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

function Input({ className, id, name, placeholder, type }) {
  return (
    <input
      className={`input ${className}`}
      id={id}
      name={name}
      placeholder={placeholder}
      type={type}
    />
  );
}

Input.defaultProps = {
  className: '',
  id: null,
  name: null,
  placeholder: null,
  type: 'text',
};

Input.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
};

export default Input;
