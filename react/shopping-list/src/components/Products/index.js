import React from 'react';
import PropTypes from 'prop-types';
import Input from '../Input';
import Product from '../Product';
import './index.css';

function Products({ className, products }) {
  return (
    <div className={`products ${className}`}>
      <h2 className="header">Products</h2>

      <div className="filter">
        <Input placeholder="Search..." />
      </div>

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
