'use strict';

import React from 'react';
import { Route, DefaultRoute } from 'react-router';
import AppHandler from './components/handlers/app-handler';
import BooksHandler from './components/handlers/books-handler';

const Routes = (
  <Route name="root" path="/" handler={AppHandler}>
    <Route name="books" path="books" handler={BooksHandler} />
    <DefaultRoute handler={BooksHandler} />
  </Route>
);

export default Routes;
