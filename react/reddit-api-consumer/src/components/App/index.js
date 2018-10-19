import React from 'react';
import Header from '../Header';
import PostList from '../../containers/PostList';

const currentTopic = 'Microservices';
const fetchedTopics = ['JavaScript', 'Apache Kafka', 'Docker'];

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

        <div>
          Jump to:
          {fetchedTopics.join(' | ')}
        </div>
      </div>

      <PostList />
    </div>
  );
}

export default App;
