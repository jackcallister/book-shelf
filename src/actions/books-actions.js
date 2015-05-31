'use strict';

import { Actions } from 'worsley';
import BooksWebUtils from '../web-utils/books-web-utils';

class BooksActions extends Actions {

  addBook(book) {
    return book;
  }

  beginLoadingBooks(query) {
    BooksWebUtils.fetch(query, this);
  }

  successLoadingBooks(books) {
    return books;
  }

  failureLoadingBooks(error) {
    return error;
  }
}

export default BooksActions;
