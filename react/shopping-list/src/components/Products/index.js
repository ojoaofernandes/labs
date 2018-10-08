import React from 'react';
import PropTypes from 'prop-types';
import Product from '../Product';
import './index.css';

function Products({ className, products }) {
  return (
    <div className={`products ${className}`}>
      {products.map(product => <Product key={product.id} {...product} />)}
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
