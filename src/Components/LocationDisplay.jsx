import React from "react";
import { RiDeleteBin6Fill } from 'react-icons/ri';

const LocationDisplay = ({
  locationInfo,
  handleClear,
  place,
  state,
  country,
}) => {
  return (
    <div>
      {locationInfo &&
        <div className="location-info mt-8">
          <p className="text-xl mt-2 font-semibold ">Place name: {place}</p>
          <p className="text-xl mt-2 font-semibold ">State: {state}</p>
          <p className="text-xl mt-2 font-semibold ">Country: {country}</p>
          <button onClick={handleClear} className=" hover:bg-pink-950 bg-pink-800 p-3 rounded-md mt-3"><RiDeleteBin6Fill size={20} color="white"/></button>
        </div>
      }
    </div>
  );
};

export default LocationDisplay;
