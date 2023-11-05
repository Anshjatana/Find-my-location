import { configureStore } from "@reduxjs/toolkit";
import locationSlice from "./locationSlice";

const store = configureStore({
  reducer: {
    location: locationSlice.reducer,
  },
});

export default store;
