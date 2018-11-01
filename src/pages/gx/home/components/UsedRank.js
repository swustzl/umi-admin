import React from 'react';
import classNames from 'classnames';
import styles from './UsedRank.less'

const UsedRank = ({ className, title, data = [], config = {}, limitNum = 10 }) => {
  data = data.filter((d, i) => i < limitNum);
  const { columns = [] } = config;
  let code = 9312;
  return(
    <div className={classNames(styles.main, className)}>
      <div className={styles.t_header}>{title}</div>
      <div className={styles.t_body}>
        <div className={styles.item} style={{backgroundColor: '#f6f6f6'}}>
          <div className={styles.item1} style={{justifyContent: 'center', alignItems: 'center', padding: 0}}>{columns[0].label}</div>
          <div className={styles.item2}>{columns[1].label}</div>
        </div>
        {
          data.map((item, index) => {
            return(
              <div key={index} className={styles.item}>
                <div className={styles.item1}><div className={classNames(styles.quan, index+1>=10 && styles.shrink)}>{index+1}</div>{item[columns[0].key]}</div>
                <div className={styles.item2}>{item[columns[1].key]}</div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
};

export default UsedRank
