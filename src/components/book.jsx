'use strict';

import React from 'react';
import { Link } from 'react-router';
import styles from '../styles/book.less';

class Book extends React.Component {

  render () {
    return (
      <li>
        <Link to='books'>MyLink</Link>
        <p className={styles.header}>{this.props.title}</p>
        <img src={'http://covers.openlibrary.org/b/isbn/' + this.props.isbn + '-M.jpg'} />
      </li>
    );
  }
}

export default Book;
