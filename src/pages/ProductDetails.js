import React, { useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import he from 'he';

import PageWrapper from '../components/PageWrapper';
import ProductAssets from '../components/ProductAssets';
import Button from '../components/Button';
import ProductNotFound from './ProductNotFound';

import { getProductById } from '../utilities/product';
import MediaQuery from '../styles/media-queries';

const Details = styled.div``;

const ProductName = styled.h2`
  font-size: 2rem;
  ${MediaQuery.medium`
    font-size: 1.5rem;
  `};
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
  display: block;
  font-size: 1.5rem;
  margin: 0 0 4rem;
  ${MediaQuery.medium`
    font-size: 1rem;
  `};
`;

const onAddToCart = (save) => () => {
  save(true);
};

const ProductDetails = () => {
  const [addedToCart, setAddedToCart] = useState(false);
  const { productId } = useParams();
  const product = getProductById(productId);

  // Return early if there is an invalid product
  if (undefined === product) return <ProductNotFound />;

  const { name, hero, images, priceRange } = product;
  const { selling } = priceRange;
  const decodedName = he.decode(name);
  return (
    <PageWrapper>
      <ProductMain>
        <ProductAssets name={decodedName} hero={hero} images={images} />
        <Details>
          <ProductName>{decodedName}</ProductName>
          <Price>{`$${selling.low} - $${selling.high}`}</Price>
          <Button disabled={addedToCart} onClick={onAddToCart(setAddedToCart)}>
            {addedToCart ? `Added!` : `Add to cart`}
          </Button>
        </Details>
      </ProductMain>
    </PageWrapper>
  );
};

export default ProductDetails;
