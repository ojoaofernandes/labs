import React from 'react';
import Input from '../Input';
import LanguageFilter from '../../containers/LanguageFilter';
import './index.css';

function Filter() {
  return (
    <div className="filter">
      <Input placeholder="Search..." />
      <LanguageFilter />
    </div>
  );
}

export default Filter;
