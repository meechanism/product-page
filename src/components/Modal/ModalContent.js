import React from 'react';
import ReactDOM from 'react-dom';
import FocusTrap from 'focus-trap-react';
import styled from 'styled-components';

import Colors from '../../styles/colors';
import MediaQuery from '../../styles/media-queries';

const ModalWrapper = styled.aside.attrs({
  tag: 'aside',
  role: 'dialog',
  tabIndex: -1,
  'aria-modal': true
})`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  transform: translateZ(0);
  background-color: rgba(0, 0, 0, 0.5);
`;

const CloseButton = styled.button.attrs((props) => ({
  'aria-label': 'Close Modal',
  'aria-labelledby': 'close-modal'
}))`
  position: absolute;
  top: 0;
  right: 0;
  padding: 0.5em;
  line-height: 1;
  background: ${Colors.trueWhite};
  border: 0;
  box-shadow: 0;
  cursor: pointer;

  &:hover {
    svg {
      stroke: ${Colors.primary};
    }
  }
`;

const ModalArea = styled.div`
  background-color: ${Colors.trueWhite};
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  position: fixed;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;

  left: 50%;
  top: 50%;
  height: auto;
  transform: translate(-50%, -50%);
  max-width: 30em;
  max-height: calc(100% - 1em);

  ${MediaQuery.small`
    width: 100%;
  `};
`;

const CloseIcon = styled.svg`
  width: 25px;
  height: 25px;
  fill: transparent;
  stroke: black;
  stroke-linecap: round;
  stroke-width: 2;
`;

const CloseVisual = styled.span`
  border: 0 !important;
  clip: rect(0 0 0 0) !important;
  height: 1px !important;
  margin: -1px !important;
  overflow: hidden !important;
  padding: 0 !important;
  position: absolute !important;
  width: 1px !important;
  white-space: nowrap !important;
`;

const ModalContent = ({
  buttonRef,
  onClickOutside,
  onKeyDown,
  modalRef,
  closeModal,
  content
}) => {
  return ReactDOM.createPortal(
    <FocusTrap>
      <ModalWrapper onClick={onClickOutside} onKeyDown={onKeyDown}>
        <ModalArea ref={modalRef}>
          <CloseButton ref={buttonRef} onClick={closeModal}>
            <CloseVisual id="close-modal">Close</CloseVisual>
            <CloseIcon viewBox="0 0 40 40">
              <path d="M 10,10 L 30,30 M 30,10 L 10,30" />
            </CloseIcon>
          </CloseButton>
          <div>{content}</div>
        </ModalArea>
      </ModalWrapper>
    </FocusTrap>,
    document.body
  );
};

export default ModalContent;
