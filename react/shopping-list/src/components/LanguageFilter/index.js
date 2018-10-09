import React from 'react';
import './index.css';

function LanguageFilter({ languages }) {
  return (
    <div>
      Language:
      {languages.map(language => (
        <button key={language}>{language}</button>
      ))}
    </div>
  );
}

export default LanguageFilter;
