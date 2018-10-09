import React from 'react';
import PropTypes from 'prop-types';
import Filter from '../Filter';
import Product from '../Product';
import './index.css';

function Products({ className, products }) {
  return (
    <div className={`products ${className}`}>
      <h2 className="header">Products</h2>

      <Filter />

      <div className="product-list">
        {products.map(product => <Product key={product.id} {...product} />)}
      </div>
    </div>
  );
}

Products.defaultProps = {
  className: '',
};

Products.propTypes = {
  className: PropTypes.string,
  products: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
  })).isRequired,
};

export default Products;
