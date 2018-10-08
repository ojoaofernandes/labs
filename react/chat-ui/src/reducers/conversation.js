export default function (state = null, { type, payload }) {
  if (type === 'OPEN_CONVERSATION') {
    const { contact, messages } = payload;
    return { contact, messages };
  }

  if (type === 'CLOSE_CONVERSATION') {
    return null;
  }

  return state;
}
