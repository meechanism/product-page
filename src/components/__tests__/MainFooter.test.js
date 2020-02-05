import React from 'react';
import MainFooter from '../MainFooter';

import Text from '../Text';

describe('MainFooter component', () => {
  it('should render', () => {
    const output = shallow(<MainFooter />);
    expect(shallowToJson(output)).toMatchSnapshot();
  });
  it('should contain two texts', () => {
    const output = shallow(<MainFooter />);
    expect(output.find(Text).length).toBe(2);
  });
});
