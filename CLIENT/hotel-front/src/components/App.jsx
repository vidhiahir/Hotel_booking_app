import React, { useState } from "react";
import Header from "./Header.jsx";
import Sidebar from "./Sidebar.jsx";
import HotelSearch from "./HotelSearch.jsx";
import HotelSearchMini from "./HotelSearchMini.jsx";
import ShowHotels from "./ShowHotels.jsx";
import axios from "axios";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

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
  const [result, setResult] = useState(false);
  const [selectedHotel, setSelectedHotel] = useState();
  // const [miniResult, setMiniResult] = useState(false);

  function handleHotelSelect(hotel) {
    setSelectedHotel(hotel);
  }

  function handleChange(name, val) {
    setHotelSearchData((prevData) => ({
      ...prevData,
      [name]: val,
    }));
    setMiniResult(false);
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
    setResult(true);
    // setMiniResult(true);
  }

  async function handleMiniButton() {
    console.log("clicked");
    setLoading(true);
    await fetchAllHotels();
    setLoading(false);
    // setMiniResult(true);
    setSelectedHotel(null);
  }

  return (
    <Router>
      <Header />
      <Sidebar />

      {result ? (
        <>
          <HotelSearchMini
            miniData={hotelSearchData}
            handleChange={handleChange}
            handleClick={handleMiniButton}
            load={loading}
          />
          <ShowHotels
            hotelList={fetchHotels}
            location={hotelSearchData.location}
            hotel={selectedHotel}
            handleSelection={handleHotelSelect}
          />
        </>
      ) : (
        <HotelSearch
          hotelSearchData={hotelSearchData}
          handleChange={handleChange}
          handleClick={handleButton}
          load={loading}
          error={error}
        />
      )}
    </Router>
  );
};

export default App;
