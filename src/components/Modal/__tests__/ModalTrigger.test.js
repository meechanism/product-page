import React from 'react';
import ModalTrigger, { onClick } from '../ModalTrigger';

describe('ModalTrigger component', () => {
  it('should render', () => {
    const output = shallow(<ModalTrigger />);
    expect(shallowToJson(output)).toMatchSnapshot();
  });

  it('should trigger callback', () => {
    const mockFn = jest.fn();
    const e = { preventDefault: jest.fn() };
    onClick(mockFn)(e);
    expect(mockFn).toHaveBeenCalled();
  });
});
