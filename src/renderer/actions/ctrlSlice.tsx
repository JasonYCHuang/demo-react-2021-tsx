import { createSlice } from '@reduxjs/toolkit';
import { TypCtrlState } from '../types/ctrl';

const initialState = {
  isSemiAutoSelect: false,
  isManualEdit: false,
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
    toggleManualEdit: (state) => {
      const { isManualEdit } = state;
      return {
        ...initialState,
        isManualEdit: !isManualEdit,
      };
    },
  },
});

export const { toggleSemiAutoSelect, toggleManualEdit } = ctrlSlice.actions;

export default ctrlSlice.reducer;
