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

export function getContactList(filter = '') {
  let contacts = defaultContacts;

  if (filter.length > 0) {
    const filterLowerCase = filter.toLowerCase();
    contacts = contacts.filter(c => c.toLowerCase().includes(filterLowerCase));
  }

  return contacts.map(name => ({
    id: name.charAt(0).toLocaleLowerCase(),
    name,
    lastMessage: { ...defaultLastMessage },
  }));
}
