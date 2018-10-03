import React from 'react';

function App() {
  return (
    <div className="app container-fluid h-100">
      <div className="row h-100">
        <div className="contacts col-4 bg-info">
          <header>
            <h2>Title</h2>
          </header>
          <ul>
            <li className="contact">Item 1</li>
            <li className="contact">Item 2</li>
            <li className="contact">Item 3</li>
            <li className="contact">Item 4</li>
            <li className="contact">Item 5</li>
          </ul>
        </div>
        <div className="conversation col-8 bg-warning">
          <div>Content</div>
        </div>
      </div>
    </div>
  );
}

export default App;
