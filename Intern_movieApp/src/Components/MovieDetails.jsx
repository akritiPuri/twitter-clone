import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState({});

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
  return <div>{data.title}</div>;
};

export default MovieDetails;
