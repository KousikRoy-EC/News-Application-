import React from "react";
import "./NewsCard.css";

const NewsCard = () => {
  return (
    <>
      <div className="card">
        <img
          className="newsImg"
          src="https://random.imagecdn.app/50/50"
          alt="carousel"
        />
        <p className="timing">1 day ago</p>
        <p className="headingCard">
          Battlegrounds Mobile India iOS release date
        </p>
        <p className="description">
          The reason behind their disappointment is that iPhone users have
          been..
        </p>
        <p className="footer">Matt Young</p>
      </div>
    </>
  );
};

export default NewsCard;
