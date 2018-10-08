import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

function Products({ className, products }) {
  return (
    <div className={`products ${className}`}>
      {products.map(product => (
        <div key={product.id}>{product.name}</div>
      ))}
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
