import React from 'react';

const Modal = ({ user, showModal, closeModal, userData, setUserData, results}) => {

  return (
    <>
      <div className={showModal ? "show-modal" : "hide-modal"}>
        <div className="modal-wrapper">
          <div className="modal">
            <div className="modal-header">
              <h3>Contact information</h3>
              <button onClick={closeModal}><i className="fas fa-times 2x"></i></button>
            </div>
            <img src={user.picture.medium} alt={user.name.first} />
            <div className="modal-info">
              <div className="modal-info-title">
                <h3>{user.name.title + " " + user.name.first + " " + user.name.last}</h3>
                <i className="fas fa-edit 2x"></i>
              </div>
              <p><i className="fas fa-phone-alt 3x"></i> {user.cell}</p>
              <p><i className="fas fa-envelope 3x"></i><a href="www.gmail.com">{user.email}</a></p>
              <p>Country: {user.location.country}</p>
              <p>State/Province: {user.location.state}</p>
              <p>City: {user.location.city}</p>
            </div>
          </div>
        </div>
          </div>
    </>
  )
}
export default Modal;