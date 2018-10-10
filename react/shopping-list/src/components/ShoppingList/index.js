import React from 'react';
import PropTypes from 'prop-types';
import ProductTable from '../ProductTable';
import './index.css';

function ShoppingList({ className, products }) {
  return (
    <div className={`shopping-list ${className}`}>
      <h2 className="header">Shopping list</h2>
      <ProductTable products={products} />
    </div>
  );
}

ShoppingList.defaultProps = {
  className: '',
};

ShoppingList.propTypes = {
  className: PropTypes.string,
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    language: PropTypes.string.isRequired,
  })).isRequired,
};

export default ShoppingList;
