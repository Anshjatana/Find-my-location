import React from 'react'

import  { useState } from 'react';
import LocationDisplay from './Components/LocationDisplay'
import PostalCodeInput from './Components/PostalCodeInput'

const App = () => {
  const [postalCode, setPostalCode] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [locationInfo, setLocationInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchLocationInfo = async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://api.zippopotam.us/${countryCode}/${postalCode}`);
      if (response.ok) {
        const data = await response.json();
        if (data.places && data.places.length > 0) {
          const place = data.places[0];
          setLocationInfo({
            country: data['country'],
            state: place['state'],
            place: place['place name'],
          });
          setError(null);
        } else {
          setError('Location information not found');
        }
      } 
    } catch (error) {
      setError('Failed to fetch location information');
    }
    setLoading(false);
  };

  const handleClear = () => {
    setPostalCode('');
    setCountryCode('');
    setLocationInfo(null);
    setError(null);
  };

  return (
    <>
      <h1 className="text-3xl font-bold underline text-center">Hello World </h1>
      <PostalCodeInput fetchLocationInfo={fetchLocationInfo} postalCode={postalCode} setCountryCode={setCountryCode} countryCode={countryCode} setPostalCode={setPostalCode} loading={loading} error={error} />
      <LocationDisplay handleClear={handleClear}  locationInfo={locationInfo} {...locationInfo}/>
    </>
  )
}
export default App;

