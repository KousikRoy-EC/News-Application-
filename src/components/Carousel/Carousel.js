import React from "react";
import "./Carousel.css";
import vector from "../../asset/Vector.png";
import timeSince from "../../utils/TimeFunction";

const Carousel = (Data) => {
  return (
    <>
 <div className="carousel">
  {Data.newsData.map((item) => {
   return(
    <div className="carouselItem">
          <img
            className="carouselImg"
            src={item.urlToImage}
            alt="carousel"
          />
          <div className="carouselHead">
            <div className="carouselTopic">{item.source.name}</div>
            <img className="saveIcon" src={vector} alt="save" />
          </div>
          <div className="carouselFooter">
            <p className="subDetails">{timeSince(item.publishedAt)}</p>
            <p>
              {item.title}
            </p>
            <p className="subDetails">{item.description.split(/\s+/).slice(0, 5).join(" ")}</p>
            <p className="source">{item.author}</p>
          </div>
        </div>
   )
 })} 

     
        
      </div>
    </>
  );
};

export default Carousel;


