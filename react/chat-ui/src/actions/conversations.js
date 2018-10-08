import * as api from '../api/conversations';

export function openConversation(contact) {
  return {
    type: 'OPEN_CONVERSATION',
    payload: {
      contact,
      messages: api.getConversationWith(contact.id).messages,
    },
  };
}
