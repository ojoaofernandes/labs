import React from 'react';
import PropTypes from 'prop-types';
import Product from '../Product';
import './index.css';

function ProductList({ products }) {
  return (
    <div className="product-list">
      {products.map(product => <Product key={product.id} {...product} />)}
    </div>
  );
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
  })).isRequired,
};

export default ProductList;
