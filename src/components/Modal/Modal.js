import React, { useState } from 'react';
import ModalContent from './ModalContent';
import ModalTrigger from './ModalTrigger';

export const onKeyDown = (closeFn) => (event) => {
  if (event.keyCode === 27) {
    closeFn();
  }
};

export const toggleScrollLock = () => {
  document.querySelector('html').classList.toggle('scroll-lock');
};

export const showModal = (showFn, scrollLock, closeButton) => () => {
  showFn(true);
  closeButton && closeButton.focus();
  scrollLock();
};

export const closeModal = (showFn, scrollLock, triggerButton) => () => {
  showFn(false);
  triggerButton && triggerButton.focus();
  scrollLock();
};

export const onClickOutside = (closeFn, modal) => (event) => {
  if (modal && modal.contains(event.target)) return;
  closeFn();
};

export const Modal = ({ modalProps, modalContent }) => {
  const [isShown, setIsShown] = useState(false);
  const [modal, setModal] = useState(null);
  const [triggerButton, setTriggerButton] = useState(null);
  const [closeButton, setCloseButton] = useState(null);

  const closeFn = closeModal(setIsShown, toggleScrollLock, triggerButton);
  return (
    <>
      <ModalTrigger
        showModal={showModal(setIsShown, toggleScrollLock, closeButton)}
        buttonRef={(n) => setTriggerButton(n)}
        triggerText={modalProps.triggerText}
      />
      {isShown ? (
        <ModalContent
          modalRef={(n) => setModal(n)}
          buttonRef={(n) => setCloseButton(n)}
          closeModal={closeFn}
          content={modalContent}
          onKeyDown={onKeyDown(closeFn)}
          onClickOutside={onClickOutside(closeFn, modal)}
        />
      ) : null}
    </>
  );
};

export default Modal;
