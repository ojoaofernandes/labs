import React from 'react';
import ContactList from '../ContactList';
import Conversation from '../Conversation';

const defautContact = {
  lastMessage: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
  onClick: () => { console.log('open conversation'); },
};

const contacts = [
  { ...defautContact, name: 'Alice' },
  { ...defautContact, name: 'Bob' },
  { ...defautContact, name: 'Carol' },
  { ...defautContact, name: 'Dave' },
  { ...defautContact, name: 'Eve' },
  { ...defautContact, name: 'Faythe' },
  { ...defautContact, name: 'Grace' },
];

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
    <div className="container-fluid h-100">
      <div className="row h-100">
        <ContactList className="col-4" contacts={contacts} />
        <Conversation className="col-8" messages={messages} />
      </div>
    </div>
  );
}

export default App;
