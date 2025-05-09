import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api";

// Async thunk to fetch users from an API
export const fetchOneMinPageData = createAsyncThunk("oneMinPage/fetchOneMinPageData", async (data) => {
  const response = await api.get(`one-min-page`);
  return response.data;
});