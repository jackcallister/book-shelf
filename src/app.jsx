'use strict';

import React from 'react';
import Router from 'react-router';
import routes from './routes';
import Flux from './flux';

const flux = new Flux();

flux.actions.BooksActions.beginLoadingBooks();

document.addEventListener('DOMContentLoaded', () =>
  Router.run(routes, Router.HistoryLocation, (Handler) =>
    React.render(<Handler flux={flux} />, document.getElementById('app'))
  )
);
