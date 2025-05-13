import { createSlice } from "@reduxjs/toolkit";
import { fetchAdditionalPageContent, fetchAdditionalPages } from "../services/additionalPages.services";

const additionalPagesSlice = createSlice({
  name: "additionalPages",
  initialState: {
    data: {},
    content: {},
    status: "idle",
    contentstatus: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAdditionalPages.pending, (state) => {
        state.data = {};
        state.status = "loading";
      })
      .addCase(fetchAdditionalPages.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchAdditionalPages.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
    builder
      .addCase(fetchAdditionalPageContent.pending, (state) => {
        state.content = {};
        state.contentstatus = "loading";
      })
      .addCase(fetchAdditionalPageContent.fulfilled, (state, action) => {
        state.contentstatus = "succeeded";
        state.content = action.payload;
      })
      .addCase(fetchAdditionalPageContent.rejected, (state, action) => {
        state.contentstatus = "failed";
        state.error = action.error.message;
      });
  },
});

export default additionalPagesSlice.reducer;
