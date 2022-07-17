import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'reducers';

export type CoreUiState = {
  mode: string;
};

export const coreUiSlice = createSlice({
  name: 'coreUi',
  initialState: {
    mode: 'light',
  } as CoreUiState,
  reducers: {
    updateDarkmode(state, action) {
      state.mode = action.payload;
      localStorage.setItem('mode', action.payload);
    },
  },
});

export const { updateDarkmode } = coreUiSlice.actions;

export const coreUiSelector = ({ coreUi }: RootState) => coreUi;

export default coreUiSlice.reducer;
