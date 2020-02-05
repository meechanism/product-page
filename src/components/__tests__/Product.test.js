import React from 'react';
import he from 'he';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Product, {
  saveQuicklook,
  Name,
  Price,
  Img,
  HoverOverlay
} from '../Product';

import Modal from '../Modal/Modal';

import productData from '../../data/products';

describe('Product component', () => {
  const testProduct = productData.groups[0];
  it('should render', () => {
    const output = shallow(<Product product={testProduct} />);
    expect(shallowToJson(output)).toMatchSnapshot();
  });

  it('should trigger callback when invoked', () => {
    const mockFn = jest.fn();
    const testVal = 'linen';
    saveQuicklook(mockFn, testVal)();
    expect(mockFn).toHaveBeenCalledWith(testVal);
  });

  it('should render decoded name', () => {
    const output = shallow(<Product product={testProduct} />);
    const name = output.find(Name);
    expect(name.exists()).toBeTruthy();
    expect(name.text()).toBe(he.decode(testProduct.name));
  });

  it('should render price range', () => {
    const output = shallow(<Product product={testProduct} />);
    const price = output.find(Price);
    expect(price.exists()).toBeTruthy();
    const selling = testProduct.priceRange.selling;
    expect(price.text()).toBe(`$${selling.low} - $${selling.high}`);
  });

  it('should render thumbnail', () => {
    const output = shallow(<Product product={testProduct} />);
    const img = output.find(Img);
    expect(img.exists()).toBeTruthy();
    expect(img.props().src).toBe(testProduct.thumbnail.href);
  });

  describe('hover overlay', () => {
    it('should render hover overlay', () => {
      const output = shallow(<Product product={testProduct} />);
      const overlay = output.find(HoverOverlay);
      expect(overlay.exists()).toBeTruthy();
    });

    it('should render quicklook button', () => {
      const output = shallow(<Product product={testProduct} />);
      const modal = output.find(Modal);
      expect(modal.exists()).toBeTruthy();
    });

    it('should render quicklook button style with hidden state', () => {
      const tree = renderer.create(<HoverOverlay show={false} />).toJSON();
      expect(tree).toMatchSnapshot();
      expect(tree).toHaveStyleRule('display', 'none');
    });

    it('should render quicklook button style with shown state', () => {
      const tree = renderer.create(<HoverOverlay show={true} />).toJSON();
      expect(tree).toMatchSnapshot();
      expect(tree).toHaveStyleRule('display', 'block');
    });
  });
});
