import React from 'react';
import classNames from 'classnames';
import {Icon, Row, Col} from 'antd';
import styles from './DataTable.less'
import PopoverSpan from "components/PopoverSpan";

const DataTable = ({ className, title, data = [], config, titleRightRender = () => {}}) => {
  const { serialNumber = {}, columns = [] } = config
  return(
    <div className={classNames(styles.main, className)}>
      <div className={styles.table_title}>
        <div className={styles.left}>
          <div className={styles.line}/>
          <span>{title}</span>
        </div>
        <div>{titleRightRender()}</div>
      </div>
      <div className={styles.table_content}>
        <Row className={styles.header}>
          {serialNumber.show && <Col span={serialNumber.span}>序号</Col>}
          {
            columns.map((col, index) => {
              return(<Col key={index} span={col.span} offset={col.offset}>{col.label}</Col>)
            })
          }
        </Row>
        {
          data.map((item, index)=>{
            let style={}
            if(index % 2 !== 0){
              style.backgroundColor = 'rgba(238, 238, 238, 0.4)';
            }
            return(
              <Row key={index} className={styles.item} style={style}>
                {serialNumber.show && <Col span={serialNumber.span}>{index+1}</Col>}
                {
                  columns.map((col, inx) => {
                    return(
                      <Col key={inx} span={col.span} offset={col.offset}>
                      {
                        col.render ? col.render(item) : <PopoverSpan data={item[col.key]}/>
                      }
                      </Col>)
                  })
                }
              </Row>
            )
          })
        }
      </div>
    </div>
  )
};

export default DataTable
