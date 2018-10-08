const conversations = [
  {
    contact: 'a',
    messages: [
      {
        id: 'a',
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
        time: '09:10',
        author: 'contact',
      },
      {
        id: 'b',
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
        time: '15:16',
        author: 'user',
      },
    ],
  },
  {
    contact: 'b',
    messages: [
      {
        id: 'a',
        message: 'Integer consequat velit id lectus elementum, at tempus.',
        time: '01:02',
        author: 'user',
      },
    ],
  },
];

export function getConversationWith(contact) {
  return conversations.find(c => c.contact === contact);
}
