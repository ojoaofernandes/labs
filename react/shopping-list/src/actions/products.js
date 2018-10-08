import { GET_PRODUCTS } from '../constants/products';
import * as api from '../api/products';

export function getProducts() {
  return {
    type: GET_PRODUCTS,
    payload: api.getProducts(),
  };
}
