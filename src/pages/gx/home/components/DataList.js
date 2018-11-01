import React from 'react';
import classNames from 'classnames';
import {Row, Col} from 'antd';
import styles from './DataList.less'
import PopoverSpan from "components/PopoverSpan";

const DataList = ({ className, title, data = [], showLimit = 5, config, titleRightRender = () => {}}) => {
  const { serialNumber = {}, columns = [] } = config;
  let showData = data.length > showLimit ? data.filter((d, index) => index < 5) : data;
  return(
    <div className={classNames(styles.main, className)}>
      <div className={styles.table_title}>
        <div className={styles.left}>
          <span>{title}</span>
        </div>
        <div className={styles.right}>{titleRightRender()}</div>
      </div>
      <div className={styles.table_content}>
        {/*<Row className={styles.header}>
          {serialNumber.show && <Col span={serialNumber.span}>序号</Col>}
          {
            columns.map((col, index) => {
              return(<Col key={index} span={col.span} offset={col.offset}>{col.label}</Col>)
            })
          }
        </Row>*/}
        {
          showData.map((item, index)=>{
            let style={}
            /*if(index % 2 !== 0){
              style.backgroundColor = 'rgba(238, 238, 238, 0.4)';
            }*/
            return(
              <Row key={index} className={styles.item} style={style}>
                {serialNumber.show && <Col span={serialNumber.span}>{index+1}</Col>}
                {
                  columns.map((col, inx) => {
                    return(
                      <Col key={inx} span={col.span} offset={col.offset} className={styles.defaultCol}>
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
      <div className={styles.more}>更多</div>
    </div>
  )
};

export default DataList
