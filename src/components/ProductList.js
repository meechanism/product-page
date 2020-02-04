import React from 'react';
import styled from 'styled-components';

import Product from './Product';
import Text from './Text';
import MediaQuery from '../styles/media-queries';

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

const ProductListHeader = styled.h2`
  font-size: 1.5rem;
  ${MediaQuery.small`
    font-size: 1rem;
    margin: 0 0 0.25rem;
  `};
`;

const ProductList = ({ productType = 'bed sheets', products }) => {
  return (
    <>
      <ProductListHeader>Shopping: {productType}</ProductListHeader>
      <Text muted>Showing {products.length} products</Text>

      <ProductContainer>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </ProductContainer>
    </>
  );
};

export default ProductList;
