import React from 'react';
import MainHeader, { Branding, NavItem, NavList } from '../MainHeader';

describe('MainHeader component', () => {
  it('should render', () => {
    const output = shallow(<MainHeader />);
    expect(shallowToJson(output)).toMatchSnapshot();
  });

  it('should contain branding', () => {
    const output = shallow(<MainHeader />);
    expect(output.find(Branding).exists()).toBeTruthy();
  });

  it('should contain nav menu', () => {
    const output = shallow(<MainHeader />);
    expect(output.find(NavList).exists()).toBeTruthy();
    expect(output.find(NavItem).length).toBe(3);
  });
});
