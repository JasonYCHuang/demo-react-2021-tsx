import { createAsyncThunk } from '@reduxjs/toolkit';
import { TypCounter } from '../types/counter';

export const incrementByTwo = createAsyncThunk<TypCounter, number>(
  'counter/apiIncrementByTwo',
  async (currVal: number) => {
    const rsp = await fetch('http://127.0.0.1:1013/counter/increment', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ payload: { value: currVal } }),
    });
    const data: TypCounter = await rsp.json();
    return data;
  }
);

export const decrementByTwo = createAsyncThunk<TypCounter, number>(
  'counter/apiDecrementByTwo',
  async (currVal: number) => {
    const rsp = await fetch('http://127.0.0.1:1013/counter/decrement', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ payload: { value: currVal } }),
    });
    const data: TypCounter = await rsp.json();
    return data;
  }
);
