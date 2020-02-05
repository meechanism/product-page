import React from 'react';
import productData from '../../data/products';
import ProductList, {
  ProductListHeader,
  ProductContainer
} from '../ProductList';
import Text from '../Text';
import Product from '../Product';

describe('ProductList component', () => {
  it('should render', () => {
    const output = shallow(<ProductList products={productData.groups} />);
    expect(shallowToJson(output)).toMatchSnapshot();
  });

  it('should render product list header', () => {
    const productType = 'pillows';
    const output = shallow(
      <ProductList productType={productType} products={productData.groups} />
    );
    expect(output.find(ProductListHeader).exists()).toBeTruthy();
    expect(output.find(ProductListHeader).text()).toBe(
      `Shopping: ${productType}`
    );
  });

  it('should render total text', () => {
    const output = shallow(<ProductList products={productData.groups} />);
    expect(output.find(Text).exists()).toBeTruthy();
    expect(output.find(Text).text()).toBe(
      `Showing ${productData.groups.length} products`
    );
  });

  it('should render product list', () => {
    const output = shallow(<ProductList products={productData.groups} />);
    expect(output.find(ProductContainer).exists()).toBeTruthy();
    expect(output.find(Product).length).toBe(productData.groups.length);
  });
});
