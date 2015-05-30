'use strict';

import React from 'react';
import { Route, DefaultRoute } from 'react-router';
import App from './components/app';
import Books from './containers/books-container';

const Routes = (
  <Route name="root" path="/" handler={App}>
    <Route name="books" path="books" handler={Books} />
    <DefaultRoute handler={Books} />
  </Route>
);

export default Routes;
