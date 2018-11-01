import React, { Component } from 'react';
import { Layout, Icon, Input, Dropdown, Menu  } from 'antd';
import { connect } from 'dva';
import { routerRedux, Link } from 'dva/router';
import qs from 'qs';
import styles from './layout.less';
import Iconfont from "../../Iconfont/Iconfont";
import { getUser } from '../../../utils/user';

const { Header } = Layout;
const Search = Input.Search;

@connect()
export default class extends Component {
  handleClick = ({ key }) => {
    if (key === 'index/logout') {
      this.props.dispatch({
        type: key,
      });
    } else {
      this.props.dispatch(routerRedux.push({
        pathname: key,
      }));
    }
  };

  render() {
    const user = getUser();
    const menu = (
      <Menu onClick={this.handleClick}>
        <Menu.Item key={'index/logout'}>
          退出登录
        </Menu.Item>
      </Menu>
    );
    return (
      <div className={styles.main}>
        <Header className={styles.header}>
          <div className={styles.header__icon}>
            {/*<div className={styles.icon} />*/}
            <Iconfont type={'guohui'} colorful style={{ width: 40, height: 40}}/>
            <div className={styles.title}>广西壮族自治区政务信息共享网站</div>
          </div>
          <div className={styles.header__right}>
            <Search
              className={styles.search}
              placeholder="请输入对应的关键文字"
              onSearch={(value) => {
                let payload = {
                  pathname: '/gx/search',
                  search: `?${qs.stringify({
                    value,
                  })}`,
                };
                if (window.location.pathname !== '/gx/search') {
                  this.props.dispatch(routerRedux.push(payload))
                }else {
                  this.props.dispatch(routerRedux.replace(payload))
                }
              }}
            />
            {!user.name && <div className={styles.action} onClick={() => this.handleClick({key: '/login'})}>登录</div>}
            {!user.name && <div className={styles.action}>注册</div>}
            {
              user.name &&
              <Dropdown overlay={menu}>
                <div className={styles.action}>{user.name}</div>
              </Dropdown>
            }
          </div>
        </Header>
        <div className={styles.carousel}>
          <div className={styles.b_title}>广西壮族自治区政务信息共享网站</div>
          <div className={styles.b_data}>
            <div className={styles.data_des}>
              已拥有目录<span className={styles.number}>35万</span>条
            </div>
            <div className={styles.data_des}>
              已发布共享库表<span className={styles.number}>321</span>个
            </div>
            <div className={styles.data_des}>
              已发布共享文件<span className={styles.number}>12万</span>个
            </div>
            <div className={styles.data_des}>
              已发布共享接口<span className={styles.number}>234</span>个
            </div>
          </div>
        </div>

      </div>
    );
  }
}
