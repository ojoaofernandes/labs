export default function (state = {}, { type, payload }) {
  if (type === 'OPEN_CONVERSATION') {
    return {
      recipient: payload.contact,
      messages: payload.messages,
    };
  }

  return state;
}
