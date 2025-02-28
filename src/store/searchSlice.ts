import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchOneShow, searchFetch } from './showsThun.ts';
import { RootState } from '../app/store.ts';
import { Show, ShowApi } from '../types';

interface SearchState {
  showsName: string;
  response: ShowApi[];
  searchLoading: boolean;
  oneShow: Show;
  oneShowLoading: boolean;
}

const initialState: SearchState = {
  showsName: '',
  response: [],
  searchLoading: false,
  oneShow: {
    name: '',
    image: {original: 'https://i.pinimg.com/474x/a0/a9/92/a0a9925db355875f31e85a9d4080da16.jpg'},
    summary: '',
    premiered: '',
    status: '',
  },
  oneShowLoading: false,
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
    builder.addCase(searchFetch.fulfilled, (state, action: PayloadAction<ShowApi[]>) => {
      state.searchLoading = false;
      state.response = action.payload;
    });
    builder.addCase(searchFetch.rejected, (state) => {
      state.searchLoading = false;
    });

    builder.addCase(fetchOneShow.pending, (state) => {
      state.oneShowLoading = true;
    });
    builder.addCase(fetchOneShow.fulfilled, (state, action: PayloadAction<Show>) => {
      state.oneShowLoading = false;
      state.oneShow = action.payload;
      state.response = [];
      state.showsName = (action.payload).name;
      state.oneShow.image = state.oneShow.image ?? initialState.oneShow.image;
    });
    builder.addCase(fetchOneShow.rejected, (state) => {
      state.oneShowLoading = false;
    })
  }
})

export const { setQuery } = searchSlice.actions;
export const searchShowName = (state: RootState) => state.search.showsName;
export const showsArr = (state: RootState) => state.search.response;
export const oneShowLoading = (state: RootState) => state.search.oneShowLoading;
export const oneShow = (state: RootState) => state.search.oneShow;
export const searchReducer = searchSlice.reducer;