import React, { useState } from "react";

import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";
import "./App.css";

const apikey = encodeURIComponent(process.env.REACT_APP_API_KEY);

const API_URL = `https://www.omdbapi.com?apikey=${apikey}`; //API url

const App = () => {
  const [searchTerm, setSearchTerm] = useState(""); //search term state
  // It returns an array with two values: the current state and a function to update it.
  // The Hook takes an initial state value as an argument and returns an updated state value whenever the setter function is called.
  const [movies, setMovies] = useState([]); //movies state


  const searchMovies = async (title) => { 
    //asynchronous function that will definitely return a promise

  const response = await fetch(`${API_URL}&s=${title}`); 
  //awaiting the response of the fetch call before continuing. 
  //API_URL here is a placeholder for the actual url to where you are making the API call. 
  //The s= is the search query parameter in the url

  const data = await response.json(); 
  //The response is parsed as JSON using the response.json() method and the resulting data is stored in the data variable.
  setMovies(data.Search); 
  //updating the movies state
  };

return (
  <div className="app">
  <h1>MovieLand</h1>

  <div className="search">
  <input
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)} //updating the search term state
  onKeyUp={(e) => { //onKeyUp event handler to check if the user has pressed the enter key
  if (e.key === "Enter") { //if the enter key is pressed, call the searchMovies function
      searchMovies(searchTerm); //passing the search term as an argument
      }
    }}
    //e.target represents the element that triggered the event (in this case, the input field) and e.target.value retrieves the current value of the input field.
    placeholder="Search for movies"
  />
      
  <img
   src={SearchIcon}
   alt="search"
    onClick={() => searchMovies(searchTerm)}
   />
   </div>
    {movies?.length > 0 ? ( //if the movies array has more than 0 items, display the movies
    <div className="container"> 
    {movies.map((movie) => ( //looping through the movies array and rendering a MovieCard component for each movie
    <MovieCard movie={movie} /> //passing the movie as a prop to the MovieCard component
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
