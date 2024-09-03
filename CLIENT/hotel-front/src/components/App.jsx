import React, { useState } from "react";
import Header from "./Header.jsx";
import Sidebar from "./Sidebar.jsx";
import HotelSearch from "./HotelSearch.jsx";
import HotelSearchMini from "./HotelSearchMini.jsx";
import ShowHotels from "./ShowHotels.jsx";
import axios from "axios";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HotelDetails from "./HotelDetails.jsx";
import ShowFilteredHotels from "./ShowFilteredHotels.jsx";

const App = () => {
  axios.defaults.baseURL = "http://localhost:1712";
  const [hotelSearchData, setHotelSearchData] = useState({
    location: "",
    startDate: "",
    endDate: "",
    rooms: "1",
  });
  const [fetchHotels, setFetchHotels] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedHotel, setSelectedHotel] = useState(null);

  function handleHotelSelect(hotel) {
    setSelectedHotel(hotel);
  }

  function handleChange(name, val) {
    setHotelSearchData((prevData) => ({
      ...prevData,
      [name]: val,
    }));
  }

  const fetchAllHotels = () => {
    axios
      .get("/api/hotels")
      .then((response) => {
        setFetchHotels(response.data);
      })
      .catch((err) => setError(err.message));
  };
  async function handleButton() {
    console.log("clicked");
    setLoading(true);
    await fetchAllHotels();
    setLoading(false);
  }

  async function handleMiniButton() {
    console.log("clicked");
    setLoading(true);
    await fetchAllHotels();
    setLoading(false);
  }

  return (
    <Router>
      <Header />
      <Sidebar />
      <Routes>
        <Route
          path="/search"
          element={
            <HotelSearch
              hotelSearchData={hotelSearchData}
              handleChange={handleChange}
              handleClick={handleButton}
              load={loading}
              error={error}
            />
          }
        />
        <Route
          path="/hotels"
          element={
            <ShowFilteredHotels
              hotelSearchData={hotelSearchData}
              handleChange={handleChange}
              handleMiniButton={handleMiniButton}
              loading={loading}
              fetchHotels={fetchHotels}
              handleHotelSelect={handleHotelSelect}
            />
          }
        />

        <Route path="/hotels/:selectedHotel" element={<HotelDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
