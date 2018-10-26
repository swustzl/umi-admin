import React from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import styles from './index.css';

class IndexPage extends React.Component{

  render () {
    console.log(2222)
    return (
      <div className={styles.main}>
        <div className={styles.welcome} />
        <ul className={styles.list}>
          <li><Link to={'/chinese-chess'}>Go Chess</Link></li>
          <li><Link to={'/amap-test'}>Go AMap</Link></li>
          <li><Link to={'/bmap-test'}>Go BMap</Link></li>
          <li><Link to={'/video-react'}>Go VideoReact</Link></li>
        </ul>
      </div>
    );
  }
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
