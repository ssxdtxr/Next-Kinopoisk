import { configureStore } from '@reduxjs/toolkit';
import filtersSlice from '@/store/slices/filters.slice';

const store = configureStore({
  reducer: { filters: filtersSlice },
});
export type RootState = ReturnType<typeof store.getState>

export default store;