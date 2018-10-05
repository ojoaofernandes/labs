const conversations = [
  {
    id: 'a',
    recipient: 'a',
    messages: [
      {
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
        time: '09:10',
        author: 'recipient',
      },
      {
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
        time: '15:16',
        author: 'user',
      },
    ],
  },
  {
    id: 'b',
    recipient: 'b',
    messages: [
      {
        message: 'Integer consequat velit id lectus elementum, at tempus.',
        time: '01:02',
        author: 'user',
      },
    ],
  },
];

export function getConversationWith(recipient) {
  return conversations.find(c => c.recipient === recipient);
}
