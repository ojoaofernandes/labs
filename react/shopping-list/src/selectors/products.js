import { createSelector } from 'reselect';

const getProducts = ({ products }) => products;
const getActiveLanguageFilter = ({ activeLanguageFilter }) => activeLanguageFilter;

export const getAvailableLanguages = createSelector(
  getProducts,
  products => {
    return ['ALL', ...products
      .map(product => product.language)
      .filter((el, i, arr) => arr.indexOf(el) === i)];
  }
);

export const getVisibleProducts = createSelector(
  getActiveLanguageFilter, getProducts,
  (languageFilter, products) => {
    return languageFilter === 'ALL'
      ? products
      : products.filter(prod => prod.language === languageFilter);
  }
);
