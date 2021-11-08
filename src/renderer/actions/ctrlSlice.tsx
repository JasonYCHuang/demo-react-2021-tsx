import { createSlice } from '@reduxjs/toolkit';
import { TypCtrlState } from '../types/ctrl';

export const ctrlSlice = createSlice({
  name: 'ctrl',
  initialState: {
    isSemiAutoSelect: false,
    isMagnify: false,
  } as TypCtrlState,
  reducers: {
    toggleSemiAutoSelect: (state) => {
      state.isSemiAutoSelect = !state.isSemiAutoSelect;
      state.isMagnify = false;
    },
    toggleMagnifty: (state) => {
      state.isSemiAutoSelect = false;
      state.isMagnify = !state.isMagnify;
    },
  },
});

export const { toggleSemiAutoSelect, toggleMagnifty } = ctrlSlice.actions;

export default ctrlSlice.reducer;
