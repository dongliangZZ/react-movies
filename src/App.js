import React, { useState, useEffect } from 'react';
import axios from "axios"
import './App.css';
import data from './config/data.json'
//components
import MovieList from './components/MovieList';

function App() {
  /***
   * URL:
   */
  // const URL = "https://my.api.mockaroo.com/movies.json?key=bf3c1c60"

  // const [movies, setMovies] = useState(null)

  // useEffect(()=>{
  //   getData()
  // }, [])

  // async function getData() {
  //   await axios(URL)
  //   .then(res => {
  //     setMovies(res.data)
  //   })
  //   .catch(error => {
  //     console.error("error: ", error)
  //   })
  // }

  const [movies, setMovies] = useState(data)

  return (
    <div className="App">
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
