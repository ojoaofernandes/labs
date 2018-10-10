import React from 'react';
import PropTypes from 'prop-types';
import ProductTable from '../../containers/ProductTable';
import './index.css';

function ShoppingList({ className }) {
  return (
    <div className={`shopping-list ${className}`}>
      <h2 className="header">Shopping list</h2>
      <ProductTable />
    </div>
  );
}

ShoppingList.defaultProps = {
  className: '',
};

ShoppingList.propTypes = {
  className: PropTypes.string,
};

export default ShoppingList;
