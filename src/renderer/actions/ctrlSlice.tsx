import { createSlice } from '@reduxjs/toolkit';
import { TypCtrlState } from '../types/ctrl';

const initialState = {
  isFullAutoInfer: false,
  isSave: false,
  isCreateExcel: false,
  isSemiAutoSelect: false,
  isMagnify: false,
  isManual: false,
};

export const ctrlSlice = createSlice({
  name: 'ctrl',
  initialState: initialState as TypCtrlState,
  reducers: {
    toggleSemiAutoSelect: (state) => {
      const { isSemiAutoSelect } = state;
      return {
        ...initialState,
        isSemiAutoSelect: !isSemiAutoSelect,
      };
    },
    toggleMagnifty: (state) => {
      const { isMagnify } = state;
      return {
        ...initialState,
        isMagnify: !isMagnify,
      };
    },
  },
});

export const { toggleSemiAutoSelect, toggleMagnifty } = ctrlSlice.actions;

export default ctrlSlice.reducer;
