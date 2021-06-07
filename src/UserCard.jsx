import React, { useState } from 'react';
import Modal from "./Modal";

const UserCard = ({ user, userData, generateUser}) => {

  const [showModal, setShowModal] = useState(false);


  const openModal = (e) => {
    setShowModal(true);
  }
  const closeModal = (e) => {
    setShowModal(false);
  }

  return (
    <>
    <h3>{user.name.first + " " + user.name.last}</h3>
    <img src={user.picture.large} alt="random user" />
    <a href={user.email}>{user.email}</a>
    <button 
    onClick={openModal}
      className="card-btn">
      Contact {user.name.first}
    </button>
    <Modal 
      user={user}
      generateUser={generateUser}
      openModal={openModal}
      closeModal={closeModal}
      showModal={showModal}
    />
    </>
  )
}

export default UserCard;