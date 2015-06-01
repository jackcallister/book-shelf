'use strict';

import React from 'react';
import Book from './book';

class Books extends React.Component {

  _addBook() {
    this.props.BooksActions.create({ id: 3, title: 'Sapiens' });
  }

  renderBooks() {
    return this.props.books.map((book) => {
      return <Book key={book.id} title={book.title} />;
    });
  }

  render() {
    const books = this.renderBooks();

    return (
      <div>
        <ul>
          {books}
        </ul>
        <span onClick={e => this._addBook(e)}>Add a book</span>
      </div>
    );
  }
}

export default Books;
