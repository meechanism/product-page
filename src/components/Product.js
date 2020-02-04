import React, { useState } from 'react';
import styled from 'styled-components';
import he from 'he';

import Modal from './Modal/Modal';
import ProductAssets from './ProductAssets';
import Colors from '../styles/colors';

const ProductWrapper = styled.a`
  display: block;
  color: ${Colors.black};
  line-height: 1.2rem;
  margin: 0;
  border-radius: 2px;
  position: relative;
  padding: 2rem;
  border: 1px solid transparent;
  &:hover {
    border: 1px solid ${Colors.gray};
  }
`;

const Img = styled.img`
  border-radius: 2px;
  width: 100%;
`;

const Name = styled.p`
  margin: 1rem 0;
  font-size: 0.9rem;
`;

const Price = styled.span`
  font-size: 0.9rem;
`;

const ImgWrapper = styled.div`
  position: relative;
`;

const HoverOverlay = styled.div`
  display: ${(props) => (props.show ? 'block' : 'none')};
  position: absolute;
  left: 0;
  bottom: 0rem;
  width: 100%;
`;

const saveQuicklook = (save, val) => () => save(val);

const Product = ({ product }) => {
  const [quickLook, setQuickLook] = useState(false);
  const { id, name, thumbnail, priceRange, hero, images } = product;
  const { selling } = priceRange;

  const decodedName = he.decode(name);

  return (
    <ProductWrapper href={`/details/${id}`}>
      <ImgWrapper
        onMouseOver={saveQuicklook(setQuickLook, true)}
        onMouseLeave={saveQuicklook(setQuickLook, false)}>
        <Img src={thumbnail.href} alt={name} />
        <HoverOverlay show={quickLook}>
          <Modal
            modalProps={{
              triggerText: 'Quicklook'
            }}
            modalContent={
              <ProductAssets
                compact
                name={decodedName}
                hero={hero}
                images={images}
              />
            }
          />
        </HoverOverlay>
      </ImgWrapper>
      <Name>{decodedName}</Name>
      <Price>{`$${selling.low} - $${selling.high}`}</Price>
    </ProductWrapper>
  );
};

export default Product;
