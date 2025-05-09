import { createSlice } from "@reduxjs/toolkit";
import { fetchOneMinPageData } from "../services/oneMinPage.services";

const oneMinPageSlice = createSlice({
  name: "oneMinPage",
  initialState: {
    data: {},
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOneMinPageData.pending, (state) => {
        state.data = {};
        state.status = "loading";
      })
      .addCase(fetchOneMinPageData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchOneMinPageData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default oneMinPageSlice.reducer;
