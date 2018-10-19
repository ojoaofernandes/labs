import React from 'react';
import Search from '../../containers/Search';

function Header() {
  return (
    <header>
      <h1 className="title">Reddit API Consumer</h1>
      <Search placeholder="Search..." />
    </header>
  );
}

export default Header;
