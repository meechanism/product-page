import React from 'react';
import Button from '../Button';

export const onClick = (showModal) => (e) => {
  e.preventDefault();
  showModal();
};

const ModalTrigger = ({ buttonRef, showModal, triggerText }) => (
  <Button secondary ref={buttonRef} onClick={onClick(showModal)}>
    {triggerText}
  </Button>
);

export default ModalTrigger;
