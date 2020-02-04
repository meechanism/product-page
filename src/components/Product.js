import React from 'react';
import styled from 'styled-components';
import he from 'he';

import Colors from '../styles/colors';

const ProductWrapper = styled.a`
  color: ${Colors.black};
  line-height: 1.2rem;

  display: inline-block;
  margin: 0;
  border-radius: 2px;
  position: relative;
  padding: 2rem;

  border: 1px solid transparent;

  &:hover {
    opacity: 1;
    border: 1px solid ${Colors.gray};
  }
`;

const Img = styled.img`
  border-radius: 2px;
  width: 100%;
  margin-bottom: 1rem;
`;

const Name = styled.p`
  margin: 0 0 1rem;
  font-size: 0.9rem;
`;

const Price = styled.span`
  font-size: 0.9rem;
`;

const Product = ({ product }) => {
  const { id, name, thumbnail, priceRange } = product;
  const { selling } = priceRange;
  return (
    <ProductWrapper href={`/details/${id}`}>
      <Img src={thumbnail.href} alt={name} />
      <Name>{he.decode(name)}</Name>
      <Price>{`$${selling.low} - $${selling.high}`}</Price>
    </ProductWrapper>
  );
};

export default Product;
