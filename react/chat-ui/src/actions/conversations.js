import * as api from '../api/conversations';

export function openConversation(contact) {
  const { messages } = api.getConversationWith(contact.id);

  return {
    type: 'OPEN_CONVERSATION',
    payload: { contact, messages },
  };
}

export function closeConversation() {
  return {
    type: 'CLOSE_CONVERSATION',
  };
}
