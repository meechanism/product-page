import React from 'react';

import PageWrapper from '../components/PageWrapper';
import ProductList from '../components/ProductList';

import productData from '../data/products.json';

const AllProducts = () => {
  return (
    <PageWrapper>
      <ProductList products={productData.groups} />
    </PageWrapper>
  );
};

export default AllProducts;
