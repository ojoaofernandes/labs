import { createSelector } from 'reselect';

const getProducts = ({ products }) => products;
const getActiveLanguageFilter = ({ activeLanguageFilter }) => activeLanguageFilter;

export const getAvailableLanguages = createSelector(
  getProducts,
  products => ['ALL', ...products
    .map(product => product.language)
    .filter((el, i, arr) => arr.indexOf(el) === i)]
);

// export const getVisibleProducts = createSelector(
//   getActiveLanguageFilter, getProducts,
//   (languageFilter, products) => {
//     console.log('getVisibleProducts selector');
//     return languageFilter === 'ALL'
//       ? products
//       : products.filter(prod => prod.language === languageFilter);
//   }
// );

export const getVisibleProducts = (state) => {
  console.log('getVisibleProducts selector');
  const languageFilter = getActiveLanguageFilter(state);
  const products = getProducts(state);

  return languageFilter === 'ALL'
    ? products
    : products.filter(prod => prod.language === languageFilter);
};
