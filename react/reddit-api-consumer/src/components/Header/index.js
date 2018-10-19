import React from 'react';
import Search from '../../containers/Search';
import './index.css';

function Header() {
  return (
    <header className="header">
      <h1 className="title">Reddit API Consumer</h1>
      <Search className="input" placeholder="Search..." />
    </header>
  );
}

export default Header;
