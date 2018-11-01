import React from 'react';
import { connect } from 'dva';
import classNames from 'classnames';
import styles from './layout.less';

@connect()
export default class ServiceGuide extends React.Component{
  componentDidMount() {
    document.getElementById('main') && document.getElementById('main').addEventListener('scroll', this.handleScroll);
  }
  handleScroll = (event) => {
    if (document.getElementById('service_guide')) {
      if(event.target.scrollTop > 500) {
        document.getElementById('service_guide').className = classNames(styles.service_guide,styles.slideToDownAnimation);
      } else {
        document.getElementById('service_guide').className = classNames(styles.service_guide,styles.slideToUpAnimation);
      }
    }
  };
  render(){
    return(
      <div id={'service_guide'} className={classNames(styles.service_guide,styles.slideToUpAnimation)}>
        <div className={styles.item}>
          <img src={'/assets/icon/咨询.png'}/>
          <span>咨询建议</span>
        </div>
        <div className={styles.item}>
          <img src={'/assets/icon/使用说明.png'}/>
          <span>使用说明</span>
        </div>
        <div className={styles.item}>
          <img src={'/assets/icon/操作手册.png'}/>
          <span>操作手册</span>
        </div>
        <div className={styles.item}>
          <img src={'/assets/icon/开发文档.png'}/>
          <span>开发文档</span>
        </div>
      </div>
    )
  }
}
