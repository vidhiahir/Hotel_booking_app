import React from "react";
import { useState } from "react";

import "./ShowHotels.css";

const ShowHotels = ({ hotelList, location, hotel, handleSelection }) => {
  // console.log("hotelList:", hotelList);
  // console.log("location:", location);
  if (hotel != null) {
    return (
      <>
        <div className="hotel-details">
          <h2>{hotel.name}</h2>
          <img src="/hotelpic.jpg" alt={hotel.name} />
          <p>
            <strong>Address:</strong> {hotel.address}
          </p>
          <p>
            <strong>Description:</strong> {hotel.desc}
          </p>
          <p>
            <strong>Price:</strong> ₹{hotel.cheapestPrice}
          </p>
          <p>
            <strong>Distance:</strong> {hotel.distance} meters from center
          </p>
          <p>
            <strong>Type:</strong> {hotel.type}
          </p>
        </div>
      </>
    );
  }
  if (location == "") return <></>;
  return (
    <div className="hotel-container">
      {hotelList
        .filter((item) => {
          return item.city.toLowerCase() === location.toLowerCase();
        })
        .map((hotel) => (
          <div
            key={hotel._id}
            className="hotel-card"
            onClick={() => handleSelection(hotel)}
          >
            <img src="/hotelpic.jpg" alt={hotel.name} />
            <h3>{hotel.name}</h3>
            <h3>{hotel.address}</h3>
            <h3>{hotel.desc}</h3>
          </div>
        ))}
    </div>
  );
};

export default ShowHotels;
