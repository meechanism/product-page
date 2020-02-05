import React from 'react';
import styled from 'styled-components';

import Colors from '../styles/colors';

const ImgReelWrapper = styled.div`
  margin: 0;
  display: flex;
  justify-content: center;
`;

const Img = styled.img`
  width: 100%;
  max-height: 80px;
  border-radius: 2px;
`;

export const ImgWrapper = styled.a`
  display: block;
  width: 95px;
  padding: 0.5rem;
  &:hover {
    cursor: pointer;
    opacity: 0.75;
  }
  border-radius: 2px;
  border: 1px solid ${(props) => (props.active ? Colors.gray : 'transparent')};
`;

export const saveImg = (save, index) => (e) => {
  e && e.preventDefault();
  save(index);
};

const ProductImgReel = ({ images, setCurrImgIndex, currImgIndex }) => (
  <ImgReelWrapper>
    {images.map((currImg, i) => {
      const key = `product-image-${i}`;
      return (
        <ImgWrapper
          href=""
          key={key}
          onClick={saveImg(setCurrImgIndex, i)}
          active={currImgIndex === i}>
          <Img src={currImg.href} alt={key} />
        </ImgWrapper>
      );
    })}
  </ImgReelWrapper>
);

export default ProductImgReel;
