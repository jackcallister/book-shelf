'use strict';

import React from 'react';
import styles from '../styles/header.less';

class Header extends React.Component {

  render () {
    return (
      <header className={styles.header}>
        <p className={styles.foo}>Book Shelf!</p>
      </header>
    )
  }
}

export default Header;
