import React, { Component } from 'react';
import { Dropdown, Menu, Icon } from 'antd';
import { connect } from 'dva';
import Link from 'umi/link';
import styles from './layout.less';

@connect()
export default class extends Component {
  render(){
    const { currPathname } = this.props;
    const menu = (
      <Menu>
        <Menu.Item key="0">
          <Link className={styles.subMenu} style={{ padding: 0 }} to={'/gx/statistics'}>大屏</Link>
        </Menu.Item>
        <Menu.Item key="1">
          <Link className={styles.subMenu} style={{ padding: 0 }} to={'/gx/statistics/SharedExchangeSystem'}>共享交换体系</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link className={styles.subMenu} style={{ padding: 0 }} to={'/gx/statistics/PlatformDeployment'}>平台部署范围</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link className={styles.subMenu} style={{ padding: 0 }} to={'/gx/statistics/SharedData'}>共享数据情况</Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link className={styles.subMenu} style={{ padding: 0 }} to={'/gx/statistics/DataUsed'}>数据调用情况</Link>
        </Menu.Item>
        <Menu.Item key="5">
          <Link className={styles.subMenu} style={{ padding: 0 }} to={'/gx/statistics/PlatformRun'}>平台运行情况</Link>
        </Menu.Item>
      </Menu>
    );
    return(
      <div className={styles.navigation_bar}>
        <div id={'navigation_bar_content'} className={styles.navigation_bar_content}>
          <Link className={styles.navigate} style={{textDecoration: currPathname === '/gx/home' && 'underline'}} to={'/gx/home'}>首页</Link>
          <Link className={styles.navigate} style={{textDecoration: currPathname === '/gx/shared-directory' && 'underline'}} to={'/gx/shared-directory'}>政务资源目录</Link>
          <Link className={styles.navigate} style={{textDecoration: currPathname === '/gx/resource-use-manage' && 'underline'}} to={'/gx/resource-use-manage'}>资源使用管理</Link>
          {/*<Link className={styles.navigate} style={{textDecoration: currPathname.includes('/demo/work-trend') && 'underline'}} to={'/demo/work-trend'}>工作动态</Link>
          <Link className={styles.navigate} style={{textDecoration: currPathname.includes('/demo/policy-basis') && 'underline'}} to={'/demo/policy-basis'}>政策依据</Link>*/}
          <Dropdown overlay={menu} trigger={['click']} getPopupContainer={() => document.getElementById('navigation_bar_content')}>
            <Link className={styles.navigate} style={{textDecoration: ['/gx/platform-deployment','/gx/shared-data','/gx/platform-run','/gx/data-used'].includes(currPathname) && 'underline'}} to={''}>交换平台统计 <Icon type="down" /></Link>
          </Dropdown>
          <Link className={styles.navigate} style={{textDecoration: currPathname === '/gx/shared-resource' && 'underline'}} to={'/gx/shared-resource'}>资源内容展示</Link>
          {/*<Link className={styles.navigate} style={{textDecoration: currPathname === '/demo/demand' && 'underline'}} to={'/demo/demand'}>需求沟通</Link>
          <Link className={styles.navigate} style={{textDecoration: currPathname.includes('/demo/data-center') && 'underline'}} to={'/demo/data-center'}>资料中心</Link>*/}
        </div>
      </div>
    )
  }
}
