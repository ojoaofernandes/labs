import typeToReducer from 'type-to-reducer';
import { ADD_PRODUCT_TO_SHOPPING_LIST } from '../constants/shoppingList';

const initialState = [];

export default typeToReducer({
  [ADD_PRODUCT_TO_SHOPPING_LIST]: (state, { payload }) => {
    return (state.find(product => product.id === payload.id))
      ? state
      : [...state, payload];
  },
}, initialState);
