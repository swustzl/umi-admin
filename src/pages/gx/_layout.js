import React, { Component } from 'react';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import { Layout, LocaleProvider } from 'antd';
import { connect } from 'dva';
import Header from 'components/common/layout/header';
import NavigationBar from 'components/common/layout/navigationBar';
import Footer from 'components/common/layout/footer';
import styles from './_layout.less';
import Login from "components/common/layout/login";

const { Content } = Layout;

function mapStateToProps(state) {
  return { ...state };
}

@connect(mapStateToProps)
export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contentSize: 260,
      // role: getRole(),
    };
  }
  componentDidMount() {
    // this.props.dispatch({
    //   type: 'login/copywriting',
    //   payload: ['copyright', 'support_cloud', 'product_name', 'product_short_name'],
    // });
  }

  // 根据用户加载不同的内容
  render() {
    const {currPathname} = this.props.global;
    const { effects } = this.props.loading;
    const isLoading = !!effects['login/userLogin'] || !!effects['login/copywriting'];
    if (currPathname === '/gx/statistics') {
      return(
        <LocaleProvider locale={zhCN} >
          {this.props.children}
        </LocaleProvider>
      )
    }
    return (
      <LocaleProvider locale={zhCN} >
        <div className={styles.app}>
          <div id={'main'} className={styles.main}>
            <Layout className={styles.container}>
              <Header dispatch={this.props.dispatch} currPathname={currPathname} />
              <NavigationBar currPathname={currPathname}/>
              {
                (currPathname === '/' || currPathname === '/gx/home') &&
                <Login loading={isLoading} submit={(values) => {
                  this.props.dispatch({
                    type: 'login/userLogin',
                    payload: values,
                  });
                }}/>
              }
              <Content className={styles.content} >
                {this.props.children}
              </Content>
              <Footer />
            </Layout>
          </div>
          {/*<ServiceGuide />*/}
        </div>
      </LocaleProvider>
    );
  }
}
