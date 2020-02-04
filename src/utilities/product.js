import productData from '../data/products';

export const getProductById = (id) =>
  productData.groups.find((product) => product.id === id);
