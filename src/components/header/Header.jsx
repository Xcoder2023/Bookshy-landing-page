import React from "react";
import "./Header.css";
import logo from "../assets/header-img/Frame 231.png";

const Header = () => {
  return (
    <>
      <div style={{ fontFamily: "Montserrat" }} className="headerMenu">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <ul className="nav-bar">
          <li>Home</li>
          <li>Features</li>
          <li>About us</li>
          <li>Join waitlist</li>
        </ul>
        <div className="header-btn">
          <button className="nav-btn">Get Started</button>
        </div>
      </div>
    </>
  );
};

export default Header;
