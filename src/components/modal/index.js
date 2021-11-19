import React from 'react';
import Backdrop from '../backdrop';

const Modal = ({ show, closeModal, children, style }) => (
  <>
    <Backdrop show={show} clicked={closeModal} />
    <div
      className='Modal'
      style={{
        ...style,
        transform: show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: show ? '1' : '0',
      }}
    >
      <span className='crossIcon'>
        <i className='fa fa-times' aria-hidden='true' onClick={closeModal} />
      </span>
      {children}
    </div>
  </>
);

export default Modal;
