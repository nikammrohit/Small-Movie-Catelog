import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import "./App.css";
import SearchIcon from "./search.svg";

const API_URL = "http://www.omdbapi.com?apikey=a030ee53";

const App = () => {
  const [movies, setMovies] = useState([]);

  //fetch movies
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL} &s= ${title}`);
    const data = await response.json(); //wait for response but store info in "data"

    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("Shrek");
  }, []);

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          placeholder="Search for Movies"
          value="Superman" //static set value within movie serach bar
          onChange={() => {}}
        />

        <img
          src={SearchIcon}
          alt="search"
          onClick={() => {}} //add onClick function to make the svg a button with a function
        />
      </div>

      {movies?.length > 0 ? (
        //if movies lenth greater than 0 then render the movie card...otherwise say no movies found
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
