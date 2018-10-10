import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

function ProductTable({ products, total }) {
  return (
    <div className="product-table">
        <table className="table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.price.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th>Total</th>
              <td>{total.toFixed(2)}</td>
            </tr>
          </tfoot>
        </table>
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
  total: PropTypes.number.isRequired,
};

export default ProductTable;
