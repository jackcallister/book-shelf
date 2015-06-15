'use strict';

import React from 'react';
import Router from 'react-router';
import styles from '../styles/book.less';

const Link = Router.Link;

class Book extends React.Component {

  render () {
    return (
      <li>
        <p className={styles.header}>{this.props.title}</p>
        <Link to="books">Books path</Link>
        <img src={'http://covers.openlibrary.org/b/isbn/' + this.props.isbn + '-M.jpg'} />
      </li>
    );
  }
}

export default Book;
