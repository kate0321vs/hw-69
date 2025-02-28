import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosApi from '../axiosApi.ts';

export const searchFetch  = createAsyncThunk (
  'search/searchFetch',
  async (showsName: string) => {
    const response = await axiosApi(`http://api.tvmaze.com/search/shows?q=${showsName}`);
    console.log(response);
    return response.data;
  }
)