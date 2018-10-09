import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

function Badge({ children, className, id, type }) {
  return (
    <span className={`badge ${type} ${className}`} id={id}>
      {children}
    </span>
  );
}

Badge.defaultProps = {
  children: '',
  className: '',
  id: null,
  type: 'success',
};

Badge.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.string,
};

export default Badge;
