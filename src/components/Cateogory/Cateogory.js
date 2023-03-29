import React from "react";
import "./Cateogory.css";


const Cateogory = (Data) => {
  return (
    <>
      <div className="head">
        <p className="categoryHeading">Top Stories for you</p>

        <div className="category">
        {Data.newsData.map((item) => {
          return(
            <div className="categoryItems">{item.source.name}</div>
          )
        })}
        </div>
      </div>
    </>
  );
};

export default Cateogory;
