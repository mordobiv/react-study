import React, { useState, useEffect } from 'react';
import Img from '../img/img';
import styles from './tile.module.scss';
import NodeType from '../../types/node';
import Modal from '../../components/modal/modal';

export default function Tile(props: { node: NodeType; setIsModalOpen: any }) {
  const { node, setIsModalOpen } = props;
  const mainIconPath = '/src/assets/img/';

  const date = new Date(node.created);
  const dateDay = `
    ${date.getDay()} 
    ${date.toLocaleString('default', {
      month: 'short',
    })}
    ${date.getFullYear()}`;

  return (
    <div key={node.id} className={styles.tile} onClick={() => setIsModalOpen(node)}>
      <p className={styles.tile__name}>{node.name}</p>
      <div className={styles.images}>
        <Img
          src={`${mainIconPath}isAlive/${node.status.toLowerCase()}.svg`}
          className="images_status"
        />
        <Img src={node.image} className="images_photo" />
        <Img
          src={`${mainIconPath}gender/${node.gender.toLowerCase()}.svg`}
          className="images_gender"
        />
      </div>
      <div className={styles.info}>
        <p className={styles.info__species}>{node.species}</p>
        <p className={styles.info__date}>{dateDay}</p>
      </div>
    </div>
  );
}
