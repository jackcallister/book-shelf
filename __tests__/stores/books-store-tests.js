'use strict';

import BooksStore from '../../src/stores/books-store';
import TestUtils from 'worsley/test-utils';
import assert from 'assert';

describe('BooksStore', () => {
  const book = { id: 1, title: 'Test Title' };
  const payload = [book];
  let bookStore;

  beforeEach(() => {
    bookStore = new BooksStore(TestUtils.worsley, TestUtils.actions);
  });

  describe('#addBook', () => {

    it('adds a book to the state', () => {
      bookStore.addBook(book);
      assert.deepEqual(bookStore.state.books, payload);
    });
  });

  describe('#beginLoadingBooks', () => {

    it('sets loading to true', () => {
      bookStore.beginLoadingBooks();
      assert.ok(bookStore.state.loading);
    });
  });

  describe('#successLoadingBooks', () => {

    it('sets loading to false', () => {
      bookStore.successLoadingBooks(payload);
      assert.equal(bookStore.state.loading, false);
    });

    it('sets books to the payload', () => {
      bookStore.successLoadingBooks(payload);
      assert.deepEqual(bookStore.state.books, payload);
    });
  });
});
