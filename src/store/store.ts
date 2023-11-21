import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./features/books/bookSlice";
import { loadState, saveState } from "./browserStorage";

export const store = configureStore({
  reducer: {
    books: booksReducer
  },
  preloadedState: loadState(),
})

store.subscribe(() => saveState(store.getState()))

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch