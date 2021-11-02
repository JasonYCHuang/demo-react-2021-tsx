import { combineReducers, configureStore } from '@reduxjs/toolkit'
import type { PreloadedState } from '@reduxjs/toolkit'

import { pokemonApi } from '../services/pokemon'
import counterReducer from '../actions/counterSlice'

const rootReducer = combineReducers({
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    counter: counterReducer,
})


export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
    return configureStore({
      reducer: rootReducer,
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(pokemonApi.middleware),
      preloadedState,
    })
  }


export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
