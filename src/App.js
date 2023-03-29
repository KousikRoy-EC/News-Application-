import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Carousel from "./components/Carousel/Carousel";
import Cateogory from "./components/Cateogory/Cateogory";
import NewsCard from "./components/NewsCard/NewsCard";
import search from "./asset/search.png";
import "./index.css";
import { useEffect } from "react";
import { useState } from "react";
require ('dotenv').config();


// I have not used tailwind CSS i have implemented all the pages using raw css.

function App() {
  const [Data, setData] = useState(null);

  useEffect(() => {
    async function fetchMyAPI() {
      let response = await fetch(
        "https://newsapi.org/v2/everything?q=Apple&from=2023-03-28&sortBy=popularity&apiKey=" + process.env.REACT_APP_API_KEY
      );
      response = await response.json();
      setData(response.articles);
    }
    fetchMyAPI();
  }, []);

  return (
    <div className="app">
      <Navbar />
      {/* we can also use chaining here */}
      {Data && <Carousel newsData={Data} />}
      {Data && <Cateogory newsData={Data} />}
      {Data && <NewsCard newsData={Data} />}
      <div className="exploreButton">
        <img src={search} alt="search" />
        Explore
      </div>
    </div>
  );
}

export default App;
