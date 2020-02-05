import React from 'react';
import ProductAssets, { HeroImg, getNext, getPrev } from '../ProductAssets';
import productData from '../../data/products';
import ProductImgReel from '../ProductImgReel';
import { ArrowLeft, ArrowRight } from '../Arrow';

describe('ProductAssets component', () => {
  const testProduct = productData.groups[0];
  const { hero, images, name, compact } = testProduct;
  const props = { hero, images, name, compact };
  const saveFn = jest.fn();

  const e = { preventDefault: jest.fn() };

  it('should render', () => {
    const output = shallow(<ProductAssets {...props} />);
    expect(shallowToJson(output)).toMatchSnapshot();
  });

  it('should render hero img', () => {
    const output = shallow(<ProductAssets {...props} compact={true} />);
    const img = output.find(HeroImg);
    expect(img.exists()).toBeTruthy();
    expect(img.props().src).toBe(hero.href);
    expect(img.props().alt).toBe(name);
  });

  it('should render product image reel', () => {
    const output = shallow(<ProductAssets {...props} compact={true} />);
    const imgReel = output.find(ProductImgReel);
    expect(imgReel.exists()).toBeTruthy();
  });

  it('should render not render product image reel when there is less than 2 photos', () => {
    const newProps = { hero, name, compact, images: [] };
    const output = shallow(<ProductAssets {...newProps} compact={true} />);
    const imgReel = output.find(ProductImgReel);
    expect(imgReel.exists()).toBeFalsy();
  });

  it('should render arrows for compact variation', () => {
    const output = shallow(<ProductAssets {...props} compact={true} />);
    expect(output.find(ArrowLeft).exists()).toBeTruthy();
    expect(output.find(ArrowRight).exists()).toBeTruthy();
  });

  describe('getNext', () => {
    it('should increment to next index', () => {
      getNext(saveFn, 1, 5)(e);
      expect(e.preventDefault).toHaveBeenCalled();
      expect(saveFn).toHaveBeenCalledWith(2);
    });

    it('should increment back to first item if last index clicked', () => {
      getNext(saveFn, 4, 5)(e);
      expect(e.preventDefault).toHaveBeenCalled();
      expect(saveFn).toHaveBeenCalledWith(0);
    });
  });

  describe('getPrev', () => {
    it('should increment to prev index', () => {
      getPrev(saveFn, 1, 5)(e);
      expect(e.preventDefault).toHaveBeenCalled();
      expect(saveFn).toHaveBeenCalledWith(0);
    });

    it('should increment to last item if first index clicked', () => {
      getPrev(saveFn, 0, 5)(e);
      expect(e.preventDefault).toHaveBeenCalled();
      expect(saveFn).toHaveBeenCalledWith(4);
    });
  });
});
