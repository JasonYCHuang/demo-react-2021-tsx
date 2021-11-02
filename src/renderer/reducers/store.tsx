import { combineReducers, configureStore } from '@reduxjs/toolkit'
import type { PreloadedState } from '@reduxjs/toolkit'

import { calculatorApi } from '../services/calculator'
import counterReducer from '../actions/counterSlice'

const rootReducer = combineReducers({
    [calculatorApi.reducerPath]: calculatorApi.reducer,
    counter: counterReducer,
})


export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
    return configureStore({
      reducer: rootReducer,
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([
            calculatorApi.middleware,
        ]),
      preloadedState,
    })
  }


export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
