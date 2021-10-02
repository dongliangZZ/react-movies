import React from "react";

//component
import MovieBoard from './MovieBoard'

const MovieList = ({movies}) => {
  return <div className="movie-list">
    {
      movies && movies.length>0 && movies.map(movie => {
        return <MovieBoard
          title={movie.name}
          id={movie.id}
          key={movie.id}
        />
      })
    }
  </div>
}

export default MovieList;