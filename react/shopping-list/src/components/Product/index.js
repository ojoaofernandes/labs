import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

function Product({
  id, name, price, location,
}) {
  return (
    <div className="product" data-id={id}>
      {name}
      ,
      {price}
      ,
      {location}
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
