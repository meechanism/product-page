import React from 'react';

import ProductNotFound from '../ProductNotFound';
import Text from '../../components/Text';

describe('ProductNotFound page', () => {
  it('should render', () => {
    const output = shallow(<ProductNotFound />);
    expect(shallowToJson(output)).toMatchSnapshot();
  });
  it('should contain header', () => {
    const output = shallow(<ProductNotFound />);
    expect(output.find('h1').length).toBe(1);
    expect(output.find('h1').text()).toBe('Oops!');
  });

  it('should contain two supporting  texts', () => {
    const output = shallow(<ProductNotFound />);
    expect(output.find(Text).length).toBe(2);
  });
});
