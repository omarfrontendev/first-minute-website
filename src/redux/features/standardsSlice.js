import { createSlice } from "@reduxjs/toolkit";
import { fetchStandardsData } from "../services/standards.services";

const standardsSlice = createSlice({
    name: "standards",
    initialState: {
        data: {},
        status: "idle",
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchStandardsData.pending, (state) => {
                state.data = {};
                state.status = "loading";
            })
            .addCase(fetchStandardsData.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.data = action.payload;
            })
            .addCase(fetchStandardsData.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});

export default standardsSlice.reducer;
