import React from "react";
import ShowHotels from "./ShowHotels";
import HotelSearchMini from "./HotelSearchMini";

const ShowFilteredHotels = ({
  hotelSearchData,
  handleChange,
  handleMiniButton,
  loading,
  fetchHotels,
  handleHotelSelect,
}) => {
  return (
    <div>
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
          handleSelection={handleHotelSelect}
        />
      </>
    </div>
  );
};

export default ShowFilteredHotels;
