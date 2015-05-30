'use strict';

import React from 'react';

class Book extends React.Component {

  render () {
    return (
      <li>
        {this.props.title}
      </li>
    );
  }
}

export default Book;
