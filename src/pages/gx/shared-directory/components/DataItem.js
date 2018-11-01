import React from 'react';
import classNames from 'classnames';
import {Icon, Row, Col} from 'antd';
import styles from './DataItem.less'

const DataItem = ({ className, title, data = {}, config, titleRightRender = () => {}, style, valueColor = '#0068b7'}) => {
  const { rows = [], label } = config
  return(
    <div className={classNames(styles.main, className)} style={style}>
      <div className={styles.form_title}>
        <div className={styles.left}>
          <div className={styles.line}/>
          <div className={styles.title}>{title}</div>
        </div>
        <div>{titleRightRender()}</div>
      </div>
      <div className={styles.form_content}>
        {
          rows.map((row, index) => {
            return(
              <Row key={index} className={classNames(styles.item, index % 2 === 0 ? styles.dark : styles.light)}>
                <Col span={label.span || 4} className={styles.form_label}>{row.label}</Col>
                <Col span={row.span} className={styles.form_value} style={{color: valueColor}} offset={row.offset}>
                  {
                    row.render ? row.render(data[row.key]) : data[row.key]
                  }
                </Col>
              </Row>
            )
          })
        }
      </div>
    </div>
  )
};

export default DataItem
