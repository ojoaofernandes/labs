import typeToReducer from 'type-to-reducer';
import { GET_PRODUCTS } from '../constants/products';

const initialState = [];

export default typeToReducer({
  [GET_PRODUCTS]: (_, { payload }) => payload,
}, initialState);
