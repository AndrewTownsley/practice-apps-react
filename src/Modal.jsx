import React from 'react';

const Modal = ({ user, showModal, closeModal, userData, setUserData, results}) => {

  return (
    <>
      <div className={showModal ? "show-modal" : "hide-modal"}>
    
            <h3>Modal Component</h3>
            {/* <img src={user.picture.medium} alt={user.name.first} /> */}
            <div className="modal-window-info">
              {/* <h3>{user.name.first + " " + user.name.last}</h3> */}
              <p></p>
            </div>
            <button onClick={closeModal}>Close</button>
          </div>
    </>
  )
}
export default Modal;