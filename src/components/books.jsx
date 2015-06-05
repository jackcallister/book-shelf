'use strict';

import React from 'react';
import Book from './book';

class Books extends React.Component {

  addBook() {
    this.props.BooksActions.create({ id: 3, title: 'Sapiens' });
  }

  renderBooks() {
    return this.props.books.map((book) => {
      return (
        <Book key={book.id}
              title={book.title}
              isbn={book.isbn} />
      )
    });
  }

  render() {
    const books = this.renderBooks();

    return (
      <div>
        <ul>
          {books}
        </ul>
        <span onClick={e => this.addBook(e)}>Add a book</span>
      </div>
    );
  }
}

export default Books;
