import React from "react";
import { ThreeDots } from "react-loader-spinner";
import "../App.css"

const PostalCodeInput = ({
  fetchLocationInfo,
  loading,
  error,
  countryCode,
  setCountryCode,
  postalCode,
  setPostalCode,
}) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <input
        type="text"
        className=" p-2 my-1 text-base text-center rounded-lg w-[45%]"
        value={countryCode}
        onChange={(e) => setCountryCode(e.target.value)}
        placeholder="Enter Country Code (IN)"
        required
      />
      <input
        type="text"
        className=" p-2 my-2 text-lg  text-center rounded-lg w-[60%]"
        value={postalCode}
        onChange={(e) => setPostalCode(e.target.value)}
        placeholder="Enter Postal Code"
        required
      />
      <button onClick={fetchLocationInfo} className=" hover:bg-pink-950 bg-pink-800 text-white px-3 py-2 rounded-md text-lg mt-3" >Search</button>

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
