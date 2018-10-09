import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '../Button';
import './index.css';

function LanguageFilterButton({ language, filter }) {
  const className = classNames({
    active: language === filter,
  });

  return (
    <Button size="small" className={className}>{language}</Button>
  );
}

LanguageFilterButton.propTypes = {
  language: PropTypes.string.isRequired,
  filter: PropTypes.string.isRequired,
};

export default LanguageFilterButton;
