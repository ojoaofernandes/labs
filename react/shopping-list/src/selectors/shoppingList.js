import { createSelector } from 'reselect';

const getShoppingList = ({ shoppingList }) => shoppingList;

export const getShoppingListTotal = createSelector(
  getShoppingList,
  products => products.reduce((acc, product) => acc + product.price, 0)
);
