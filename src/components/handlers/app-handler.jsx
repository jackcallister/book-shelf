'use strict';

import globals from '../../styles/globals.css';

import React from 'react';
import { RouteHandler, Link } from 'react-router';
import Header from '../header';

class App extends React.Component {

  render() {
    return (
      <main>
        <Header />
        <Link to='books'>Book path</Link>
        <RouteHandler {...this.props} />
      </main>
    );
  }
}

export default App;
