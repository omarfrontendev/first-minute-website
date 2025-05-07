import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api";

// Async thunk to fetch users from an API
export const fetchSettingsData = createAsyncThunk("settings/fetchSettingsData", async (data) => {
  const response = await api.get(`settings-data`);
  return response.data;
});