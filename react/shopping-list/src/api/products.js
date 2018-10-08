const defaultProducts = [
  {
    id: 'a',
    name: 'Product A',
    price: 13.99,
    location: 'SP',
  },
  {
    id: 'b',
    name: 'Product B',
    price: 15,
    location: 'PR',
  },
  {
    id: 'c',
    name: 'Product C',
    price: 9.89,
    location: 'PR',
  },
  {
    id: 'd',
    name: 'Product D',
    price: 21.30,
    location: 'SP',
  },
  {
    id: 'e',
    name: 'Product E',
    price: 11,
    location: 'SP',
  },
];

export function getProducts() {
  return defaultProducts;
}
