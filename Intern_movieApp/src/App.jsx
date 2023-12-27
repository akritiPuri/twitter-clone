import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movie from "./Components/Movie";
import MovieDetails from "./Components/MovieDetails";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Movie />} />
          <Route path="/moviedetails/:id" element={<MovieDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
