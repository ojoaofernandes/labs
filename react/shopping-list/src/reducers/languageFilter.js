import typeToReducer from 'type-to-reducer';
import { SET_LANGUAGE_FILTER } from '../constants/languageFilter';

const initialState = 'ALL';

export default typeToReducer({
  [SET_LANGUAGE_FILTER]: (_, { payload }) => payload,
}, initialState);
