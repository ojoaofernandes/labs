import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

function ProductTable({ products }) {
  return (
    <div className="product-table">
      {products.map(product => <div key={product.id}>{product.name}</div>)}
    </div>
  );
}

ProductTable.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    language: PropTypes.string.isRequired,
  })).isRequired,
};

export default ProductTable;
