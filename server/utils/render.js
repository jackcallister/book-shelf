import React from 'react';
import Router from 'react-router';
import Flux from '../../src/flux';
import routes from '../../src/routes.jsx';

function render(res, data, path) {
  const flux = new Flux();

  flux.load(data);

  const payload = JSON.stringify(flux.backup());

  Router.run(routes, path, (Handler) => {
    const handlerFactory = React.createFactory(Handler);
    const html = React.renderToString(handlerFactory({flux: flux}));
    const payload = flux.backup();

    res.render('index', { html: html, payload: payload });
  });
}

module.exports = render;
