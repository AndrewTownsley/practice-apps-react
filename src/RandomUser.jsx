import React, { useState } from 'react';
import axios from 'axios';
//Components
import UserCard from "./UserCard";

const RandomUser = () => { 
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);

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

 

  return (
    <div className="App">
      <h1 className="app-title">Random User Generator</h1>


      <button onClick={generateUser}>Next User</button>
        {loading ? (<h1>loading...</h1>) : 
        (<div className="app-user">
          {userData.map((user) => {
            return (
              <UserCard 
                className="app-user-card"  
                key={user.login.uuid}
                user={user}
                // openModal={openModal}
                // closeModal={closeModal}
                userData={userData}
                generateUser={generateUser}
                />
              )
          })}
        </div>)}
    </div>
  )
}

export default RandomUser;