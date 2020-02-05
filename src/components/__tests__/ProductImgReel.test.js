import React from 'react';
import ProductImgReel, { ImgWrapper, saveImg } from '../ProductImgReel';
import productData from '../../data/products';

describe('ProductImgReel component', () => {
  const testProduct = productData.groups[0];
  const setImgFn = jest.fn();
  const { images } = testProduct;
  const e = { preventDefault: jest.fn() };

  it('should render', () => {
    const output = shallow(
      <ProductImgReel
        images={images}
        currImgIndex={0}
        setCurrImgIndex={setImgFn}
      />
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });

  it('should save index of img', () => {
    const index = 2;
    saveImg(setImgFn, index)(e);
    expect(setImgFn).toHaveBeenCalledWith(index);
    expect(e.preventDefault).toHaveBeenCalled();
  });

  it('should render thumbnails for all of the product images', () => {
    const output = shallow(
      <ProductImgReel
        images={images}
        currImgIndex={0}
        setCurrImgIndex={setImgFn}
      />
    );
    expect(output.find(ImgWrapper).length).toBe(images.length);
  });

  it('should trigger callback when image is clicked ', () => {
    const output = shallow(
      <ProductImgReel
        images={images}
        currImgIndex={0}
        setCurrImgIndex={setImgFn}
      />
    );
    const firstImg = output.find(ImgWrapper).first();
    firstImg.simulate('click');
    expect(setImgFn).toHaveBeenCalledWith(0);
  });

  it('should set active state on img with correct active index', () => {
    const activeIndex = 1;
    const output = shallow(
      <ProductImgReel
        images={images}
        currImgIndex={activeIndex}
        setCurrImgIndex={setImgFn}
      />
    );
    output.find(ImgWrapper).forEach((img, i) => {
      if (activeIndex !== i) expect(img.props().active).toBe(false);
      else expect(img.props().active).toBe(true);
    });
  });
});
