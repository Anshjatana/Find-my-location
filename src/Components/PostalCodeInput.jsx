import React from "react";
import { ThreeDots } from "react-loader-spinner";

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
    <div className="App">
      <h1>Postal Code Location Finder</h1>
      <input
        type="text"
        value={countryCode}
        onChange={(e) => setCountryCode(e.target.value)}
        placeholder="Enter Country Code "
        required
      />
      <input
        type="text"
        value={postalCode}
        onChange={(e) => setPostalCode(e.target.value)}
        placeholder="Enter Postal Code"
        required
      />
      <button onClick={fetchLocationInfo}>Search</button>

      {loading && (
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="black"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      )}

      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default PostalCodeInput;
