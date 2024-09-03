import React from "react";
import { Link } from "react-router-dom";
import "./ShowHotels.css";

const ShowHotels = ({ hotelList, location, handleSelection }) => {
  // console.log("hotelList:", hotelList);
  // console.log("location:", location);

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
            onClick={() => handleSelection(hotel._id)}
          >
            <Link to={`/hotels/${hotel._id}`}>
              <img src="/hotelpic.jpg" alt={hotel.name} />
              <h3>{hotel.name}</h3>
              <h3>{hotel.address}</h3>
              <h3>{hotel.desc}</h3>
            </Link>
          </div>
        ))}
    </div>
  );
};

export default ShowHotels;
