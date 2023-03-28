import React from "react";
import "./Cateogory.css";


const Cateogory = () => {
  return (
    <>
      <div className="head">
        <p className="categoryHeading">Top Stories for you</p>

        <div className="category">
          <div className="categoryItems">All</div>
          <div className="categoryItems">Android</div>
          <div className="categoryItems">Cricket</div>
          <div className="categoryItems">iPhone</div>
          <div className="categoryItems">Google</div>
        </div>
      </div>
    </>
  );
};

export default Cateogory;
