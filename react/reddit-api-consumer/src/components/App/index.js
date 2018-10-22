import React from 'react';
import Header from '../Header';
import NavBar from '../NavBar';
import PostList from '../../containers/PostList';
import './index.css';

function App() {
  return (
    <div className="app">
      <Header />
      <NavBar />
      <PostList />
    </div>
  );
}

export default App;
