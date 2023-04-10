import React from 'react';
import styles from './error.module.scss';

export default function Error(error: { message: string }) {
  return <div className={styles.errorMessage}>{error.message}</div>;
}
