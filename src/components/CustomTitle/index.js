import React from 'react';
import styles from './index.less';

const CustomTitle = ({ title }) => {
  return (
    <div className={styles.header}>
      <div className={styles.tu_1}/>
      <div className={styles.tu_2}/>
      <div className={styles.tu_3}/>
      <div className={styles.title}>{title}</div>
    </div>
  )
};

export default CustomTitle;
