import typeToReducer from 'type-to-reducer';
import { INCREMENT_SESSION_TIME } from '../constants/sessionTime';

const initialState = 0;

export default typeToReducer({
  [INCREMENT_SESSION_TIME]: state => state + 1,
}, initialState);
