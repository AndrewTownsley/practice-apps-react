import React, { useState, useEffect } from 'react';
import axios from 'axios';
//Components
import UserCard from "./UserCard";

const RandomUser = () => { 
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);

  const amount = 10;



  useEffect(() => {

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
    
  }, [])

 

  return (
    <div className="app">
      <header className="app-header">
        <h1>Registered Users</h1>
        <form action="submit" className="user-search">
          <label htmlFor="userSearch">Search Users </label>
          <input type="text" placeholder="name, location, age"/>
        </form>
      </header>

        {loading ? (<h1>loading...</h1>) : 
        (<div className="user-container">
          {userData.map((user) => {
            return (
              <UserCard   
                key={user.login.uuid}
                user={user}
                userData={userData}
                // generateUser={generateUser}
                />
              )
          })}
        </div>)}
    </div>
  )
}

export default RandomUser;