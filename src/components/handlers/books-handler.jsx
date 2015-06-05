'use strict';

import React from 'react';
import Container from 'worsley/container';
import Books from '../books';

class BooksHandler extends React.Component {

  render() {
    return (
      <Container flux={this.props.flux}
                 stores={['BooksStore']}
                 actions={['BooksActions']}>
        <Books />
      </Container>
    );
  }
}

export default BooksHandler;
