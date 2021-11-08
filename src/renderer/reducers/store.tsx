import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../actions/counterSlice';
import photoReducer from '../actions/photoSlice';
import screenReducer from '../actions/screenSlice';
import ctrlReducer from '../actions/ctrlSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    photo: photoReducer,
    screen: screenReducer,
    ctrl: ctrlReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
