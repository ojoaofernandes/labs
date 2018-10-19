import React from 'react';
import PropTypes from 'prop-types';

function Search({ placeholder, searchHandler }) {
  return (
    <div>
      <input
        type="text"
        placeholder={placeholder}
        onKeyPress={searchHandler}
      />
    </div>
  );
}

Search.propTypes = {
  placeholder: PropTypes.string.isRequired,
  searchHandler: PropTypes.func.isRequired,
};

export default Search;
