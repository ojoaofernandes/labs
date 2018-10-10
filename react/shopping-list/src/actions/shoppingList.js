import { ADD_PRODUCT_TO_SHOPPING_LIST } from '../constants/shoppingList';

export function addProductToShoppingList(product) {
  return dispatch => dispatch({
    type: ADD_PRODUCT_TO_SHOPPING_LIST,
    payload: product,
  });
}
