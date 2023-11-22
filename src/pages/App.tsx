/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";

import { useAppSelector, useAppDispatch } from "../store/hooks";
import { Book, addBook, deleteBook } from "../store/features/books/bookSlice";
import { RootState } from "../store/store";

const BookItem = ({ book }: { book: Book }) => {
  const [show, setShow] = useState(false);
  const dispatch = useAppDispatch();

  return (
    <li
      key={book.id}
      onMouseOver={() => setShow(true)}
      onMouseOut={() => setShow(false)}
    >
      <div>
        <h1>{book.name}</h1>
        <p>Author: {book.author}</p>
      </div>
      {show && (
        <button
          onClick={() => dispatch(deleteBook(book.id))}
          className="delete"
        >
          <p>X</p>
        </button>
      )}
    </li>
  );
};

const BookList = () => {
  const books = useAppSelector((state: RootState) => state.books.value);
  console.log(books)
  return (
    <ul>
      {books.map((book: Book) => {
        return <BookItem book={book} key={book.id}/>;
      })}
    </ul>
  );
};

function App() {
  const dispatch = useAppDispatch();

  const handleAddBook = (e: any) => {
    e.preventDefault();
    const formdata = new FormData(e.target);
    const book = {
      id: nanoid(),
      name: formdata.get("name") as string,
      author: formdata.get("author") as string,
    };
    dispatch(addBook(book));
    e.target.reset();
  };

  return (
    <>
      <h1>React redux toolkit</h1>
      <form onSubmit={handleAddBook}>
        <input required name="name" placeholder="Enter Book Name" />
        <input required name="author" placeholder="Enter Author Name" />
        <input type="submit" />
      </form>

      <BookList />
    </>
  );
}

export default App;
