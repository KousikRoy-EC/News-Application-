import React from "react";
import "./Carousel.css";
import vector from "../../asset/Vector.png";

const Carousel = () => {
  return (
    <>
      <div className="carousel">
        <div className="carouselItem">
          <img
            className="carouselImg"
            src="https://random.imagecdn.app/50/50"
            alt="carousel"
          />
          <div className="carouselHead">
            <div className="carouselTopic">Buisness</div>
            <img className="saveIcon" src={vector} alt="save" />
          </div>
          <div className="carouselFooter">
            <p className="subDetails">10 hours ago</p>
            <p>
              Lyft Revenue Grew Last Quarter Though Rider Numbers Were Below
              Expectations
            </p>
            <p className="subDetails">Lyft Inc.s stock fell Monday after...</p>
            <p className="source">Preetika Rana</p>
          </div>
        </div>
        <div className="carouselItem">
          <img
            className="carouselImg"
            src="https://random.imagecdn.app/50/50"
            alt="carousel"
          />
        </div>
        <div className="carouselItem">
          <img
            className="carouselImg"
            src="https://random.imagecdn.app/50/50"
            alt="carousel"
          />
        </div>
        <div className="carouselItem">
          <img
            className="carouselImg"
            src="https://random.imagecdn.app/50/50"
            alt="carousel"
          />
        </div>
        <div className="carouselItem">
          <img
            className="carouselImg"
            src="https://random.imagecdn.app/50/50"
            alt="carousel"
          />
        </div>
      </div>
    </>
  );
};

export default Carousel;
