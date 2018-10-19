import React from 'react';
import Header from '../Header';
import PostList from '../../containers/PostList';
import FetchedTopics from '../../containers/FetchedTopics';

const currentTopic = 'Microservices';

function App() {
  return (
    <div className="app">
      <Header />

      <div>
        <h2>Search</h2>
        <input type="text" placeholder="Search..." />

        <div>
          Current Topic:
          {currentTopic}
          <button type="button">Refresh</button>
        </div>
      </div>

      <FetchedTopics />
      <PostList />
    </div>
  );
}

export default App;
