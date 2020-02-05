import React from 'react';

import AllProducts from '../AllProducts';
import ProductList from '../../components/ProductList';

describe('AllProducts', () => {
  it('should render ProductList', () => {
    const output = shallow(<AllProducts />);
    expect(output.find(ProductList).exists()).toBe(true);
  });
});
