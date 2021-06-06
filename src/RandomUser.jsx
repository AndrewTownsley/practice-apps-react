import React, { useState, Fragment } from 'react';
import axios from 'axios';
//Components
import UserButton from './UserButton';

const RandomUser = () => { 
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeUser, setActiveUser] = useState(false);
  const [activeLink, setActiveLink] = useState(0);

  const generateUser = () => {
    setLoading(true);
    axios.get("https://randomuser.me/api")
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
      <h1>Random User Generator</h1>
      <UserButton isActive={activeUser} clicked={generateUser} />
        {loading ? (<h1>loading...</h1>) : 
        (<div className="app-user">
          {userData.map((user, index) => {
            return (
            <Fragment  key={user.id}>
              <img src={user.picture.large} alt="random user" />
            </Fragment>
              )
          })}
        </div>)}
    </div>
  )
}

export default RandomUser;