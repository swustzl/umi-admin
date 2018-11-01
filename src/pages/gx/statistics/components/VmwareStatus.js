import React from 'react';
import {Icon} from 'antd';
import classNames from 'classnames';
import styles from './VmwareStatus.less';
import Iconfont from "../../../../components/Iconfont/Iconfont";

export default class VmwareStatus extends React.Component{
  state={
    vms:[
      {status: 'online'},
      {status: 'online'},
      {status: 'online'},
      {status: 'online'},
      {status: 'online'},
      {status: 'online'},
      {status: 'online'},
      {status: 'online'},
      {status: 'online'},
      {status: 'online'},
      {status: 'online'},
      {status: 'warn'},
      {status: 'online'},
      {status: 'online'},
      {status: 'online'},
      {status: 'online'},
      {status: 'offline'},
      {status: 'online'},
      {status: 'online'},
      {status: 'online'},
      {status: 'offline'},
      {status: 'online'},
      {status: 'online'},
      {status: 'offline'},
      {status: 'online'},
      {status: 'online'},
      {status: 'online'},
      {status: 'online'},
      {status: 'online'},
      {status: 'online'},
    ],
  }
  render(){
    return(
      <div className={styles.main}>
        <div className={styles.title}>
          <div className={styles.left}>
            <div className={styles.line}/>
            <span>虚拟设备情况</span>
          </div>
          <div className={styles.right}>
            <div className={classNames(styles.rect,styles.online)}/>
            <span>在线</span>
            <div className={classNames(styles.rect,styles.offline)}/>
            <span>离线</span>
            <div className={classNames(styles.rect,styles.warn)}/>
            <span>告警</span>
            <div className={classNames(styles.rect,styles.error)}/>
            <span>故障</span>
          </div>
        </div>
        <div className={styles.status}>虚拟机状态<span>正常</span></div>
        <div className={styles.summary}>
          <div className={styles.sum_item}>共计<span>24</span></div>
          <div className={styles.sum_item}>在线<span>19</span></div>
          <div className={styles.sum_item}>故障<span>0</span></div>
          <div className={styles.sum_item}>告警<span>1</span></div>
        </div>
        <div className={styles.content}>
          {
            this.state.vms.map((item,index) => {
              let style = {};
              if(index % 10 === 0){
                style.marginLeft = 0;
              }
              if(index % 10 === 9){
                style.marginRight = 0;
              }
              return(
                <div
                  key={index}
                  className={classNames(styles.square,
                    item.status === 'online' ? styles.online :
                      (item.status === 'warn' ? styles.warn :
                        (item.status === 'offline' ? styles.offline : styles.error)))}
                  style={style}
                />
              )
            })
          }
        </div>
        <div className={styles.warn_log}><Iconfont type={'warn'} className={styles.warn_icon}/><span>告警日志</span></div>
        <div className={styles.log_item}>
          <span>VM_12出现网络波动_Gq1-213 node1  2018-12-12 13:21:23</span>
        </div>
        <div className={styles.log_item}>
          <span>VM_12出现网络波动_Gq1-213 node1  2018-12-12 13:21:23</span>
        </div>
      </div>
    )
  }
}
