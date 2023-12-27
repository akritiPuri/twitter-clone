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
    <div className="h-full w-full bg-neutral-200">
      <div className="bg-emerald-300 w-full h-30">
        <h1 className="text-5xl text-rose-950 text-center text-2xl text font-bold">
          MOVIES
        </h1>
      </div>
      <br />
      <div className="flex flex-wrap gap-4 justify-center">
        {movieList.map((items) => (
          <div key={items.id}>
            <Link to={`/moviedetails/${items.id}`}>
              <div className="group">
                <img
                  className="w-80 h-80 shadow-2xl rounded-xl group-hover:opacity-80 transition-opacity"
                  src={`https://image.tmdb.org/t/p/w500${items.poster_path}`}
                  alt={items.title}
                />
                <div className="text font-bold w-80">
                  <div className="text-rose-900 group-hover:underline">
                    Title: {items.title}
                  </div>
                  <div>
                    Release date: {items.release_date}
                    {/* <div className="text font-bold">Popularity:{items.popularity}</div> */}
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Movie;
