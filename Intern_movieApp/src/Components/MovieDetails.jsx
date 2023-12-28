import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [status, setStatus] = useState(0);

  const handleChange = (e) => {
    setStatus(e.target.value);
  };

  const getMovie = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=f391caf0398740c8598154478bc9f371`
    )
      .then((res) => res.json())
      .then((json) => setData(json));
  };

  useEffect(() => {
    getMovie();
  }, [id]);

  return (
    <div className="container mx-auto mt-8 p-4 grid grid-cols-2 gap-5 bg-amber-100 h-screen w-full">
      <div>
        <h1 className="text-3xl font-bold mb-4">{data.title}</h1>

        <div className="flex flex-wrap gap-8 items-center mb-4">
          <input
            type="radio"
            name="status"
            value="watching"
            onChange={handleChange}
            className="mr-2"
          />
          <label className="text font-bold">Watching</label>

          <input
            type="radio"
            name="status"
            value="HoldList"
            onChange={handleChange}
            className="mr-2"
          />
          <label className="text font-bold">Hold List</label>

          <input
            type="radio"
            name="status"
            value="Completed"
            onChange={handleChange}
            className="mr-2"
          />
          <label className="text font-bold">Completed</label>
        </div>

        <div className="text-orange-600 mb-4">
          <span className="text font-bold text-amber-950">Status: </span>
          {status}
        </div>

        <div className="mb-4">
          <span className="text font-bold">Original Language:</span>{" "}
          {data.original_language}
        </div>

        <div className="mb-4">
          <span className="text font-bold">Original Title:</span>{" "}
          {data.original_title}
        </div>
      </div>

      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`}
          alt={data.title}
          className="w-auto  w-80 h-80 shadow-2xl rounded-xl "
        />
      </div>

      <div>
        <div>
          <span className="text font-bold">Overview:</span> {data.overview}
        </div>
        <div>
          <span className="text font-bold">Popularity:</span> {data.popularity}
        </div>
        <div>
          <span className="text font-bold">Release Date:</span>{" "}
          {data.release_date}
        </div>
        <div>
          <span className="text font-bold">Vote Average:</span>{" "}
          {data.vote_average}
        </div>
        <div>
          <span className="text font-bold">Vote Count: </span>
          {data.vote_count}
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
