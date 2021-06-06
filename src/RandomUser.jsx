import React, { useState } from 'react';
import axios from 'axios';
//Components
import UserCard from "./UserCard";
import Modal from "./Modal";

const RandomUser = () => { 
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const amount = 10;

  const generateUser = () => {
    setLoading(true);
    axios.get(`https://randomuser.me/api/?results=${amount}`)
      .then((response) => {
        console.log(response.data.results);
        setUserData(response.data.results);//the data response form the API is within the DATA object, and the user data that we want is within that object in an object called 'results'
      }).catch((error) => {// if the API doesnt respond, do these things>>>>>
        console.log(error);
        setLoading(true);
      }).finally(()=> {
        setLoading(false);
      })
  }

  const openModal = (e) => {
    setShowModal(true);
  }
  const closeModal = (e) => {
    setShowModal(false);
  }

  return (
    <div className="App">
      <h1 className="app-title">Random User Generator</h1>
      <button onClick={openModal}>Open Modal</button>
      <Modal 
        openModal={openModal}
        closeModal={closeModal}
        showModal={showModal}
        setShowModal={setShowModal}
      />
      <button onClick={generateUser}>Next User</button>
        {loading ? (<h1>loading...</h1>) : 
        (<div className="app-user">
          {userData.map((user) => {
            return (
              <UserCard 
                className="app-user-card"  
                key={user.login.uuid}
                user={user}
                openModal={openModal} />
              )
          })}
        </div>)}
    </div>
  )
}

export default RandomUser;