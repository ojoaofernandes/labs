import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

function Button({ children, className, id, onClick, size, type }) {
  return (
    <button
      className={`button button-${size} ${type} ${className}`}
      id={id}
      onClick={onClick}
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
  onClick: null,
  size: 'normal',
  type: 'success',
};

Button.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string,
  onClick: PropTypes.func,
  size: PropTypes.string,
  type: PropTypes.string,
};

export default Button;
