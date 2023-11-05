import React from "react";
import LocationDisplay from "./Components/LocationDisplay";
import PostalCodeInput from "./Components/PostalCodeInput";
import "./App.css";
import imgsrc from "./Location.avif";
import { Provider } from "react-redux";
import store from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1 className="text-4xl font-bold  text-center mt-4 uppercase text-pink-900 heading">
          Find My Location
        </h1>
        <div className="flex justify-evenly items-center mt-16 appContainer">
          <img src={imgsrc} alt="LocationImage" width={300} className="" />
          <div className=" bg-[#fddcd2] w-[40%] h-auto p-10 pt-4 rounded-lg  text-center inputContainer ">
            <h2 className="text-xl text-pink-900 uppercase font-bold mb-6 underline">
              Enter details below
            </h2>
            <PostalCodeInput />
            <LocationDisplay />
          </div>
        </div>
      </div>
    </Provider>
  );
};
export default App;
