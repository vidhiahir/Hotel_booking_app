// src/components/HotelSearchMini.jsx
import React from "react";
import "./HotelSearchMini.css";

const HotelSearchMini = ({ miniData, handleChange, handleClick, load }) => {
  // const [error, setError] = useState("");
  function handleSubmit(e) {
    e.preventDefault(); // Prevent the default form submission

    handleClick();
  }
  return (
    <form className="hotel-search-mini" onSubmit={handleSubmit}>
      <input
        type="text"
        value={miniData.location}
        onChange={(e) => handleChange("location", e.target.value)}
        placeholder={"City"}
        sx={{ height: 10 }}
        required
      />
      <input
        type="date"
        value={miniData.startDate}
        onChange={(e) => handleChange("startDate", e.target.value)}
        required
      />
      <input
        type="date"
        value={miniData.endDate}
        onChange={(e) => handleChange("endDate", e.target.value)}
        required
      />
      <input
        type="number"
        value={miniData.rooms}
        placeholder={"Number of Rooms"}
        onChange={(e) => handleChange("rooms", e.target.value)}
        min="1"
        required
      />
      <button type="submit" disabled={load}>
        {load ? "Loading..." : "Search"}
      </button>
    </form>
  );
};

export default HotelSearchMini;
