import { createSlice } from '@reduxjs/toolkit';

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
    changeYear(state, action) {
      console.log(action);
      state.year = action.payload;
    },
  },
});
export const { changeYear } = filtersSlice.actions;
export default filtersSlice.reducer;