import React from "react";
import { useState } from "react";
import LocationDisplay from "./Components/LocationDisplay";
import PostalCodeInput from "./Components/PostalCodeInput";

const App = () => {
  const [postalCode, setPostalCode] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [locationInfo, setLocationInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchLocationInfo = async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://api.zippopotam.us/${countryCode}/${postalCode}`);
      if (response.ok) {
        const { country, places } = await response.json();
        if (places && places.length > 0) {
          const { state, "place name": place } = places[0];
          setLocationInfo({ country, state, place });
          setError(null);
        } else {
          setError("Location info not found");
          setLocationInfo(null);
        }
      } else {
        setError("Please enter correct info above");
        setLocationInfo(null);
      }
    } catch (error) {
      setError("Failed to fetch location info");
      setLocationInfo(null);
    }
    setLoading(false);
  };
  

  const handleClear = () => {
    setPostalCode("");
    setCountryCode("");
    setLocationInfo(null);
    setError(null);
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-center">Pincoder</h1>
      <PostalCodeInput
        fetchLocationInfo={fetchLocationInfo}
        postalCode={postalCode}
        setCountryCode={setCountryCode}
        countryCode={countryCode}
        setPostalCode={setPostalCode}
        loading={loading}
        error={error}
      />
      <LocationDisplay
        handleClear={handleClear}
        locationInfo={locationInfo}
        {...locationInfo}
      />
    </>
  );
};
export default App;
