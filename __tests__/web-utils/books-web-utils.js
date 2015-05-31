'use strict';

import BooksWebUtils from '../../src/web-utils/books-web-utils';
import BooksActions from '../../src/actions/books-actions';
import TestUtils from 'worsley/test-utils';
import sinon from 'sinon';
import assert from 'assert';

describe('BooksWebUtils', () => {
  const booksActions = new BooksActions(TestUtils.worsley);

  describe('#fetch', () => {
    const stub = sinon.stub(booksActions, 'successLoadingBooks');

    it('calls booksActions#successLoadingBooks', () => {
      BooksWebUtils.fetch({}, booksActions);

      sinon.assert.calledOnce(stub);
    });
  });
});
