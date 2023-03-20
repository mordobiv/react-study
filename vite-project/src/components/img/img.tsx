import React from 'react';
import styles from '../tile/tile.module.scss';

type ImgType = {
  src: string;
  className: string;
};

export default class Img extends React.Component<ImgType> {
  render() {
    const { src, className } = this.props;
    return (
      <div className={styles[className]}>
        <img src={src} alt={`${className}__img`} className={styles[`${className}__img`]} />
      </div>
    );
  }
}
