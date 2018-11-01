import React from 'react';
import { Input, Pagination, Rate, Row, Col, Button, Icon, Select } from 'antd';
import classNames from 'classnames';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import styles from './index.less'
import Iconfont from "../../../components/Iconfont/Iconfont";
import {mapStateToProps} from "../../../utils/util";
import GJApplyForm from "./components/GJApplyForm";

const Search = Input.Search;
const Option = Select.Option;
@connect(mapStateToProps('resourceUseManage'))
export default class extends React.Component{
  state = {
    pageNumber: 1,
    applyType: 'gj'
  };
  onMyApplyItemClick = (item) => {
    this.props.dispatch(routerRedux.push(`/gx/resource-use-manage/apply-detail/${item.id}`))
  };
  onAuthManageItemClick = (item) => {
    this.props.dispatch(routerRedux.push(`/gx/resource-use-manage/manage-detail/${item.id}`))
  };
  updateStatus = (payload) => {
    this.props.dispatch({
      type: 'resourceUseManage/save',
      payload,
    })
  };
  renderContent = () => {
    switch (this.props.resourceUseManage.ds_check) {
      case 'applyResource':
        return(
          <div className={styles.apply_resource_content}>
            <div className={styles.hint}>
              请选择您要申请的平台入口
            </div>
            <div className={styles.tabs}>
              <div className={styles.tab} style={{backgroundColor: '#f7b551'}} onClick={() => {this.setState({applyType: 'gj'})}}>
                <span>国家共享政务信息资源</span>
                {
                  this.state.applyType === 'gj' &&
                    <div className={styles.arrow} style={{borderBottomColor: '#f7b551'}}/>
                }
              </div>
              <div className={styles.tab} style={{backgroundColor: '#7fc269'}} onClick={() => {this.setState({applyType: 'zzq'})}}>
                <span>自治区交换平台政务信息资源</span>
                {
                  this.state.applyType === 'zzq' &&
                  <div className={styles.arrow} style={{borderBottomColor: '#7fc269'}}/>
                }
              </div>
              <div className={styles.tab} style={{backgroundColor: '#84ccc9'}} onClick={() => {this.setState({applyType: 'sqs'})}}>
                <span>设区市交换平台政务信息资源</span>
                {
                  this.state.applyType === 'sqs' &&
                  <div className={styles.arrow} style={{borderBottomColor: '#84ccc9'}}/>
                }
              </div>
            </div>
            {
              this.state.applyType === 'gj' &&
              <GJApplyForm/>
            }
            {
              this.state.applyType === 'zzq' &&
              <GJApplyForm/>
            }
            {
              this.state.applyType === 'sqs' &&
              <GJApplyForm/>
            }
          </div>
        );
      case 'myApply':
        const { resourceUseManage = {} } = this.props;
        const { authManage = {} } = resourceUseManage;
        const { pageNumber = 1, } = this.state;
        const showData = authManage.data.filter((d, index) => index >= (pageNumber-1) * 5 && index < pageNumber * 5);
        return(
          <div className={styles.content}>
            <div className={styles.hint}>
              <div className={styles.left}>申请数目:<span>{authManage.total}条</span></div>
              <div className={styles.right}>状态:<span>等待受理({authManage.wait})</span><span>成功受理({authManage.accept})</span><span>拒绝受理({authManage.reject})</span></div>
            </div>
            {
              showData.map((item, index) => {
                return(
                  <div key={index} className={styles.card_item}>
                    <div className={styles.card_col_1}>
                      {
                        item.warning === 1 &&
                        <div className={styles.warning}>
                          <div className={styles.w_1}/>
                          <div className={styles.w_2}>未处理</div>
                          <div className={styles.w_3}/>
                        </div>
                      }
                      {
                        item.warning === 2 &&
                        <div className={styles.warning}>
                          <div className={styles.w_1} style={{backgroundColor: '#ff0000'}}/>
                          <div className={styles.w_2} style={{backgroundColor: '#ff0000'}}>未处理</div>
                          <div className={styles.w_3} style={{backgroundColor: '#ff0000'}}/>
                        </div>
                      }
                      <div className={styles.title} onClick={() => this.onMyApplyItemClick(item)}>{item.title}</div>
                      <div className={styles.belong_platform}>
                        <div className={styles.huan}/>
                        <span>所属平台:<span>{item.belongPlatform}</span></span>
                      </div>
                    </div>
                    <div className={styles.card_col_2}>
                      <div className={styles.col_2_item}>请求单位:<span>{item.requestUnit}</span></div>
                      <div className={styles.col_2_item}>所属单位:<span>{item.belongUnit}</span></div>
                      <div className={styles.col_2_item}>共享属性:<span>{item.sharedProps}</span></div>
                    </div>
                    <div className={styles.card_col_3}>
                      <div className={styles.date_time}>
                        <div>发起时间:<span>{item.createTime}</span></div>
                        <div>更新时间:<span>{item.updateTime}</span></div>
                      </div>
                      {
                        item.status === 'accept' &&
                        <div className={styles.result_label} style={{backgroundColor: '#34a48e'}}>
                          <span>成功受理</span>
                        </div>
                      }
                      {
                        item.status === 'reject' &&
                        <div className={styles.result_label} style={{backgroundColor: '#be4d56'}}>
                          <span>拒绝受理</span>
                        </div>
                      }
                      {
                        item.status === 'wait' &&
                        <div className={styles.result_label} style={{backgroundColor: '#3498db'}}>
                          <span>等待受理</span>
                        </div>
                      }
                      <div className={styles.message}>{item.message2}</div>
                    </div>
                  </div>
                )
              })
            }
            <div className={styles.pagination}>
              <Pagination
                showQuickJumper
                current={pageNumber}
                total={authManage.total || 0}
                pageSize={5}
                onChange={(pageNumber)=>{
                  this.setState({pageNumber})
                }}
              />
            </div>
          </div>
        );
      case 'authManage':{
        const { resourceUseManage = {} } = this.props;
        const { authManage = {} } = resourceUseManage;
        const { pageNumber = 1, } = this.state;
        const showData = authManage.data.filter((d, index) => index >= (pageNumber-1) * 5 && index < pageNumber * 5);
        return(
          <div className={styles.content}>
            <div className={styles.hint}>
              <div className={styles.left}>授权数目:<span>{authManage.total}条</span></div>
              <div className={styles.right}>状态:<span>等待受理({authManage.wait})</span><span>已授权({authManage.accept})</span><span>已拒绝({authManage.reject})</span></div>
            </div>
            {
              showData.map((item, index) => {
                return(
                  <div key={index} className={styles.card_item}>
                    <div className={styles.card_col_1}>
                      {
                        item.warning === 1 &&
                        <div className={styles.warning}>
                          <div className={styles.w_1}/>
                          <div className={styles.w_2}>未处理</div>
                          <div className={styles.w_3}/>
                        </div>
                      }
                      {
                        item.warning === 2 &&
                        <div className={styles.warning}>
                          <div className={styles.w_1} style={{backgroundColor: '#ff0000'}}/>
                          <div className={styles.w_2} style={{backgroundColor: '#ff0000'}}>未处理</div>
                          <div className={styles.w_3} style={{backgroundColor: '#ff0000'}}/>
                        </div>
                      }
                      <div className={styles.title} onClick={() => this.onAuthManageItemClick(item)}>{item.title}</div>
                      <div className={styles.belong_platform}>
                        <div className={styles.huan}/>
                        <span>所属平台:<span>{item.belongPlatform}</span></span>
                      </div>
                    </div>
                    <div className={styles.card_col_2}>
                      <div className={styles.col_2_item}>请求单位:<span>{item.requestUnit}</span></div>
                      <div className={styles.col_2_item}>所属单位:<span>{item.belongUnit}</span></div>
                      <div className={styles.col_2_item}>共享属性:<span>{item.sharedProps}</span></div>
                    </div>
                    <div className={styles.card_col_3}>
                      <div className={styles.date_time}>
                        <div>发起时间:<span>{item.createTime}</span></div>
                        <div>更新时间:<span>{item.updateTime}</span></div>
                      </div>
                      {
                        item.status === 'accept' &&
                        <div className={styles.result}>
                          <Icon type="check-circle" theme="outlined" className={styles.icon} style={{color: '#32ce56'}}/>
                          <span>您已授权该请求</span>
                        </div>
                      }
                      {
                        item.status === 'reject' &&
                        <div className={styles.result}>
                          <Icon type="close-circle" theme="outlined" className={styles.icon} style={{color: '#ff050e'}}/>
                          <span>您拒绝了该请求</span>
                        </div>
                      }
                      {
                        item.status === 'wait' &&
                        <div className={styles.btns}>
                          <Button className={styles.btn_1}>授权</Button>
                          <Button className={styles.btn_2}>拒绝</Button>
                        </div>
                      }
                      <div className={styles.message}>{item.message}</div>
                    </div>
                  </div>
                )
              })
            }
            <div className={styles.pagination}>
              <Pagination
                showQuickJumper
                current={pageNumber}
                total={authManage.total || 0}
                pageSize={5}
                onChange={(pageNumber)=>{
                  this.setState({pageNumber})
                }}
              />
            </div>
          </div>
        );
      }
      default:
    }
  };
  render(){
    const {resourceUseManage} = this.props;
    return(
      <div className={styles.main}>
        <div className={styles.data_ds}>
          <div className={styles.ds_header}><span>资源使用管理</span></div>
          <div
            className={classNames(styles.ds_item, resourceUseManage.ds_check === 'applyResource' && styles.ds_item_checked)}
            onClick={()=>{this.updateStatus({ds_check: 'applyResource'})}}
          ><span>申请资源</span></div>
          <div className={styles.ds_line}/>
          <div
            className={classNames(styles.ds_item, resourceUseManage.ds_check === 'myApply' && styles.ds_item_checked)}
            onClick={()=>{this.updateStatus({ds_check: 'myApply'})}}
          ><span>我的申请</span></div>
          <div className={styles.ds_line}/>
          <div
            className={classNames(styles.ds_item, resourceUseManage.ds_check === 'authManage' && styles.ds_item_checked)}
            onClick={()=>{this.updateStatus({ds_check: 'authManage'})}}
          ><span>授权管理</span></div>
        </div>
        {this.renderContent()}
      </div>
    )
  }
}
