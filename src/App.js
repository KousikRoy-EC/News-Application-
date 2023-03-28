import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Carousel from "./components/Carousel/Carousel";
import Cateogory from "./components/Cateogory/Cateogory"
import NewsCard from "./components/NewsCard/NewsCard"
import search from "./asset/search.png"
import "./index.css";
import { useEffect } from "react";
// require ('dotenv').config();
function App() {
  useEffect(() => {
    var url = 'https://newsapi.org/v2/everything?q=Apple&from=2023-03-28&sortBy=popularity&apiKey=' + process.env.REACT_APP_API_KEY;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });

  }, [])
  


  return (
  <div className="app">
    <Navbar />
    <Carousel />
    <Cateogory />
    <NewsCard />
    <div className="exploreButton">
    <img src={search} alt="search" />
    Explore</div>
   
  </div>
  );
}

export default App;
