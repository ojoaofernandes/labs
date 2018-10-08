import { GET_PRODUCTS } from '../constants/products';

const initialState = [];

export default function (state = initialState, { type, payload }) {
  if (type === GET_PRODUCTS) {
    return payload;
  }

  return state;
}
