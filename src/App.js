import React, { useEffect } from "react";
import "./App.css";
import SearchIcon from "./search.svg";

const API_URL = "http://www.omdbapi.com?apikey=a030ee53";

const App = () => {
  //fetch movies
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL} &s= ${title}`);
    const data = await response.json(); //wait for response but store info in "data"

    console.log(data.Search);
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

        <img src={SearchIcon} alt="search" />
      </div>
    </div>
  );
};

export default App;
