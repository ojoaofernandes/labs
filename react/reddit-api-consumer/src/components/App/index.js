import React from 'react';
import Header from '../Header';
import Search from '../../containers/Search';
import CurrentTopic from '../../containers/CurrentTopic';
import FetchedTopics from '../../containers/FetchedTopics';
import PostList from '../../containers/PostList';

function App() {
  return (
    <div className="app">
      <Header />
      <Search placeholder="Search..." />
      <CurrentTopic />
      <FetchedTopics />
      <PostList />
    </div>
  );
}

export default App;
