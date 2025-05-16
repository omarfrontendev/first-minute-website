import { createSlice } from "@reduxjs/toolkit";

const scrollToSectionSlice = createSlice({
    name: "scrollToSection",
    initialState: {
        status: "notAllow"
    },
    reducers: {
        scrollToContactUs(state, action) {
            state.status = action.payload;
        },
    },
});

export const { scrollToContactUs } = scrollToSectionSlice.actions;

export default scrollToSectionSlice.reducer;
