import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

function Button({ children, className, id, size, type }) {
  return (
    <button
      className={`button button-${size} ${type} ${className}`}
      id={id}
      type="button"
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  children: '',
  className: '',
  id: null,
  size: 'normal',
  type: 'success',
};

Button.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string,
  size: PropTypes.string,
  type: PropTypes.string,
};

export default Button;
