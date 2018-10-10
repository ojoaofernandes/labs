import React from 'react';
import PropTypes from 'prop-types';
import Filter from '../Filter';
import ProductList from '../../containers/ProductList';
import './index.css';

function Products({ className }) {
  return (
    <div className={`products ${className}`}>
      <h2 className="header">Products</h2>
      <Filter />
      <ProductList />
    </div>
  );
}

Products.defaultProps = {
  className: '',
};

Products.propTypes = {
  className: PropTypes.string,
};

export default Products;
