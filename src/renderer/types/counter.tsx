export type TypCounter = {
  value: number;
};

export type TypCounterState = {
  status: 'loading' | 'idle';
  error: string | null;
  value: number;
};

export type TypCounterErr = {
  message: string;
};
