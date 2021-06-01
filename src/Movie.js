import React, {useState} from 'react';

const Movie = () => {
  const initialValue = [ "Star Wars", "Return of the Jedi", "Empire Strikes Back",];

  const [movies, setMovies] = useState(initialValue);

  return (
    <main>
      {movies.map((movie) => {
        return <div key={movie}>{movie}</div>
      })}
    </main>
  )
}

export default Movie;