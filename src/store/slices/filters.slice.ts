import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { http } from '@/http/http';

export const axiosCountries = createAsyncThunk('countries/axiosCountries', async (context: any) => {
    const { data: filmsData } = await http.get('/v2.2/films', { params: { page: context.query.page } });
    return { filmsData };
  },
);

interface IFiltersState {
  year: undefined | string;
  countries: number[],
  genres: string[]
}

const initialState: IFiltersState = {
  year: undefined,
  countries: [],
  genres: [],
};

const filtersSlice = createSlice({
  name: 'filtersSlice',
  initialState,
  reducers: {
    selectCountry(state, action) {
      state.countries;
    },
  },
});
export const { selectCountry } = filtersSlice.actions;
export default filtersSlice;