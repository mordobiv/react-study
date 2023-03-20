import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styles from './layout.module.scss';

export default class Layout extends React.Component {
  render() {
    return (
      <>
        <header className={styles.header}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
        </header>
        <Outlet />
      </>
    );
  }
}
