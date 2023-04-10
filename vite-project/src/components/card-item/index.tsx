import React from 'react';
import styles from './card-item.module.scss';

export default function CardItem({
  label,
  data,
}: {
  label: string | number;
  data: string | number;
}) {
  return (
    <div>
      <span className={styles.modal_label}>{label}: </span>
      <span>{data || 'unknown'}</span>
    </div>
  );
}
