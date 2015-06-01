'use strict';

import { Store } from 'worsley';

class BooksStore extends Store {

  constructor(flux, BooksActions) {
    super(flux);

    this.setInitialState({
      books: [],
      loading: true,
      error: null
    });

    const actions = BooksActions.constants;

    this.registerActionHandlers({
      beginCreatingBook: actions.create,
      successCreatingBook: actions.successCreatingBook,
      failureCreatingBook: actions.failureCreatingBook
    });
  }

  beginCreatingBook() {
    this.setState({
      loading: true
    });
  }

  successCreatingBook(books) {
    this.setState({
      loading: false,
      books: this.state.books.concat(books)
    })
  }

  failureCreatingBook(error) {
    this.setState({
      loading: false,
      error: error
    });
  }
}

export default BooksStore;
