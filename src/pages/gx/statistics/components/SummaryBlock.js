import React from 'react';
import classNames from 'classnames';
import styles from './SummaryBlock.less'

const SummaryBlock = ({ title, data = [], className}) => {
  const length = data.length;
  const itemWidth = 100 / length;
  return(
    <div className={classNames(styles.main, className)}>
      <div className={styles.block_title}>{title}</div>
      <div className={styles.block_content}>
        {
          data.map((item, index)=>{
            return(
              <div className={styles.item} style={{ width: `${itemWidth}%`}} key={index}>
                <span>{item.label}</span>
                <span>{item.value}</span>
              </div>
            )
          })
        }
      </div>
    </div>
  )
};

export default SummaryBlock
