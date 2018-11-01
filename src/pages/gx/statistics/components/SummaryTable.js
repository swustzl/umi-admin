import React from 'react';
import classNames from 'classnames';
import {Icon, Row, Col, Input} from 'antd';
import styles from './SummaryTable.less'
import PopoverSpan from "components/PopoverSpan";

const Search = Input.Search;
export default class SummaryTable extends React.Component{
  render(){
    const { className, title, data = [], config, searchVisible = false, onSearch  } = this.props;
    const { serialNumber = {}, columns = [] } = config;
    return(
      <div className={classNames(styles.main, className)}>
        <div className={styles.table_title}>
          <div className={styles.left}>
            <div className={styles.line}/>
            <span>{title}</span>
          </div>
          <div className={styles.right}>
            {
              searchVisible && <Search placeholder={'输入关键词搜索'} className={styles.search} onSearch={onSearch}/>
            }
            <div className={styles.more}>
              <span>更多</span>
              <Icon type="right" theme="outlined" />
            </div>
          </div>
        </div>
        <div className={styles.table_content}>
          <Row className={styles.header}>
            {serialNumber.show && <Col span={serialNumber.span}/>}
            {
              columns.map((col, index) => {
                return(<Col key={index} span={col.span} offset={col.offset}>{col.label}</Col>)
              })
            }
          </Row>
          <div className={styles.line}/>
          {
            data.map((item, index)=>{
              let style={}
              if(index % 2 === 0){
                style.backgroundColor = 'rgba(238, 238, 238, 0.4)';
              }
              return(
                <Row key={index} className={styles.item} style={style}>
                  {serialNumber.show && <Col span={serialNumber.span}>{index+1}</Col>}
                  {
                    columns.map((col, inx) => {
                      return(<Col key={inx} span={col.span} offset={col.offset}>
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
  }
}

