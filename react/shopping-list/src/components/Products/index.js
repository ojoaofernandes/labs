import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

function Products({ className }) {
  return (
    <div className={`products ${className}`}>

    </div>
  );
}

PropTypes.defaultProps = {
  className: '',
};

Products.propTypes = {
  className: PropTypes.string,
};

export default Products;
