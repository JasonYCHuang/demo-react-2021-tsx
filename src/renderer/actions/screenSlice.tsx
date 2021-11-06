import { createSlice } from '@reduxjs/toolkit';
import { TypScreenState } from '../types/screen';

export const screenSlice = createSlice({
  name: 'screen',
  initialState: {
    imgW: 600,
    imgH: 450,
  } as TypScreenState,
  reducers: {
    writeSelectedImageDim: (state, { payload }) => {
      // eslint-disable-next-line no-param-reassign
      state = { ...state, ...payload };
      console.log(state);
    },
  },
});

export const { writeSelectedImageDim } = screenSlice.actions;

export default screenSlice.reducer;
