import React, { useState } from 'react';

const UserButton = ({ isActive, clicked}) => {

  return (
    <div>
      <button 
        onClick={clicked}>
          {isActive ? "Get another user" : "Get user"}
  {/* "isActive is true if a user's data has been successfully fetched"*/}
      </button>
    </div>
  )
}

export default UserButton;