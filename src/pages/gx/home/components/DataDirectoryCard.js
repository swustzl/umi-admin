import React from 'react';
import {Popover} from 'antd';
import classNames from 'classnames';
import styles from './DataDirectoryCard.less';

export default class DataDirectoryCard extends React.Component{
  render(){
    const { className, color = '#6ec0ff', style = {}, data = {}, ...props } = this.props;
    let outStyle = {
      ...style,
      borderColor: color,
    };
    return(
      <div className={classNames(styles.main, className)} style={outStyle} {...props}>
        <div className={styles.header} style={{ backgroundColor: color }}>
          <Popover content={data.name} overlayStyle={{maxWidth:"400px"}} getPopupContainer={trigger => trigger.parentNode}>
            <div className={styles.span}>{data.name} </div>
          </Popover>
          <div className={styles.icon}/>
        </div>
        <div className={styles.content}>
          <div className={styles.item}><span>来源： {data.source}</span></div>
          <div className={styles.item}><span>数据量： {data.data}条</span></div>
          <div className={styles.item}><span>发布时间： {data.publishTime}</span></div>
        </div>
      </div>
    )
  }
}
