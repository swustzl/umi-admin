import React from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import styles from './index.css';

class IndexPage extends React.Component{
  render () {
    return (
      <div className={styles.normal}>
        <h1 className={styles.title}>Yay! Welcome to dva!</h1>
        <div className={styles.welcome} />
        <ul className={styles.list}>
          <li><Link to={'/chinese-chess'}>Go Chess</Link></li>
          <li><Link to={'/amap-test'}>Go AMap</Link></li>
          <li><Link to={'/bmap-test'}>Go BMap</Link></li>
        </ul>
      </div>
    );
  }
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
