import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import styles from './layout.module.scss';

export default class Layout extends React.Component {
  render() {
    return (
      <>
        <header className={styles.header}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </header>
        <Outlet />
      </>
    );
  }
}
