import React from 'react';
import styled from 'styled-components';

import Product from './Product';

import MediaQuery from '../styles/media-queries';

const ProductListWrapper = styled.div``;

const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;

  ${MediaQuery.medium`
    grid-template-columns: 1fr 1fr;
  `};

  ${MediaQuery.small`
    grid-template-columns: 1fr;
  `};
`;

const ProductList = ({ productType = 'bed sheets', products }) => {
  return (
    <ProductListWrapper>
      <h2>Shopping: {productType}</h2>
      <ProductContainer>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </ProductContainer>
    </ProductListWrapper>
  );
};

export default ProductList;
