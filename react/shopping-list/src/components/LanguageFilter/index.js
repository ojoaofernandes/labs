import React from 'react';
import PropTypes from 'prop-types';
import LanguageFilterButton from '../LanguageFilterButton';
import './index.css';

function LanguageFilter({ languages, activeLanguageFilter, onFilterChange }) {
  return (
    <div className="language-filter">
      {languages.map(language => (
          <LanguageFilterButton
            key={language}
            language={language}
            filter={activeLanguageFilter}
            onClick={() => onFilterChange(language)}
          >
            {language}
          </LanguageFilterButton>
        )
      )}
    </div>
  );
}

LanguageFilter.propTypes = {
  activeLanguageFilter: PropTypes.string.isRequired,
  languages: PropTypes.arrayOf(PropTypes.string),
  onFilterChange: PropTypes.func.isRequired,
};

export default LanguageFilter;
