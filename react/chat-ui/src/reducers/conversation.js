export default function (state = {}, { type, payload }) {
  if (type === 'OPEN_CONVERSATION') {
    console.log({
      recipient: payload.recipient,
      messages: payload.messages,
    })
    return {
      recipient: payload.contact,
      messages: payload.messages,
    };
  }

  return state;
}
