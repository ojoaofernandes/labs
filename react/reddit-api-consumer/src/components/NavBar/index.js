import React from 'react';
import CurrentTopic from '../../containers/CurrentTopic';
import FetchedTopics from '../../containers/FetchedTopics';
import './index.css';

function NavBar() {
  return (
    <nav className="nav">
      <CurrentTopic />
      <FetchedTopics />
    </nav>
  );
}

export default NavBar;
