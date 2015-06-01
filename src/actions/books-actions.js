'use strict';

import { Actions } from 'worsley';
import BooksWebUtils from '../web-utils/books-web-utils';

class BooksActions extends Actions {

  create(book) {
    BooksWebUtils.create(book, this);
  }

  successCreatingBook(book) {
    return book;
  }

  failureCreatingBook(error) {
    return error;
  }
}

export default BooksActions;
