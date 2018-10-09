import React from 'react';
import PropTypes from 'prop-types';
import Filter from '../Filter';
import ProductList from '../ProductList';
import './index.css';

function Products({ className, products }) {
  return (
    <div className={`products ${className}`}>
      <h2 className="header">Products</h2>
      <Filter />
      <ProductList products={products} />
    </div>
  );
}

Products.defaultProps = {
  className: '',
};

Products.propTypes = {
  className: PropTypes.string,
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    language: PropTypes.string.isRequired,
  })).isRequired,
};

export default Products;
