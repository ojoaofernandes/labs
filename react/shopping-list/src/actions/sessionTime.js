import { INCREMENT_SESSION_TIME } from '../constants/sessionTime';

export function incrementSessionTime() {
  return { type: INCREMENT_SESSION_TIME };
}
