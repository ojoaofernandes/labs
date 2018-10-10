import React from 'react';
import PropTypes from 'prop-types';
import SessionTime from '../../containers/SessionTime';
import './index.css';

function ShoppingList({ className }) {
  return (
    <div className={`shopping-list ${className}`}>
      <SessionTime />
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
