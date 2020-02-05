import React from 'react';
import Modal, {
  onKeyDown,
  showModal,
  closeModal,
  onClickOutside,
  toggleScrollLock
} from '../Modal';

import ModalTrigger from '../ModalTrigger';

describe('Modal component', () => {
  let mockFn;
  let mockFn2;
  let mockBtn;

  const TestContent = () => <p>Hello there</p>;
  const props = {
    modalProps: {
      triggerText: 'Open'
    }
  };

  beforeEach(() => {
    mockFn = jest.fn();
    mockFn2 = jest.fn();
    mockBtn = {
      focus: jest.fn()
    };
  });

  it('should render', () => {
    const output = shallow(
      <Modal {...props}>
        <TestContent />
      </Modal>
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
  it('should render trigger', () => {
    const output = shallow(
      <Modal {...props}>
        <TestContent />
      </Modal>
    );
    expect(output.find(ModalTrigger).exists()).toBeTruthy();
  });

  describe('onKeyDown', () => {
    it('should trigger passed in fn when esc button is pressed', () => {
      expect(onKeyDown(mockFn)({ keyCode: 27 }));
      expect(mockFn).toHaveBeenCalled();
    });

    it('should NOT trigger passed in fn when other button is pressed', () => {
      expect(onKeyDown(mockFn)({ keyCode: 11 }));
      expect(mockFn).not.toHaveBeenCalled();
    });
  });

  it('should closeModal', () => {
    closeModal(mockFn, mockFn2, mockBtn)();
    expect(mockFn).toHaveBeenCalledWith(false);
    expect(mockFn2).toHaveBeenCalled();
    expect(mockBtn.focus).toHaveBeenCalled();
  });

  it('should showModal', () => {
    showModal(mockFn, mockFn2, mockBtn)();
    expect(mockFn).toHaveBeenCalledWith(true);
    expect(mockFn2).toHaveBeenCalled();
    expect(mockBtn.focus).toHaveBeenCalled();
  });

  describe('onClickOutside', () => {
    it('should NOT close when area outside modal is clicked', () => {
      const modal = {
        contains: (val) => val
      };
      const e = {
        target: true
      };
      onClickOutside(mockFn, modal)(e);
      expect(mockFn).not.toHaveBeenCalled();
    });

    it('should  close when area outside modal is clicked', () => {
      const modal = {
        contains: (val) => val
      };
      const e = {
        target: false
      };
      onClickOutside(mockFn, modal)(e);
      expect(mockFn).toHaveBeenCalled();
    });
  });

  it('should toggle scroll lock', () => {
    const htmlNode = document.querySelector('html');
    expect(htmlNode.classList.length).toBe(0);
    toggleScrollLock();
    expect(htmlNode.classList.length).toBe(1);
    expect(htmlNode.classList[0]).toBe('scroll-lock');
    toggleScrollLock();
    expect(htmlNode.classList.length).toBe(0);
  });
});
