import React, { Component } from 'react';
import { connect } from 'dva';
import { Spin } from 'antd';
import { routerRedux } from 'react-router';
import styles from './login.less';
import PlatformLoginForm from '../../components/common/login/platformLoginForm';
import { mapStateToProps } from '../../utils/util';

@connect(mapStateToProps('login'))
export default class extends Component {
  componentDidMount() {
    // this.props.dispatch({
    //   type: 'login/copywriting',
    //   payload: ['copyright', 'support_cloud', 'product_name', 'product_short_name'],
    // });
    this.props.dispatch({
      type: 'login/save',
      payload: {
        remberMe: false,
      },
    });
  }
  platformSubmit = (values) => {
    this.props.dispatch({
      type: 'login/userLogin',
      payload: values,
    });
  };
  render() {
    const { login, loading } = this.props;
    const { effects } = loading;
    const { copywriting } = login;
    const projectName = copywriting && copywriting.product_name ? copywriting.product_name : '广西壮族自治区政务信息共享网站';
    const isLoading = !!effects['login/userLogin'] || !!effects['login/copywriting'];
    return (
      <div className={styles.bg_content}>
        {/*<div className={styles.title}>
          <div className={styles.title_icon} />
          <div className={styles.title_span}>{projectName}</div>
        </div>*/}
        <div className={styles.container}>
          <div className={styles.login}>
            <div className={styles.title}>{projectName}</div>
            <Spin tip="加载中..." spinning={isLoading}>
              <div className={styles.form}>
                <PlatformLoginForm
                  loading={isLoading}
                  submit={this.platformSubmit}
                  ref={this.getPlatformRef}
                />
                {/*<div className={styles.footer}>*/}
                  {/*<span className={styles.changeType}>&gt;&gt;进入单位管理登录入口</span>*/}
                {/*</div>*/}
              </div>
            </Spin>
          </div>
        </div>
        {/*<div className={styles.copy_right}>*/}
          {/*<span>{copywriting.support_cloud}</span><br />*/}
          {/*<span className={styles.support_cloud}>{copywriting.copyright}</span>*/}
          {/*/!*<a className={styles.open_api} target={'_blank'} href={'https://111.231.56.97:7210/swagger-ui.html#/交换平台'} >OpenAPI</a>*!/*/}
        {/*</div>*/}
      </div>
    );
  }
}

