import React from 'react'

const PostalCodeInput = ({fetchLocationInfo,loading,error,countryCode,setCountryCode,postalCode,setPostalCode}) => {
  return (
    <div className="App">
      <h1>Postal Code Location Finder</h1>
      <input
        type="text"
        value={countryCode}
        onChange={(e) => setCountryCode(e.target.value)}
        placeholder="Enter Country Code"
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

      {loading && <p>Loading...</p>}

      {error && <p className="error">{error}</p>}

    </div>
  );
};

 
export default PostalCodeInput;
