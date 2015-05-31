'use strict';

import BooksStore from '../../src/stores/books-store';
import TestUtils from 'worsley/test-utils';
import assert from 'assert';

describe('BooksStore', () => {
  const book = { id: 1, title: 'Test Title' };
  const payload = [book];
  let booksStore;

  beforeEach(() => {
    booksStore = new BooksStore(TestUtils.worsley, TestUtils.actions);
  });

  describe('#addBook', () => {

    it('adds a book to the state', () => {
      booksStore.addBook(book);
      assert.deepEqual(booksStore.state.books, payload);
    });
  });

  describe('#beginLoadingBooks', () => {

    it('sets loading to true', () => {
      booksStore.beginLoadingBooks();
      assert.ok(booksStore.state.loading);
    });
  });

  describe('#successLoadingBooks', () => {

    it('sets loading to false', () => {
      booksStore.successLoadingBooks(payload);
      assert.equal(booksStore.state.loading, false);
    });

    it('sets books to the payload', () => {
      booksStore.successLoadingBooks(payload);
      assert.deepEqual(booksStore.state.books, payload);
    });
  });
});
