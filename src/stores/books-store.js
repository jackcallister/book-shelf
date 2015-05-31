'use strict';

import { Store } from 'worsley';

class BooksStore extends Store {

  constructor(flux, BooksActions) {
    super(flux);

    this.setInitialState({
      books: [],
      loading: true
    });

    const actions = BooksActions.constants;

    this.registerActionHandlers({
      addBook: actions.addBook,
      beginLoadingBooks: actions.beginLoadingBooks,
      successLoadingBooks: actions.successLoadingBooks,
      failureLoadingBooks: actions.failureLoadingBooks
    });
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

  failureLoadingBooks(error) {

  }
}

export default BooksStore;
