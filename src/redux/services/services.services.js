import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api";

// Async thunk to fetch users from an API
export const fetchServicesData = createAsyncThunk("services/fetchServicesData", async () => {
  const response = await api.get(`services`);
  return response.data;
});

// Async thunk to fetch users from an API
export const getServiceById = createAsyncThunk("services/getServiceById", async (id) => {
  const response = await api.get(`service-content/${id}`);
  return response.data;
});