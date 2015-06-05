'use strict';

import normalize from 'normalize.css';
import globals from '../../styles/globals.css';

import React from 'react';
import { RouteHandler } from 'react-router';
import Header from '../header';

class App extends React.Component {

  render() {
    return (
      <main>
        <Header />

        <RouteHandler {...this.props}/>
      </main>
    );
  }
}

export default App;
