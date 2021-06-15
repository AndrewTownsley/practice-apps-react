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
    <article className="user-card">
      <div className="user-card-img-bg">
        <img src={user.picture.large} alt="random user" />
      </div>
      <div className="user-card-info">
        <h4>{user.name.first + " " + user.name.last}</h4>
        <p>membership: {user.dob.age >= 55 ? "Senior" : "Adult"}</p>
        </div>
        <button 
          onClick={openModal}
          className="user-card-btn">
          Contact {user.name.first}
        </button>
    {/* <a href={user.email}>{user.email}</a> */}
   
    <Modal 
      user={user}
      generateUser={generateUser}
      openModal={openModal}
      closeModal={closeModal}
      showModal={showModal}
    />
    </article>
  )
}

export default UserCard;