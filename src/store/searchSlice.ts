import { createSlice } from '@reduxjs/toolkit';
import { fetchOneShow, searchFetch } from './showsThun.ts';
import { RootState } from '../app/store.ts';
import { Show } from '../types';

interface SearchState {
  showsName: string;
  response: Show[];
  searchLoading: boolean;
  oneShow: Show;
}

const initialState: SearchState = {
  showsName: '',
  response: [],
  searchLoading: false,
  oneShow: {
    name: '',
    image: {original: ''},
    summary: '',
    premiered: '',
    status: '',
  },
}

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setQuery: (state, action) => {
      state.showsName = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(searchFetch.pending, (state) => {
      state.searchLoading = true;
    });
    builder.addCase(searchFetch.fulfilled, (state, action) => {
      state.searchLoading = false;
      state.response = action.payload;
      console.log(state.response)
    });
    builder.addCase(searchFetch.rejected, (state) => {
      state.searchLoading = false;
    });

    builder.addCase(fetchOneShow.pending, (state) => {
      state.searchLoading = true;
    });
    builder.addCase(fetchOneShow.fulfilled, (state, action) => {
      state.searchLoading = false;
      state.oneShow = action.payload;
      state.response = [];
      state.showsName = (action.payload).name;
      console.log('action', action.payload);
    });
    builder.addCase(fetchOneShow.rejected, (state) => {
      state.searchLoading = false;
    })
  }
})

export const { setQuery } = searchSlice.actions;
export const searchShowName = (state: RootState) => state.search.showsName;
export const showsArr = (state: RootState) => state.search.response;
export const oneShow = (state: RootState) => state.search.oneShow;
export const searchReducer = searchSlice.reducer;