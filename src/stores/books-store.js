'use strict';

import { Store } from 'worsley';

class BooksStore extends Store {

  constructor(flux, BooksActions) {
    super(flux);

    this.setInitialState({
      books: [],
      loading: true
    });

    this.registerActionHandler(
      BooksActions.constants.addBook,
      this.addBook
    );

    this.registerActionHandler(
      BooksActions.constants.beginLoadingBooks,
      this.beginLoadingBooks
    )

    this.registerActionHandler(
      BooksActions.constants.successLoadingBooks,
      this.successLoadingBooks
    )
  }

  addBook(book) {
    this.setState({
      books: this.state.books.concat(book)
    });
  }

  beginLoadingBooks(books) {
    this.setState({
      loading: true
    })
  }

  successLoadingBooks(books) {
    this.setState({
      books: books,
      loading: false
    });
  }
}

export default BooksStore;
