import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api";

// Async thunk to fetch users from an API
export const fetchAdditionalPages = createAsyncThunk("additionalPages/fetchAdditionalPages", async (data) => {
  const response = await api.get(`additional-pages`);
  return response.data;
});

// Async thunk to fetch users from an API
export const fetchAdditionalPageContent = createAsyncThunk("additionalPages/fetchAdditionalPageContent", async (id) => {
  const response = await api.get(`additional-page-content/${id}`);
  return response.data;
});