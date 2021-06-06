import React, { useState } from 'react';

const UserCard = ({ user, openModal}) => {

  return (
    <>
    <h3>{user.name.first + " " + user.name.last}</h3>
    <img src={user.picture.large} alt="random user" />
    <a href="{user.email}">{user.email}</a>
    <button 
    onClick={openModal}
      className="card-btn">
      Contact {user.name.first}
    </button>
    </>
  )
}

export default UserCard;