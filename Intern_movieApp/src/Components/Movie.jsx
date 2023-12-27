import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Movie() {
  const [movieList, setMovieList] = useState([]);
  const getMovie = () => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=f391caf0398740c8598154478bc9f371"
    )
      .then((res) => res.json())
      .then((json) => setMovieList(json.results));
  };

  useEffect(() => {
    getMovie();
  }, []);
  console.log(movieList);

  return (
    <div>
      {movieList.map((items) => (
        <div key={items.id}>
          <Link to={`/moviedetails/${items.id}`}>
            <img
              style={{ width: "200px", height: "250px" }}
              src={`https://image.tmdb.org/t/p/w500${items.poster_path}`}
            />
            <div>
              Title: {items.title}
              <div>
                Release date: {items.release_date}
                <div> Popularity:{items.popularity}</div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Movie;
