'use strict';

import { Worsley } from 'worsley';

import BooksActions from './actions/books-actions';
import BooksStore from './stores/books-store';

class Flux extends Worsley {
  constructor() {
    super();

    this.actions.BooksActions = new BooksActions(this);
    this.stores.BooksStore = new BooksStore(this, this.actions.BooksActions);
  }
}

export default Flux;
