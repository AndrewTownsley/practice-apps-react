import React from 'react';

const Modal = ({ user, showModal, closeModal, userData, setUserData, results}) => {

  return (
    <>
      <div className={showModal ? "show-modal" : "hide-modal"}>
        <div className="modal-wrapper">
          <div className="modal">
              <h3>Contact information</h3>
            <img src={user.picture.medium} alt={user.name.first} />
            <div className="modal-info">
              <h3>{user.name.title + " " + user.name.first + " " + user.name.last}</h3>
              <p>phone: {user.cell}</p>
              <a href="/#">Email: {user.email}</a>
              <p>Country: {user.location.country}</p>
              <p>City: {user.location.city}</p>
              <p>State/Province: {user.location.state}</p>
            </div>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
          </div>
    </>
  )
}
export default Modal;