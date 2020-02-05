import React from 'react';
import Button, { getBgColor, getHoverTxtColor, getTxtColor } from '../Button';
import Colors from '../../styles/colors';

describe('Button component', () => {
  it('should render', () => {
    const output = shallow(<Button />);
    expect(shallowToJson(output)).toMatchSnapshot();
  });

  describe('getBgColor', () => {
    it('should return gray bg for disabled state', () => {
      expect(getBgColor({ disabled: true })).toBe(Colors.gray);
    });
    it('should return white bg for secondary state', () => {
      expect(getBgColor({ secondary: true })).toBe(Colors.white);
    });
    it('should return primary bg by default', () => {
      expect(getBgColor()).toBe(Colors.primary);
    });
  });

  describe('getTxtColor', () => {
    it('should return black text color for secondary state', () => {
      expect(getTxtColor({ secondary: true })).toBe(Colors.black);
    });
    it('should return white text by default', () => {
      expect(getTxtColor()).toBe(Colors.white);
    });
  });

  describe('getHoverTxtColor', () => {
    it('should return primary color for secondary state', () => {
      expect(getHoverTxtColor({ secondary: true })).toBe(Colors.primary);
    });
    it('should return white color by default', () => {
      expect(getHoverTxtColor()).toBe(Colors.white);
    });
  });
});
