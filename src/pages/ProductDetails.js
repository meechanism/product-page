import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import he from 'he';

import PageWrapper from '../components/PageWrapper';
import ProductHero from '../components/ProductHero';
import Button from '../components/Button';
import ProductNotFound from './ProductNotFound';

import { getProductById } from '../utilities/product';
import MediaQuery from '../styles/media-queries';

const Details = styled.div``;

const ProductName = styled.h2`
  font-size: 2rem;
`;

const ProductMain = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;

  ${MediaQuery.small`
    grid-template-columns: 1fr;
  `};
`;

const Price = styled.span`
  font-size: 1.5rem;
`;

const ProductDetails = () => {
  const { productId } = useParams();
  const product = getProductById(productId);

  // Return early if there is an invalid product
  if (undefined === product) return <ProductNotFound />;

  const { name, hero, images, priceRange } = product;
  const { selling } = priceRange;
  return (
    <PageWrapper>
      <ProductMain>
        <ProductHero hero={hero} images={images} />
        <Details>
          <ProductName>{he.decode(name)}</ProductName>
          <Price>{`$${selling.low} - $${selling.high}`}</Price>
          <Button>Add to cart</Button>
        </Details>
      </ProductMain>
    </PageWrapper>
  );
};

export default ProductDetails;
