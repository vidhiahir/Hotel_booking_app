import React from "react";
import "./Header.css";
import logo from "../assets/cover.png";

const Header = ({ toggleSidebar }) => {
  return (
    <header className="header">
      <div className="menu-button" onClick={toggleSidebar}>
        <div className="menu-line"></div>
        <div className="menu-line"></div>
        <div className="menu-line"></div>
      </div>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="auth-buttons">
        <button className="signin-button">Sign In</button>
        <button className="signup-button">Sign Up</button>
      </div>
    </header>
  );
};

export default Header;
