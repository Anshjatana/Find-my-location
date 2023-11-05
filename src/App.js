import React from "react";
import { useState } from "react";
import LocationDisplay from "./Components/LocationDisplay";
import PostalCodeInput from "./Components/PostalCodeInput";
import "./App.css"
import imgsrc from "./Location.avif"


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
      <h1 className="text-4xl font-bold  text-center mt-4 uppercase text-pink-900">Find My Location</h1>
    <div className="flex justify-evenly items-center mt-16">
     <img src={imgsrc} alt="LocationImage" width={300} className=""/>
     <div className=" bg-[#fddcd2] w-[40%] h-auto p-10 pt-4 rounded-lg  text-center  ">
     <h2 className="text-xl text-pink-900 uppercase font-bold mb-6 underline" >Enter details below</h2>
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
      </div>
    </div>
    </>
  );
};
export default App;
