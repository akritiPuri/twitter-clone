import NavBar from "./assignment/NavBar";
import Home from "../../Pages/Home";
import About from "../../Pages/About";

import { Route, BrowserRouter, Routes } from "react-router-dom";
import SingleTweet from "../../Pages/SingleTweet";
const Shell = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/tweet/:id" element={<SingleTweet />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default Shell;
