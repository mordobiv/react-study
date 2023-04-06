import React from 'react';
import styles from './spinner.module.scss';

export default function Spinner() {
  return (
    <div className={styles.spinner}>
      <div className={`${styles.el} ${styles.el__small}`}></div>
      <div className={`${styles.el} ${styles.el__medium}`}></div>
      <div className={`${styles.el} ${styles.el__large}`}></div>
    </div>
  );
}
