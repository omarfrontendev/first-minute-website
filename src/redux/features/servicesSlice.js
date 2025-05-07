import { createSlice } from "@reduxjs/toolkit";
import { fetchServicesData } from "../services/services.services";

const servicesSlice = createSlice({
    name: "serviecs",
    initialState: {
        data: {},
        status: "idle",
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchServicesData.pending, (state) => {
                state.data = {};
                state.status = "loading";
            })
            .addCase(fetchServicesData.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.data = action.payload;
            })
            .addCase(fetchServicesData.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});

export default servicesSlice.reducer;
