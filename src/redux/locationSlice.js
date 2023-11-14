import { createSlice } from "@reduxjs/toolkit";

export const locationSlice = createSlice({
  name: "location",
  initialState: {
    postalCode: "",
    locationInfo: null,
    loading: false,
    error: null,
  },
  reducers: {
    setPostalCode: (state, action) => {
      state.postalCode = action.payload;
    },
    setLocationInfo: (state, action) => {
      state.locationInfo = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  setPostalCode,
  setLocationInfo,
  setLoading,
  setError,
} = locationSlice.actions;

export const selectLocation = (state) => state.location;

export default locationSlice.reducer;
