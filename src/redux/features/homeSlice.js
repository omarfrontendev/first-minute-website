import { createSlice } from "@reduxjs/toolkit";
import { fetchHomeData } from "../services/home.services";

const homeSlice = createSlice({
  name: "home",
  initialState: {
    data: {},
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHomeData.pending, (state) => {
        state.data = {};
        state.status = "loading";
      })
      .addCase(fetchHomeData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.all = action.payload.data;
      })
      .addCase(fetchHomeData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default homeSlice.reducer;
