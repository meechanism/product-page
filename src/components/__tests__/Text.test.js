import React from 'react';
import Text from '../Text';

describe('Text component', () => {
  it('should render', () => {
    const output = shallow(<Text>Hello there</Text>);
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
