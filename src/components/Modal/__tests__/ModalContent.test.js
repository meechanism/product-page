import React from 'react';
import FocusTrap from 'focus-trap-react';

import ModalContent, {
  ModalWrapper,
  CloseButton,
  ModalArea,
  CloseIcon,
  CloseVisual
} from '../ModalContent';

describe('ModalContent component', () => {
  it('should render', () => {
    const output = shallow(<ModalContent />);
    expect(shallowToJson(output)).toMatchSnapshot();
    expect(output.find(FocusTrap).exists()).toBeTruthy();
    expect(output.find(ModalWrapper).exists()).toBeTruthy();
    expect(output.find(CloseButton).exists()).toBeTruthy();
    expect(output.find(ModalArea).exists()).toBeTruthy();
    expect(output.find(CloseIcon).exists()).toBeTruthy();
    expect(output.find(CloseVisual).exists()).toBeTruthy();
  });

  it('should trigger callback when close button clicked', () => {
    const mockFn = jest.fn();
    const output = shallow(<ModalContent closeModal={mockFn} />);
    const btn = output.find(CloseButton);
    btn.simulate('click');
    expect(mockFn).toHaveBeenCalled();
  });

  it('should delegate provided props to children components', () => {
    const mockFn = jest.fn();
    const onClickOutside = jest.fn();
    const onKeyDown = jest.fn();
    const closeModal = jest.fn();

    const output = mount(
      <ModalContent
        closeModal={mockFn}
        onClickOutside={onClickOutside}
        onKeyDown={onKeyDown}
      />
    );
    const modalWrapper = output.find(ModalWrapper);
    expect(modalWrapper.props().onClick).toBe(onClickOutside);
    expect(modalWrapper.props().onKeyDown).toBe(onKeyDown);

    const closeBtn = output.find(CloseButton);
    expect(closeBtn.props().onClick).toBe(mockFn);
  });
});
