import React, { useState } from 'react';

const Modal = ({ showModal, setShowModal}) => {

  return (
    <>
      <div className={showModal ? "show-modal" : "hide-modal"}>
        <h3>Modal Component</h3>
      </div>
    </>
  )
}
export default Modal;