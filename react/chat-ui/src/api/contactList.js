const defaultContacts = [
  'Alice',
  'Bob',
  'Carol',
  'Dave',
  'Eve',
  'Faythe',
  'Grace',
];

const defaultLastMessage = {
  message: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
  time: '10:49',
};

export function getContactList() {
  return defaultContacts.map(name => ({
    id: name.charAt(0).toLocaleLowerCase(),
    name,
    lastMessage: { ...defaultLastMessage },
  }));
}
