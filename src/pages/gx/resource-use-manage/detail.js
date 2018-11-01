import React from 'react';
import {Button} from 'antd';
import { connect } from 'dva'
import styles from './detail.less';
import {mapStateToProps} from "../../../utils/util";
import DataItem from "../shared-directory/components/DataItem";

@connect(mapStateToProps('index'))
@connect(mapStateToProps('resourceUseManage'))
export default class extends React.Component{

  componentWillMount(){
    const {currPathname} = this.props.index;
    const { id } = this.props.params;
    const { data = [] } = this.props.resourceUseManage.authManage;
    let dataItem = {};
    for(let i = 0; i < data.length; i++) {
      if (id === data[i].id) {
        dataItem = data[i];
        break;
      }
    }
    let payload = {
      dataItem,
      type: currPathname.includes('resource-use-manage/manage-detail') ? 'manage': 'apply'
    };
    this.setState(payload)
  }
  render(){
    const { dataItem = {} } = this.state;
    let warnBgColor = 'rgb(52, 152, 219)';
    let warnFont = '未处理';
    if (dataItem.status === 'accept') {
      warnBgColor = 'rgb(52, 164, 142)';
      warnFont = '已授权'
    } else if (dataItem.status === 'reject'){
      warnBgColor = 'rgb(190, 77, 86)';
      warnFont = '已拒绝'
    } else {
      warnBgColor = dataItem.warning === 1 ? '#ff8401' : (dataItem.warning === 2 ? '#ff0000' : 'rgb(52, 152, 219)');
      warnFont = '未处理'
    }
    return(
      <div className={styles.main}>
        <div className={styles.header}>
          <div className={styles.title}>{dataItem.title}</div>
          {
            dataItem.status === 'wait' &&
            <div className={styles.btns}>
              <Button className={styles.btn_1}>授权</Button>
              <Button className={styles.btn_2}>拒绝</Button>
            </div>
          }
        </div>
        <div className={styles.hint}>
          <div className={styles.warning}>
            <div className={styles.w_1} style={{backgroundColor: warnBgColor}}/>
            <div className={styles.w_2} style={{backgroundColor: warnBgColor}}>{warnFont}</div>
            <div className={styles.w_3} style={{backgroundColor: warnBgColor}}/>
          </div>
          <span style={{color: '#888888'}}>
            {
              dataItem.warning === 1 ? '3天未处理' : (dataItem.warning === 2 && '5天未处理')
            }
          </span>
        </div>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: '40px'}}>
          <DataItem
            style={{width: 584}}
            valueColor={'#555555'}
            data={dataItem}
            title="申请方信息"
            config={{
              label: { span: 10},
              rows: [
                {key: 'applicant', label: '申请方名称',span: 14},
                {key: 'apply_linkman', label: '联系人姓名',span: 14},
                {key: 'apply_phone', label: '联系电话',span: 14},
                {key: 'apply_mail', label: '联系邮箱',span: 14},
              ]
            }}
          />
          <DataItem
            style={{width: 584}}
            valueColor={'#555555'}
            data={dataItem}
            title="使用方信息"
            config={{
              label: { span: 10},
              rows: [
                {key: 'user_name', label: '使用方名称',span: 14},
                {key: 'use_linkman', label: '联系人姓名',span: 14},
                {key: 'use_phone', label: '联系电话',span: 14},
                {key: 'use_mail', label: '联系邮箱',span: 14},
              ]
            }}
          />
        </div>
        <DataItem
          data={dataItem}
          valueColor={'#555555'}
          title="内容详情"
          config={{
            label: { span: 10},
            rows: [
              {key: 'resource', label: '资源名称',span: 14},
              {key: 'office_scene', label: '办公场景',span: 14},
              {key: 'use_description', label: '使用范围说明',span: 14},
              {key: 'org', label: '使用本资源业务系统',span: 14},
              {key: 'apply_basis', label: '申请依据',span: 14},
              {key: 'use_frequency', label: '服务接口调用频率',span: 14},
              {key: 'use_date_scope', label: '使用时间范围',span: 14},
              {key: 'use_date_limit', label: '服务接口使用期限',span: 14},
              {key: 'other', label: '其他技术请求',span: 14},
              {key: 'file', label: '附件',span: 14},
            ]
          }}
        />
      </div>
    )
  }
}
