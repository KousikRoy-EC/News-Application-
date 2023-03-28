import React from "react";
import hamBurger from "../../asset/hamBurger.png";
import searchLogo from "../../asset/searchLogo.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="header">
        <img src={hamBurger} alt="zintlr logo" width="23.3" height="17.5" />
        <div className="heading">zintlr News</div>
        <img src={searchLogo} alt="zintlr logo" width="25" height="25" />
      </div>
    </>
  );
};

export default Navbar;
