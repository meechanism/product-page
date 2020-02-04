import React, { useState } from 'react';
import styled from 'styled-components';

import MediaQuery from '../styles/media-queries';
import ProductImgReel from './ProductImgReel';
import { ArrowLeft, ArrowRight } from './Arrow';

const ProductAssetsWrapper = styled.div`
  margin: ${(props) => (props.compact ? '1rem' : '2rem 4rem 2rem 0')};
  ${MediaQuery.medium`
    margin: 1rem;
  `};

  ${MediaQuery.small`
    margin: 0 0 1rem;
  `};
`;

const HeroImg = styled.img`
  width: 100%;
  border-radius: 2px;
  margin: ${(props) => (props.compact ? '0 0 1rem ' : '0 0 2rem')};
`;

const getNext = (save, index, totalAssets) => (e) => {
  e.preventDefault();
  if (index === totalAssets - 1) {
    save(0);
  } else {
    save(index + 1);
  }
};

const getPrev = (save, index, totalAssets) => (e) => {
  e.preventDefault();
  if (index === 0) {
    save(totalAssets - 1);
  } else {
    save(index - 1);
  }
};

const ProductAssets = ({ hero, images, name, compact }) => {
  const [currImgIndex, setCurrImgIndex] = useState(0);
  const allAssets = [hero, ...images];
  const totalAssets = allAssets.length;
  return (
    <ProductAssetsWrapper compact={compact}>
      {compact && (
        <>
          <ArrowLeft
            href=""
            onClick={getPrev(setCurrImgIndex, currImgIndex, totalAssets)}
          />
          <ArrowRight
            href=""
            onClick={getNext(setCurrImgIndex, currImgIndex, totalAssets)}
          />
        </>
      )}
      <HeroImg
        compact={compact}
        src={allAssets[currImgIndex].href}
        alt={name}
      />
      {totalAssets > 1 ? (
        <ProductImgReel
          compact={compact}
          name={name}
          images={allAssets}
          setCurrImgIndex={setCurrImgIndex}
          currImgIndex={currImgIndex}
        />
      ) : null}
    </ProductAssetsWrapper>
  );
};

export default ProductAssets;
