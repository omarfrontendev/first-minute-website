import { createSlice } from "@reduxjs/toolkit";
import { fetchSettingsData } from "../services/settings.services";

const settingsSlice = createSlice({
  name: "settings",
  initialState: {
    data: {},
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSettingsData.pending, (state) => {
        state.data = {};
        state.status = "loading";
      })
      .addCase(fetchSettingsData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchSettingsData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default settingsSlice.reducer;
