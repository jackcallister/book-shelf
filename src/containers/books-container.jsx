'use strict';

import React from 'react';
import Container from 'worsley/container';
import Books from '../components/books';

class BooksContainer extends React.Component {

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

export default BooksContainer;
