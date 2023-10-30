import { useState, useEffect } from "react";
import MoiveCard from "./MoiveCard";
import "./App.css";
import SearchIcon from "./search.svg";

const API_kEY = "http://www.omdbapi.com/?i=tt3896198&apikey=d27b8b8f";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);

  const searchMovies = async (title) => {
    const responce = await fetch(`${API_kEY}&s=${title}`);
    const data = await responce.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("Spiderman");
  }, []);

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          placeholder="Search for Moives"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((tempMovie) => (
            <MoiveCard movie={tempMovie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No Moives Found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
