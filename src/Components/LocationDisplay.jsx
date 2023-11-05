import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RiDeleteBin6Fill } from "react-icons/ri";
import {
  selectLocation,
  setLocationInfo,
  setError,
  setLoading,
} from "../redux/locationSlice";

const LocationDisplay = () => {
  const dispatch = useDispatch();
  const { locationInfo } = useSelector(selectLocation);

  const handleClear = () => {
    dispatch(setLocationInfo(null));
    dispatch(setError(null));
    dispatch(setLoading(false));
  };

  return (
    <div>
      {locationInfo && (
        <div className="location-info mt-8">
          <p className="text-xl mt-2 font-semibold ">
            Place name: {locationInfo.place}
          </p>
          <p className="text-xl mt-2 font-semibold ">
            State: {locationInfo.state}
          </p>
          <p className="text-xl mt-2 font-semibold ">
            Country: {locationInfo.country}
          </p>
          <button
            onClick={handleClear}
            className="hover:bg-pink-950 bg-pink-800 p-3 rounded-md mt-3"
          >
            <RiDeleteBin6Fill size={20} color="white" />
          </button>
        </div>
      )}
    </div>
  );
};

export default LocationDisplay;
