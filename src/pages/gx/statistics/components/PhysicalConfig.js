import React from 'react';
import styles from './PhysicalConfig.less';
import Battery from "components/Battery/index";

export default class PhysicalConfig extends React.Component{
  state={
  }
  render(){
    return(
      <div className={styles.main}>
        <div className={styles.title}>
          <div className={styles.left}>
            <div className={styles.line}/>
            <span>物理资源配置</span>
          </div>
        </div>
        <div className={styles.status}>
          <div className={styles.status_item}>物理资源使用率<span>正常负荷</span></div>
          <div className={styles.status_item}>物理资源存量<span>充足</span></div>
        </div>
        <div className={styles.content}>
          <Battery
            percent={Math.round(12000/320)}
            text={'CPU'}
            renderBottom={()=>{
              return(
                <div className={styles.content_rb}>
                  <div className={styles.row}>120/<span>320</span></div>
                  <div className={styles.row}>核数</div>
                </div>
              )
            }}
          />
          <Battery
            percent={Math.round(32000/640)}
            text={'MEMORY'}
            spanStyle={{letterSpacing: '2px'}}
            renderBottom={()=>{
              return(
                <div className={styles.content_rb}>
                  <div className={styles.row}>320/<span>640</span></div>
                  <div className={styles.row}>GB</div>
                </div>
              )
            }}
          />
          <Battery
            percent={Math.round(108000/4000)}
            text={'DISK'}
            renderBottom={()=>{
              return(
                <div className={styles.content_rb}>
                  <div className={styles.row}>1080/<span>4000</span></div>
                  <div className={styles.row}>TB</div>
                </div>
              )
            }}
          />
          <Battery
            percent={20}
            text={'NET'}
            bgColor={'#4fca3f'}
            markColor={'#128603'}
            renderBottom={()=>{
              return(
                <div className={styles.content_rb}>
                  <div className={styles.row}>1000MB</div>
                  <div className={styles.row}>带宽</div>
                </div>
              )
            }}
          />
        </div>
      </div>
    )
  }
}
