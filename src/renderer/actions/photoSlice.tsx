import { createSlice } from '@reduxjs/toolkit';
import { TypPhotoState } from '../types/photo';

export const photoSlice = createSlice({
  name: 'counter',
  initialState: {
    selectedName: null,
    files: [],
    error: null,
  } as TypPhotoState,
  reducers: {
    addPhotos: (state, { payload }) => {
      state.files = payload;
    },
    rmPhoto: (state, { payload }) => {
      state.files = state.files.filter((f) => f.name !== payload);
    },
    selectPhoto: (state, { payload }) => {
      console.log(payload);
      state.selectedName = payload;
    },
  },
});

export const { addPhotos, rmPhoto, selectPhoto } = photoSlice.actions;

export default photoSlice.reducer;
