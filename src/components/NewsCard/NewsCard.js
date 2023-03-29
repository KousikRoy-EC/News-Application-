import React from "react";
import "./NewsCard.css";
import timeSince from "../../utils/TimeFunction";

const NewsCard = (Data) => {
  return (
    <>
    {Data.newsData.map((item) => {
      return(
        <div className="card">
        <img
          className="newsImg"
          src={item.urlToImage}
          alt="carousel"
        />
        <p className="timing">{timeSince(item.publishedAt)}</p>
        <p className="headingCard">
          {item.title.split(/\s+/).slice(0, 5).join(" ")}
        </p>
        <p className="description">
          {item.description.split(/\s+/).slice(0, 10).join(" ")}
        </p>
        <p className="footer">{item.author}</p>
      </div>
      )
    })}     
    </>
  );
};

export default NewsCard;
