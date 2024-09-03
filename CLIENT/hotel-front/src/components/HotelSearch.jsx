// src/components/HotelSearch.jsx
import React, { useState, useEffect } from "react";
import "./HotelSearch.css";
import "./HotelSearchMini";
import { Link } from "react-router-dom";
import HotelSearchMini from "./HotelSearchMini";

const HotelSearch = ({ hotelSearchData, handleChange, load, handleClick }) => {
  return (
    <div className="hotel-search">
      <h1>Search Hotels</h1>
      <h2>Enjoy Free Booking with DreamStay</h2>
      <form className="search-box">
        <div className="field">
          <label>Location</label>
          <input
            type="text"
            required
            value={hotelSearchData.location}
            onChange={(e) => handleChange("location", e.target.value)}
            placeholder="Enter City"
          />
        </div>
        <div className="dates">
          <div className="date-field">
            <label>From</label>
            <input
              type="date"
              required
              value={hotelSearchData.startDate}
              onChange={(e) => handleChange("startDate", e.target.value)}
            />
          </div>
          <div className="date-field">
            <label>To</label>
            <input
              type="date"
              required
              value={hotelSearchData.endDate}
              onChange={(e) => handleChange("endDate", e.target.value)}
            />
          </div>
        </div>
        <div className="field">
          <label>Number of Rooms</label>
          <input
            type="number"
            required
            value={hotelSearchData.rooms}
            min="1"
            onChange={(e) => handleChange("rooms", e.target.value)}
          />
        </div>
        <button type="submit" disabled={load} onClick={handleClick}>
          <Link to="/hotels">{load ? "Loading..." : "Search"}</Link>
        </button>
      </form>
    </div>
  );
};

export default HotelSearch;
