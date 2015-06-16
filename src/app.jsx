'use strict';

import React from 'react';
import Router from 'react-router';
import routes from './routes';

// Worsley is importing react twice!
// import Flux from './flux';
// const flux = new Flux();
// flux.load(window.Payload);

document.addEventListener('DOMContentLoaded', () =>
  Router.run(routes, Router.HistoryLocation, (Handler) =>
    React.render(<Handler />, document.getElementById('app'))
  )
);
