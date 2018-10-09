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
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    location: PropTypes.string.isRequired,
  })).isRequired,
};

export default ProductList;
