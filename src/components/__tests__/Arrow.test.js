import React from 'react';
import {
  ArrowLeft,
  ArrowRight,
  IconLeft,
  IconRight,
  ArrowContainer
} from '../Arrow';

describe('Arrow component', () => {
  const onClickFn = jest.fn();

  it('renders left arrow', () => {
    const output = shallow(<ArrowLeft onClick={onClickFn} />);
    expect(shallowToJson(output)).toMatchSnapshot();
    expect(output.find(IconLeft).exists()).toBeTruthy();

    const container = output.find(ArrowContainer);
    expect(container.exists()).toBeTruthy();
    expect(container.props().onClick).toBe(onClickFn);
  });
  it('renders right arrow', () => {
    const output = shallow(<ArrowRight onClick={onClickFn} />);
    expect(shallowToJson(output)).toMatchSnapshot();
    expect(output.find(IconRight).exists()).toBeTruthy();

    const container = output.find(ArrowContainer);
    expect(container.exists()).toBeTruthy();
    expect(container.props().onClick).toBe(onClickFn);
  });

  it('should trigger passed fn when left arrow is clicked', () => {
    const output = shallow(<ArrowLeft onClick={onClickFn} />);
    output.simulate('click');
    expect(onClickFn).toHaveBeenCalled();
  });

  it('should trigger passed fn when right arrow is clicked', () => {
    const output = shallow(<ArrowRight onClick={onClickFn} />);
    output.simulate('click');
    expect(onClickFn).toHaveBeenCalled();
  });
});
