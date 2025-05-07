import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api";

// Async thunk to fetch users from an API
export const fetchServicesData = createAsyncThunk("services/fetchServicesData", async (data) => {
  const response = await api.get(`services`);
  return response.data;
});