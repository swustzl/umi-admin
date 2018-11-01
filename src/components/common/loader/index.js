import React from 'react';
import classNames from 'classnames';
import styles from './index.less';

const Loader = ({ spinning }) => {
  return (<div className={classNames(styles.loader, { [styles.hidden]: !spinning })}>
    <div className={styles.warpper}>
      <div className={styles.inner} />
      <div className={styles.text}>正在加载</div>
    </div>
  </div>);
};

export default Loader;
