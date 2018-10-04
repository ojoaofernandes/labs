import React from 'react';
import ContactList from '../ContactList';
import Conversation from '../Conversation';

const defautContact = {
  profile: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
  online: false,
  open: false,
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

function App() {
  return (
    <div className="container-fluid h-100">
      <div className="row h-100">
        <ContactList className="col-4 p-0 bg-info" contacts={contacts} />
        <Conversation className="col-8 bg-warning" />
      </div>
    </div>
  );
}

export default App;
