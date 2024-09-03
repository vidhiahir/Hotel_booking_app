import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const HotelDetails = () => {
  const { selectedHotel } = useParams();
  const [hotel, setHotel] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:1712/api/hotels/${selectedHotel}`)
      .then((response) => {
        setHotel(response.data);
      })
      .catch((error) => {
        console.error("Error fetching hotel details:", error);
      });
  }, [selectedHotel]);
  if (!hotel) return <div> cant find selected hotel </div>;

  return (
    <div>
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
        <button>Book Hotel</button>
        {/* remained handling button */}
      </div>
    </div>
  );
};

export default HotelDetails;
