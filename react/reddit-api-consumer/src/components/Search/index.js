import React from 'react';
import PropTypes from 'prop-types';

function Search({ className, placeholder, searchHandler }) {
  return (
    <input
      type="text"
      className={className}
      placeholder={placeholder}
      onKeyPress={searchHandler}
    />
  );
}

Search.defaultProps = {
  className: '',
};

Search.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  searchHandler: PropTypes.func.isRequired,
};

export default Search;
