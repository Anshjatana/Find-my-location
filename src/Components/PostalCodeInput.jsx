import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ThreeDots } from "react-loader-spinner";
import "../App.css";
import {
  selectLocation,
  setCountryCode,
  setPostalCode,
  setError,
  setLoading,
  setLocationInfo,
} from "../redux/locationSlice";

const PostalCodeInput = () => {
  const dispatch = useDispatch();
  const { loading, error, countryCode, postalCode } =
    useSelector(selectLocation);

  const handleCountryCodeChange = (e) => {
    dispatch(setCountryCode(e.target.value));
  };

  const handlePostalCodeChange = (e) => {
    dispatch(setPostalCode(e.target.value));
  };

  const fetchLocationInfo = () => async (dispatch, getState) => {
    dispatch(setLoading(true));

    const { countryCode, postalCode } = getState().location;

    try {
      const response = await fetch(
        `https://api.zippopotam.us/${countryCode}/${postalCode}`
      );

      if (response.ok) {
        const { country, places } = await response.json();
        if (places && places.length > 0) {
          const { state, "place name": place } = places[0];
          dispatch(setLocationInfo({ country, state, place }));
          dispatch(setError(null));
        } else {
          dispatch(setError("Location info not found"));
          dispatch(setLocationInfo(null));
        }
      } else {
        dispatch(setError("Please enter correct info above"));
        dispatch(setLocationInfo(null));
      }
    } catch (error) {
      dispatch(setError("Failed to fetch location info"));
      dispatch(setLocationInfo(null));
    }

    dispatch(setLoading(false));
  };

  //Redux thunk middleware
  const handleSearch = () => {
    dispatch(fetchLocationInfo());
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <input
        type="text"
        className=" p-2 my-1 text-base text-center rounded-lg w-[45%]"
        value={countryCode}
        onChange={handleCountryCodeChange}
        placeholder="Enter Country Code (IN)"
        required
      />
      <input
        type="text"
        className=" p-2 my-2 text-lg  text-center rounded-lg w-[60%]"
        value={postalCode}
        onChange={handlePostalCodeChange}
        placeholder="Enter Postal Code"
        required
      />
      <button
        onClick={handleSearch}
        className=" hover:bg-pink-950 bg-pink-800 text-white px-3 py-2 rounded-md text-lg mt-3"
      >
        Search
      </button>

      {loading && (
        <ThreeDots
          height="60"
          width="80"
          radius="9"
          color="pink"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      )}

      {error && <p className="text-lg mt-4">{error}</p>}
    </div>
  );
};

export default PostalCodeInput;
