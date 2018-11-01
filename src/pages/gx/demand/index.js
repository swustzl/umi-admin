import React from 'react';
import { Button, Pagination } from 'antd';
import { connect } from 'dva';
import classNames from 'classnames';
import styles from './index.less';
import CustomTitle from "../../../components/CustomTitle/index";
import DemandPublishModal from "./components/DemandPublishModal";
import {mapStateToProps} from "../../../utils/util";

@connect(mapStateToProps('demand'))
export default class extends React.Component{
  state = {
    pageNumber: 1,
  };
  render(){
    const { demand = {} } = this.props;
    const { data = [] } = demand;
    const { pageNumber = 1 } = this.state;
    const showData = data.filter((d, index) => index >= (pageNumber-1) * 6 && index < pageNumber * 6)

    return(
      <div className={styles.main}>
        <div className={styles.header}>
          <CustomTitle title="需求超市"/>
          <div className={styles.right}>
            <span>已发布(0)</span>
            <Button className={styles.send} onClick={() => { this.dpModal && this.dpModal.showModal()}}>需求发布</Button>
            <Button className={styles.receive}>需求受理</Button>
            <DemandPublishModal ref={ref => { this.dpModal = ref }}/>
          </div>
        </div>
        <div className={styles.info}>已显示未涉密的需求请求</div>
        {
          showData.map((item, index) => {
            return (
              <div key={index} className={styles.content_item}>
                <div className={styles.col_1}>
                  <div className={styles.c_title}>{item.title}</div>
                  <div className={styles.c_sources}><div className={styles.icon}/>来源：{item.source}</div>
                </div>
                <div className={styles.col_2}>
                  <div className={styles.unit}>受理单位：{item.acceptUnit}</div>
                  <div className={styles.use}>数据用途：{item.dataUsed}</div>
                  <div className={styles.des}>数据描述：{item.dataDescription}</div>
                </div>
                <div className={styles.col_3}>
                  <div className={styles.update_time}>更新时间：{item.updateTime}</div>
                  <div className={styles.message}>
                    留言(<span>{item.messageLength}</span>)
                  </div>
                  { item.status === 'wait' && <Button className={classNames(styles.btn, styles.wait)}>等待受理</Button> }
                  { item.status === 'complete' && <Button className={classNames(styles.btn, styles.complete)}>完成受理</Button> }
                  { item.status === 'reject' && <Button className={classNames(styles.btn, styles.reject)}>拒绝受理</Button> }
                </div>
              </div>
            )
          })
        }
        <div className={styles.pagination}>
          <Pagination
            showQuickJumper
            current={pageNumber}
            total={data.length}
            pageSize={6}
            onChange={(pageNumber)=>{
              this.setState({pageNumber})
            }}
          />
        </div>
      </div>
    )
  }
}
