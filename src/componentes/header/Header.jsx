import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link className={styles.logo} to='/'>ONE Community</Link>
        <div className={styles.navLink}>
          <Link to="/">Home</Link>
          <Link to="admin">Admin</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
