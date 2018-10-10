import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

function ShoppingList({ className }) {
  return (
    <div className={`shopping-list ${className}`}>
    </div>
  );
}

ShoppingList.defaultProps = {
  className: '',
  sessionTime: 0,
};

ShoppingList.propTypes = {
  className: PropTypes.string,
  sessionTime: PropTypes.number,
};

export default ShoppingList;
