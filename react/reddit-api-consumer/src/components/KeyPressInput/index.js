import React from 'react';
import PropTypes from 'prop-types';

function KeyPressInput({ className, onKeyPress, placeholder }) {
  return (
    <input
      type="text"
      className={className}
      onKeyPress={onKeyPress}
      placeholder={placeholder}
    />
  );
}

KeyPressInput.defaultProps = {
  className: '',
};

KeyPressInput.propTypes = {
  className: PropTypes.string,
  onKeyPress: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default KeyPressInput;
