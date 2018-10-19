import React from 'react';
import Header from '../Header';
import PostList from '../../containers/PostList';
import FetchedTopics from '../../containers/FetchedTopics';
import CurrentTopic from '../../containers/CurrentTopic';

function App() {
  return (
    <div className="app">
      <Header />

      <div>
        <h2>Search</h2>
        <input type="text" placeholder="Search..." />
      </div>

      <CurrentTopic />
      <FetchedTopics />
      <PostList />
    </div>
  );
}

export default App;
