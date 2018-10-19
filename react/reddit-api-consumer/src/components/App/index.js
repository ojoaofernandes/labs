import React from 'react';
import Header from '../Header';
import CurrentTopic from '../../containers/CurrentTopic';
import FetchedTopics from '../../containers/FetchedTopics';
import PostList from '../../containers/PostList';
import './index.css';

function App() {
  return (
    <div className="app">
      <Header />
      <CurrentTopic />
      <FetchedTopics />
      <PostList />
    </div>
  );
}

export default App;
