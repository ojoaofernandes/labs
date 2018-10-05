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

export const getContactList = () => defaultContacts.map((name, index) => ({
  id: index,
  name,
  lastMessage: { ...defaultLastMessage },
}));
