import React from 'react';
import ContactList from '../../containers/ContactList';
import Conversation from '../Conversation';

import './index.css';

const messages = [
  { id: 'a', author: 'recipient', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing.' },
  { id: 'b', author: 'recipient', message: 'Nunc interdum erat lorem, ac semper nibh.' },
  { id: 'c', author: 'user', message: 'Suspendisse id accumsan tellus, nec malesuada orci.' },
  { id: 'd', author: 'user', message: 'Etiam interdum enim nec hendrerit aliquet.' },
  { id: 'e', author: 'recipient', message: 'Integer consequat velit id lectus elementum, at tempus.' },
  { id: 'f', author: 'recipient', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing.' },
  { id: 'g', author: 'recipient', message: 'Nunc interdum erat lorem, ac semper nibh.' },
  { id: 'h', author: 'user', message: 'Suspendisse id accumsan tellus, nec malesuada orci.' },
  { id: 'i', author: 'user', message: 'Etiam interdum enim nec hendrerit aliquet.' },
  { id: 'j', author: 'recipient', message: 'Integer consequat velit id lectus elementum, at tempus.' },
];

function App() {
  return (
    <div className="app container">
      <div className="row">
        <ContactList className="col-4" />
        <Conversation className="col-8" messages={messages} />
      </div>
    </div>
  );
}

export default App;
