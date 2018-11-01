import React, { Component } from 'react';
import { Menu, Layout, Icon } from 'antd';
import { IndexLink } from 'react-router';
import { MenuItem } from '../../../config';
import styles from './sider.less';

const { Sider } = Layout;
const { SubMenu } = Menu;
export default class extends Component {
  state = {
    openKeys: [],
  };

  componentWillMount() {
    const userRole = this.props.userRole;
    const menu = Object.keys(MenuItem[userRole]).map(value =>
      this.getMenuItem(MenuItem[userRole][value]),
    );
    this.setState({
      menu,
    });
  }

  getMenuItem = (item) => {
    return (
      item.children.length ? (
        <SubMenu
          key={item.key}
          title={(
            <div>
              <div className="anticon">
                <i className={`${item.icon_type}`} />
              </div>
              <span>{item.icon_type && <i className={item.icon_type} />}
                <span>{item.menuName}</span>
              </span>
            </div>
          )}
        >
          {item.children.map((value) => {
            return this.getMenuItem(value);
          })}
        </SubMenu>
      ) : (
        <Menu.Item key={item.key}>
          <IndexLink to={item.link_url}>
            <div className="anticon">
              <i className={`${item.icon_type}`} />
            </div>
            <span>{item.menuName}</span>
          </IndexLink>
        </Menu.Item>)
    );
  };

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    const { contentSize, current } = this.props;
    const urlArray = current.split('/');
    let defaultSelectedKeys;

    const arr = {};
    MenuItem[this.props.userRole].forEach((item) => { arr[item.key] = item; });

    if (arr[urlArray[2]]) {
      if (arr[urlArray[2]].children.length > 0) {
        // defaultOpenKeys = [urlArray[2]];
        defaultSelectedKeys = [urlArray[3]];
      } else {
        defaultSelectedKeys = [urlArray[2]];
      }
    }
    const copywriting = JSON.parse(sessionStorage.getItem('copywriting'));
    const configs = {
      title: copywriting && copywriting.product_short_name ? copywriting.product_short_name : '数据接入监控系统',
      iconType: 'icon-shujujiaohuan-copy',
    };
    return (
      <Sider
        id="sider"
        className={styles.sider}
        breakpoint="lg"
        collapsedWidth={this.props.collapsedWidth || '0'}
        width={contentSize}
        trigger={null}
        collapsible
        collapsed={this.state.collapsed}
      >
        <div className={styles.logo}>
          <div className={styles.header__icon}>
            <i className={`iconfont ${configs.iconType} ${styles.header__iconfont}`} />
            {/* <div className={styles.icon} />*/}
            <div className={styles.label}>&nbsp;{ configs.title }</div>
          </div>
        </div>
        <Menu
          mode="inline"
          selectedKeys={defaultSelectedKeys}
          theme="dark"
          inlineCollapsed={this.state.collapsed}
        >
          {this.state.menu}
        </Menu>
      </Sider>
    );
  }
}
