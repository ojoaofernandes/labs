import React from 'react';

const currentTopic = 'Microservices';
const fetchedTopics = ['JavaScript', 'Apache Kafka', 'Docker'];
const items = [
  { id: 'a', title: 'Test' },
  { id: 'b', title: 'Test' },
  { id: 'c', title: 'Test' },
  { id: 'f', title: 'Test' },
  { id: 'e', title: 'Test' },
];

function App() {
  return (
    <div className="app">
      <h1>Reddit API Consumer</h1>

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

      <div>
        <h2>Posts</h2>
        <ul>
          {items.map(i => <li key={i.id}>{i.title}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default App;
