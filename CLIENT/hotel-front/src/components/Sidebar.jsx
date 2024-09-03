// src/components/Sidebar.jsx
import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>Flights</li>
        <li>
          <Link to="/search">Hotels</Link>
        </li>

        <li>Scheme</li>
        <li>Hotel of the Week</li>
        <li>My Trips</li>
        <li>Support</li>
      </ul>
    </div>
  );
};

export default Sidebar;
