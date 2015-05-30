'use strict';

import { Actions } from 'worsley';
import BooksWebUtils from '../web-utils/books-web-utils';

class BooksActions extends Actions {

  addBook(book) {
    return book;
  }

  beginLoadingBooks() {
    BooksWebUtils.fetch({}, this);
  }

  successLoadingBooks(books) {
    return books;
  }
}

export default BooksActions;
