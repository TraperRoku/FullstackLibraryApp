import React, { useState, useEffect } from 'react';
import './App.css';
import ButtonComponent from './Component/ButtonComponent';
import api from './httpConfiguration';
import './Component/Button.css';

function App() {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState({ title: '', author: '', rating: '' });
  const [updatedBook, setUpdatedBook] = useState({ id: '', title: '', author: '', rating: '' });
  const [deleteBookId, setDeleteBookId] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [showDeleteForm, setShowDeleteForm] = useState(false);

  useEffect(() => {
    getAllBooks();
  }, []);

  const getAllBooks = async () => {
    try {
      const response = await api.get("/books/");
      setBooks(response.data);
    } catch (error) {
      console.error("Error while fetching books:", error);
    }
  };

  const handleAddBook = async () => {
    try {
      const response = await api.post("/books", newBook);
      getAllBooks();
      setShowAddForm(false);
    } catch (error) {
      console.error("Error while adding a new book:", error);
    }
  };

  const handleUpdateBook = async () => {
    try {
      const response = await api.patch(`/books/${updatedBook.id}`, updatedBook);
      getAllBooks();
      setShowUpdateForm(false);
    } catch (error) {
      console.error("Error while updating book with ID", updatedBook.id, ":", error);
    }
  };

  const handleDeleteBook = async () => {
    try {
      const response = await api.delete(`/books/${deleteBookId}`);
      getAllBooks();
      setShowDeleteForm(false);
    } catch (error) {
      console.error("Error while deleting book with ID", deleteBookId, ":", error);
    }
  };

  const handleShowAddForm = () => {
    setShowAddForm(true);
    setShowUpdateForm(false);
    setShowDeleteForm(false);
  };

  const handleShowUpdateForm = () => {
    setShowUpdateForm(true);
    setShowAddForm(false);
    setShowDeleteForm(false);
  };

  const handleShowDeleteForm = () => {
    setShowDeleteForm(true);
    setShowAddForm(false);
    setShowUpdateForm(false);
  };

  return (
    <div className="App">
      <ButtonComponent onClickHandler={handleShowAddForm} buttonText="Add a new book" />
      <ButtonComponent onClickHandler={handleShowUpdateForm} buttonText="Update a book" />
      <ButtonComponent onClickHandler={handleShowDeleteForm} buttonText="Delete a book" />

      {showAddForm && (
        <form onSubmit={handleAddBook}>
          <input type="text" placeholder="Title" value={newBook.title} onChange={(e) => setNewBook({ ...newBook, title: e.target.value })} />
          <input type="text" placeholder="Author" value={newBook.author} onChange={(e) => setNewBook({ ...newBook, author: e.target.value })} />
          <input type="number" placeholder="Rating" value={newBook.rating} onChange={(e) => setNewBook({ ...newBook, rating: e.target.value })} />
          <button type="submit">Add new book</button>
        </form>
      )}

      {showUpdateForm && (
        <form onSubmit={handleUpdateBook}>
          <input type="text" placeholder="ID of the book to update" value={updatedBook.id} onChange={(e) => setUpdatedBook({ ...updatedBook, id: e.target.value })} />
          <input type="text" placeholder="New title" value={updatedBook.title} onChange={(e) => setUpdatedBook({ ...updatedBook, title: e.target.value })} />
          <input type="text" placeholder="New author" value={updatedBook.author} onChange={(e) => setUpdatedBook({ ...updatedBook, author: e.target.value })} />
          <input type="number" placeholder="New rating" value={updatedBook.rating} onChange={(e) => setUpdatedBook({ ...updatedBook, rating: e.target.value })} />
          <button type="submit">Update book</button>
        </form>
      )}

      {showDeleteForm && (
        <form onSubmit={handleDeleteBook}>
          <input type="text" placeholder="ID of the book to delete" value={deleteBookId} onChange={(e) => setDeleteBookId(e.target.value)} />
          <button type="submit">Delete book</button>
        </form>
      )}

      <ul>
        {books.map(book => (
          <h2 key={book.id}>{"ID: " + book.id} - {"Title: " + book.title} - {"Author: " + book.author} - {"Rating: " + book.rating}</h2>
        ))}
      </ul>
    </div>
  );
}

export default App;
