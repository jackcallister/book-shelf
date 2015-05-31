'use strict';

import BooksActions from '../../src/actions/books-actions';
import BooksStore from '../../src/stores/books-store';
import BooksWebUtils from '../../src/web-utils/books-web-utils';
import TestUtils from 'worsley/test-utils';
import assert from 'assert';
import sinon from 'sinon';

describe('BooksActions', () => {
  const book = { id: 1, title: 'Test Title' };
  let booksActions;
  let booksStore;

  beforeEach(() => {
    booksActions = new BooksActions(TestUtils.worsley);
    booksStore = new BooksStore(TestUtils.worsley, booksActions);
  });

  describe('#addBook', () => {

    it('adds the payload to registered stores', () => {
      booksActions.addBook(book);
      assert.deepEqual(booksStore.state.books, [book]);
    });
  });
});
