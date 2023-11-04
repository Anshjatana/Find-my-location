import React from "react";

const LocationDisplay = ({
  locationInfo,
  handleClear,
  place,
  state,
  country,
}) => {
  return (
    <div>
      {locationInfo ? (
        <div className="location-info">
          <p>Place: {place}</p>
          <p>State: {state}</p>
          <p>Country: {country}</p>
          <button onClick={handleClear}>Clear</button>
        </div>
      ) : (
        <p>Enter Details above</p>
      )}
    </div>
  );
};

export default LocationDisplay;
