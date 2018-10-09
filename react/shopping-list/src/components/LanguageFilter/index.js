import React from 'react';
import PropTypes from 'prop-types';
import LanguageFilterButton from '../LanguageFilterButton';
import './index.css';

function LanguageFilter({ languages, activeLanguageFilter }) {
  return (
    <div className="language-filter">
      {languages.map(language => (
          <LanguageFilterButton
            key={language}
            language={language}
            filter={activeLanguageFilter}
          >
            {language}
          </LanguageFilterButton>
        )
      )}
    </div>
  );
}

LanguageFilter.propTypes = {
  languages: PropTypes.arrayOf(PropTypes.string),
  activeLanguageFilter: PropTypes.string,
};

export default LanguageFilter;
