import React, { useState, useEffect } from 'react';

const BookApp = () => { 
  const [books,setBooks] = useState(null);

  useEffect(() => {
      fetch("https://randomuser.me/api")
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
            throw response;
        })
        .catch((error) => {
          console.error("error fetching data: ", error);
          setError(error);
        })
  })

  return (

  )
}

export default BookApp;