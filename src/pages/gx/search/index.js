import React from 'react';
import { connect } from 'dva';
import { Tabs } from 'antd';
import styles from './index.less';
import { mapStateToProps } from '../../../utils/util';
import CustomTitle from "../../../components/CustomTitle/index";

const TabPane = Tabs.TabPane;

@connect(mapStateToProps('search'))
export default class extends React.Component{
  componentDidMount(){
    //this.initThree();
  }

  render () {
    return(
      <div className={styles.main}>
        <CustomTitle title="搜索结果"/>
        <div id='WebGL-output' className={styles.content}>
          <Tabs
            defaultActiveKey="1"
            tabPosition={'left'}
            //style={{ height: 220 }}
          >
            <TabPane tab="库表" key="1">无匹配结果</TabPane>
            <TabPane tab="接口" key="2">无匹配结果</TabPane>
            <TabPane tab="文件" key="3">无匹配结果</TabPane>
            <TabPane tab="文件夹" key="4">无匹配结果</TabPane>
          </Tabs>
        </div>
      </div>
    )
  }
}
