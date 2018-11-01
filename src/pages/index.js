import React from 'react';
import { connect } from 'dva';
import Link from 'umi/link';
import Prompt from 'umi/prompt';
import styles from './index.css';

@connect()
export default class IndexPage extends React.Component{

  render () {
    return (
      <div className={styles.main}>
        <div className={styles.welcome} />
        <ul className={styles.list}>
          <li><Link to={'/chinese-chess'}>Go Chess</Link></li>
          <li><Link to={'/amap-test'}>Go AMap</Link></li>
          <li><Link to={'/bmap-test'}>Go BMap</Link></li>
          <li><Link to={'/video-react'}>Go VideoReact</Link></li>
        </ul>
        <Prompt
          when={true}
          message={(location) => {
            return window.confirm(`confirm to leave to ${location.pathname}?`);
          }}
        />
      </div>
    );
  }
}

IndexPage.propTypes = {
};
