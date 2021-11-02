import { createSlice } from '@reduxjs/toolkit';
import { incrementByTwo, decrementByTwo } from '../apis/counter';
import { TypCounterState } from "../types/counter";

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        status: 'idle',
        error: null,
        value: 0,
    } as TypCounterState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
    },
    extraReducers: (builder) => {
        // incrementByTwo
        builder.addCase(incrementByTwo.pending, (state) => {
            state.status = 'loading';
            state.error = null;
        });
        builder.addCase(incrementByTwo.fulfilled, (state, { payload }) => {
            state.status = 'idle';
            state.value = payload.value;
        });
        builder.addCase(incrementByTwo.rejected, (state) => {
          state.error = 'Err >> incrementByTwo';
          state.status = 'idle';
        });
        // decrementByTwo
        builder.addCase(decrementByTwo.pending, (state) => {
            state.status = 'loading';
            state.error = null;
        });
        builder.addCase(decrementByTwo.fulfilled, (state, { payload }) => {
            state.status = 'idle';
            state.value = payload.value;
        });
        builder.addCase(decrementByTwo.rejected, (state) => {
          state.error = 'Err >> decrementByTwo';
          state.status = 'idle';
        });
    },
})

export const { increment, decrement } = counterSlice.actions

export default counterSlice.reducer