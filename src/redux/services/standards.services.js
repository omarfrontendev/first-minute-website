import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api";

// Async thunk to fetch users from an API
export const fetchStandardsData = createAsyncThunk("standards/fetchStandardsData", async (data) => {
  const response = await api.get(`our-standards-page`);
  return response.data;
});