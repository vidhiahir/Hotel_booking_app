// src/components/Sidebar.jsx
import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>Flights</li>
        <li>Hotels</li>
        <li>Scheme</li>
        <li>Hotel of the Week</li>
        <li>My Trips</li>
        <li>Support</li>
      </ul>
    </div>
  );
};

export default Sidebar;
