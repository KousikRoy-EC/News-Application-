import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Carousel from "./components/Carousel/Carousel";
import Cateogory from "./components/Cateogory/Cateogory"
import NewsCard from "./components/NewsCard/NewsCard"
import "./index.css";


function App() {
  return (
  <div className="app">
    <Navbar />
    <Carousel />
    <Cateogory />
    <NewsCard />
    <div className="exploreButton">Explore</div>
  </div>
  );
}

export default App;
