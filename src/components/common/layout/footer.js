import React, { Component } from 'react';
import { Dropdown, Menu, Icon } from 'antd';
import { connect } from 'dva';
import Link from 'umi/link';
import styles from './layout.less';

export default class extends Component {
  render(){
    return(
      <div className={styles.footer}>
        <div className={styles.top}>
          <img src={'/assets/footer_1.png'}/>
          <img src={'/assets/footer_2.png'}/>
          <span style={{fontSize: 16}}>主办：广西壮族自治区人民政府 承办：广西壮族自治区人民政府办公厅</span>
        </div>
        <div style={{fontSize: 16}}>网站标识码 ：4500000123　 联系我们</div>
      </div>
    )
  }
}
