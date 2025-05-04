import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api";

// Async thunk to fetch users from an API
export const fetchHomeData = createAsyncThunk("home/fetchHomeData", async (data) => {
  const response = await api.get(`home-sections`);
  return response.data;
});