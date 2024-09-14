import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import "./App.css";
import SearchIcon from "./search.svg";

const API_URL = "http://www.omdbapi.com?apikey=a030ee53";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  //fetch movies
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
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
          value={searchTerm} //dynamiclly set value within movie serach bar
          onChange={(e) => setSearchTerm(e.target.value)} //allows for typing within the search bar
        />

        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)} //add onClick function to make the svg a button with a function
          //The function being to dynamically change the state of the window whern search button is clicked so results pop up
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
