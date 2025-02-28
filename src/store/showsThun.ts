import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosApi from '../axiosApi.ts';

export const searchFetch  = createAsyncThunk (
  'search/searchFetch',
  async (showsName: string) => {
    const response = await axiosApi(`search/shows?q=${showsName}`);
      return response.data;
  }
)

export const fetchOneShow = createAsyncThunk (
  'search/fetchOneShow',
  async (id: string) => {
    const response = await axiosApi(`shows/${id}`);
    return response.data;
  }
)

