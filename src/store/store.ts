import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./features/books/bookSlice";
import { loadState, saveState } from "./browserStorage";
import { pokemonApi } from "../services/pokemon";

export const store = configureStore({
  reducer: {
    books: booksReducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(pokemonApi.middleware),
  preloadedState: loadState(),
})



store.subscribe(() => saveState({ books: store.getState().books }));

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch