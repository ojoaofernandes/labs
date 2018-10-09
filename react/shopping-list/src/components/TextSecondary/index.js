import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

function TextSecondary({ children, className, id }) {
  return (
    <span className={`text-secondary ${className}`} id={id}>
      {children}
    </span>
  );
}

TextSecondary.defaultProps = {
  children: '',
  className: '',
  id: null,
};

TextSecondary.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string,
};

export default TextSecondary;
