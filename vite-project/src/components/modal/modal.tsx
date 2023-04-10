import React from 'react';
import CardItem from '../card-item/index';
import Img from '../../components/img/img';
import styles from './modal.module.scss';
import NodeType from '../../types/node';

function Modal({ handleClose, data }: { handleClose: () => void; data: NodeType }) {
  return (
    <div className={styles['modal-container']} onClick={handleClose}>
      <div className={styles.modal}>
        <div className={styles.text}>
          <CardItem label={'name'} data={data.name} />
          <CardItem label={'status'} data={data.status} />
          <CardItem label={'species'} data={data.species} />
          <CardItem label={'type'} data={data.type} />
          <CardItem label={'gender'} data={data.gender} />
          {data.origin && <CardItem label={'origin'} data={data.origin.name} />}
          {data.location && <CardItem label={'location'} data={data.location.name} />}
          <CardItem label={'url'} data={data.url} />
          <CardItem label={'created'} data={data.created} />
          <CardItem label={'episodes'} data={data.episode.length} />
        </div>
        <Img src={data.image} className={'images_photo'} />
      </div>
    </div>
  );
}

export default Modal;
