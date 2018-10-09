import React from 'react';
import PropTypes from 'prop-types';
import Badge from '../Badge';
import TextSecondary from '../TextSecondary';
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
          <TextSecondary>stocked in {location}</TextSecondary>
          <Badge type="success">$ {price.toFixed(2)}</Badge>
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
