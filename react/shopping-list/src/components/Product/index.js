import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

function Product({
  id, name, price, location,
}) {
  return (
    <div className="product" data-id={id}>
      <div className="thumb">
        <div>{name.slice(0, 3)}</div>
      </div>
      <div className="data">
        <div className="name">{name}</div>
        <div className="details">
          <div className="location">stocked in {location}</div>
          <div className="price">$ {price.toFixed(2)}</div>
        </div>
      </div>
    </div>
  );
}

Product.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  location: PropTypes.string.isRequired,
};

export default Product;
