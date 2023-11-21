import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type Book = {
  id: string;
  name: string;
  author: string;
}

export interface BookState {
  value: Book[]
}

export const initialState: BookState = {
  value: []
}

export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    addBook: (state, action: PayloadAction<Book>) => {
      state.value = [...state.value, action.payload]
    },
    deleteBook: (state, action: PayloadAction<string>) => {
      state.value = state.value.filter((book: Book) => {
        return book.id !== action.payload;
      })
    }
  }
})


export const { addBook, deleteBook } = bookSlice.actions;

export default bookSlice.reducer


