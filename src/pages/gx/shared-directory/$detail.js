import React from 'react';
import {Button, Rate, Icon, Input,Tooltip} from 'antd';
import classNames from 'classnames';
import { connect } from 'dva';
import styles from './detail.less';
import Iconfont from "../../../components/Iconfont/Iconfont";
import {mapStateToProps} from "../../../utils/util";
import DataTable from "./components/DataTable";
import DataItem from "./components/DataItem";
import TableDataViewModal from "./components/TableDataViewModal";
import FileViewModal from "./components/FileViewModal";

const TextArea = Input.TextArea;

@connect(mapStateToProps('sharedDirectory'))
export default class extends React.Component{

  state = {
    tabs: [
      { key: 'baseInfo', label: '基本信息'},
      { key: 'dataItem', label: '数据项'},
      /*{ key: 'dataDetail', label: '数据详情'},*/
      { key: 'table', label: '库表'},
      { key: 'fileDownload', label: '文件下载'},
      { key: 'interface', label: '接口服务'},
      { key: 'message', label: '留言'},
    ],
    viewFile: {},
    currentTabKey: 'baseInfo',
    databasePWShow: false,
    currentTable: '',
    dataDetailSize: 0,
    dataDetailShowSize: 0,
    interfaceTestParams: '',
    interfaceTestResult: '',
  };
  componentWillMount(){
    const id = this.props.match.params.detail;
    const { data = [] } = this.props.sharedDirectory;
    let dataItem = {};
    for(let i = 0; i < data.length; i++) {
      if (id === data[i].id) {
        dataItem = data[i];
        break;
      }
    }
    let tables = dataItem.database ? dataItem.database.tables : [];
    let payload = {
      dataItem,
      currentTable: {},
      dataDetailSize: dataItem.dataDetail ? dataItem.dataDetail.length : 0,
      dataDetailShowSize: 0,
    };
    dataItem.dataDetail && dataItem.dataDetail.map((item) => {
      if (item.show) {
        payload.dataDetailShowSize ++
      }
    });
    if (tables.length > 0) {
      payload.currentTable = tables[0]
    }
    this.setState(payload)
  }
  updateSubscription = () => {
    const { id } = this.props.params;
    this.props.dispatch({
      type: 'sharedDirectory/updateSubscription',
      payload: {id}
    })
  };
  onClickTableDataView = () => {
    this.tableViewModal && this.tableViewModal.showModal()
  };
  onClickFileView = (item) => {
    this.setState({viewFile: item})
    this.fileViewModal && this.fileViewModal.showModal()
  };
  renderTabContent = (dataItem) => {
    switch (this.state.currentTabKey) {
      case 'baseInfo':
        return(
          <div>
            <div className={styles.row}>
              <DataItem
                className={styles.basic_info}
                data={dataItem}
                title="基本信息"
                config={{
                  label: { span: 10},
                  rows: [
                    {key: 'title', label: '数据目录名称',span: 14},
                    {key: 'subject', label: '所属主题',span: 14},
                    {key: 'updateTime', label: '更新时间',span: 14},
                    {key: 'dataFormat', label: '数据格式',span: 14},
                    {key: 'sharedType', label: '共享属性',span: 14},
                    {key: 'openType', label: '开放属性',span: 14},
                    {key: 'source', label: '来源部门',span: 14},
                    {key: 'updateFrequency', label: '更新频率',span: 14},
                    {key: 'publishTime', label: '发布时间',span: 14},
                  ]
                }}
              />
              <DataItem
                className={styles.use_info}
                data={dataItem.useCondition}
                title="使用情况"
                config={{
                  label: { span: 10},
                  rows: [
                    {key: 'downloadNum', label: '下载次数',span: 14},
                    {key: 'ratePNum', label: '评分人数',span: 14},
                    {key: 'rateTNum', label: '评分总数',span: 14},
                    {key: 'rateNum', label: '评分次数',span: 14},
                    {key: 'rate', label: '平均分数',span: 14, render: (value) => {
                      return(<div className={styles.rate}><Rate disabled defaultValue={dataItem.rate} /></div>)
                    }},
                  ]
                }}
              />
            </div>
            <DataItem
              className={styles.introduce}
              data={dataItem}
              title="内容介绍"
              config={{
                label: { span: 10},
                rows: [
                  {key: 'description', label: '详细描述',span: 14},
                ]
              }}
            />
          </div>
        )
      case 'dataItem': {
        return(
          <DataTable
            title="数据项"
            data={dataItem.dataItem}
            config={{
              serialNumber: { show: true, span: 4 },
              columns: [
                { key: 'name', label: '名称', span: 6 },
                { key: 'format', label: '数据类型', span: 6 },
                { key: 'description', label: '描述', span: 8 },
              ]
            }}
          />
        )
      }
      case 'dataDetail': {
        return (
          <DataTable
            title="数据详情"
            data={dataItem.dataDetail ? dataItem.dataDetail.filter(item => item.show) : []}
            titleRightRender={() =>{
              return `全部数据共${this.state.dataDetailSize}条，可预览数据${this.state.dataDetailShowSize}条`
            }}
            config={{
              serialNumber: { show: true, span: 4 },
              columns: [
                { key: 'partition', label: '易发分区', span: 6 },
                { key: 'area', label: '面积', span: 8 },
              ]
            }}
          />
        )
      }
      case 'table': {
        if (!dataItem.authStatus) {
          return (
            <div className={styles.noAuth}>您目前没有权限查看该内容，请前往申请</div>
          )
        }
        return (
          <div className={styles.database}>
            <DataItem
              className={styles.item}
              data={dataItem.database}
              title="连接参数"
              config={{
                label: { span: 6},
                rows: [
                  {key: 'host', label: '主机',span: 18},
                  {key: 'post', label: '端口',span: 18},
                  {key: 'code', label: '服务器编码',span: 18},
                  {key: 'userName', label: '用户名',span: 18},
                  {key: 'password', label: '密码',span: 18, render: (value) => {
                    if (this.state.databasePWShow) {
                      return (<div className={styles.password}>
                        {value}
                        <div className={styles.eye} onClick={() => {this.setState({databasePWShow: !this.state.databasePWShow})}}
                        ><Icon type="eye" theme="outlined" style={{fontSize: '20px', color: '#999'}}/></div>
                        </div>)
                    }
                    return(<div className={styles.password}>
                      <div className={styles.dian}/>
                      <div className={styles.dian}/>
                      <div className={styles.dian}/>
                      <div className={styles.dian}/>
                      <div className={styles.dian}/>
                      <div className={styles.dian}/>
                      <div className={styles.eye} onClick={() => {this.setState({databasePWShow: !this.state.databasePWShow})}}
                      ><Icon type="eye" theme="outlined" style={{fontSize: '20px', color: '#555555'}}/></div>
                    </div>)
                  }},
                ]
              }}
            />
            <div className={styles.tableName}>
              <div className={styles.table_title}>
                <div className={styles.line}/>
                <div className={styles.title}>库表名称</div>
              </div>
              <div className={styles.table_names}>
                {
                  dataItem.database && dataItem.database.tables &&  dataItem.database.tables.map((table, index) => {
                    let flag = table.key === this.state.currentTable.key;
                    return (
                      <div
                        className={styles.name}
                        key={index}
                        style={{color: flag ? '#0068b7' : '#333333'}}
                        onClick={() => {
                          !flag && this.setState({ currentTable: table });
                        }}
                      >{table.tableName}</div>
                    )
                  })
                }
              </div>
            </div>
            <DataTable
              className={styles.item}
              title="库表详情"
              data={this.state.currentTable.fields}
              titleRightRender={() => {
                return(
                  <div className={styles.view} onClick={this.onClickTableDataView}>
                    <Iconfont type={'yulan'} className={styles.icon}/> <span>预览</span>
                  </div>
                )
              }}
              config={{
                serialNumber: { show: false },
                columns: [
                  { key: 'name', label: '字段名称', span: 4 },
                  { key: 'description', label: '字段描述', span: 4 },
                  { key: 'type', label: '字段类型', span: 4 },
                  { key: 'size', label: '字段长度', span: 4 },
                  { key: 'ifKey', label: '是否主键', span: 4 },
                  { key: 'ifNull', label: '是否非空', span: 4 },
                ]
              }}
            />
            <TableDataViewModal
              ref={ref => { this.tableViewModal = ref }}
              columnFields={this.state.currentTable.fields}
              data={this.state.currentTable.preview}
            />
          </div>
        )
      }
      case 'fileDownload': {
        if (!dataItem.authStatus) {
          return (
            <div className={styles.noAuth}>您目前没有权限查看该内容，请前往申请</div>
          )
        }
        return (
          <div>
            <DataTable
              title="文件数据下载"
              data={dataItem.files}
              config={{
                serialNumber: { show: false },
                columns: [
                  { key: 'name', label: '文件名称', span: 6 },
                  { key: 'contentType', label: '文件类型', span: 3 },
                  { key: 'source', label: '文件来源', span: 4 },
                  { key: 'publishTime', label: '发布时间', span: 5 },
                  { key: 'size', label: '大小', span: 3 },
                  { key: 'op', label: '操作', span: 3, render: (item) => {
                    return (
                      <div type={'flex'} align={'row'}>
                        <Tooltip placement="top" title={'下载'}>
                            <a><Icon type="download" theme="outlined" style={{ fontWeight: 'bold'}} /></a>
                        </Tooltip>
                        <Tooltip placement="top" title={'预览'}>
                          <a onClick={() => this.onClickFileView(item)}>
                            <Iconfont type={'yulan'} style={{ fontWeight: 'bold', marginLeft: 10}}/>
                          </a>
                        </Tooltip>
                      </div>
                    )
                  } },
                ]
              }}
            />
            <FileViewModal
              ref={ref => { this.fileViewModal = ref }}
              viewFile={this.state.viewFile}
            />
          </div>
        )
      }
      case 'interface': {
        if (!dataItem.authStatus) {
          return (
            <div className={styles.noAuth}>您目前没有权限查看该内容，请前往申请</div>
          )
        }
        return(
          <div className={styles.interface}>
            <DataItem
              className={styles.item}
              data={dataItem.interface}
              title="请求地址"
              config={{
                label: { span: 6},
                rows: [
                  {key: 'url', label: '请求地址',span: 18},
                ]
              }}
            />
            <DataTable
              className={styles.item}
              title="请求参数"
              data={dataItem.interface ? dataItem.interface.requestParams : []}
              config={{
                serialNumber: { show: false },
                columns: [
                  { key: 'name', label: '参数名称', span: 6 },
                  { key: 'type', label: '参数类型', span: 5 },
                  { key: 'require', label: '是否必填', span: 5 },
                  { key: 'description', label: '参数描述', span: 8 },
                ]
              }}
            />
            <DataTable
              className={styles.item}
              title="返回参数"
              data={dataItem.interface ? dataItem.interface.returnParams : []}
              config={{
                serialNumber: { show: false },
                columns: [
                  { key: 'name', label: '参数名称', span: 6 },
                  { key: 'description', label: '描述', span: 18 },
                ]
              }}
            />
            <DataTable
              className={styles.item}
              title="状态码"
              data={dataItem.interface ? dataItem.interface.statusCode : []}
              config={{
                serialNumber: { show: false },
                columns: [
                  { key: 'code', label: '状态码', span: 6 },
                  { key: 'description', label: '描述', span: 18 },
                ]
              }}
            />
            <div className={styles.interface_test}>
              <div className={styles.interface_test_title}>
                <div className={styles.line}/>
                <span className={styles.title}>接口测试</span>
              </div>
              <div className={styles.interface_params}>
                <div className={styles.label}>参数</div>
                <TextArea className={styles.params_ta} value={this.state.interfaceTestParams} onChange={(e)=>{this.setState({interfaceTestParams: e.target.value})}}/>
              </div>
              <Button className={styles.submit} size={'large'} onClick={()=>{
                try {
                  if(this.state.interfaceTestParams === ''){
                    throw '空参数'
                  } else {
                    let interfaceTestResult = JSON.stringify(JSON.parse(this.state.interfaceTestParams), null, 4);
                    this.setState({interfaceTestResult: JSON.stringify(JSON.parse('{"status":"success", "data":{}}'), null, 4)})
                  }
                } catch (e){
                  this.setState({interfaceTestResult: JSON.stringify(JSON.parse('{"status":"error"}'), null, 4)})
                }
              }}>提交</Button>
              {
                this.state.interfaceTestResult &&
                <div className={styles.interface_result}>
                  <div className={styles.label}>结果</div>
                  <div className={styles.result_view}>
                  <pre style={{width: '100%', height: '100%'}}>
                    {
                      this.state.interfaceTestResult
                    }
                  </pre>
                  </div>
                </div>
              }
            </div>
          </div>
        )
      }
      case 'message': {
        return (
          <div className={styles.message}>
            <div className={styles.publishBox}>
              <img src="/assets/message.png" alt=""/>
              <TextArea rows="3" className={styles.mInput}/>
              <div className={styles.publishOperation}>
                <Button type={'primary'} className={styles.publish}>发布</Button>
              </div>
            </div>
            <div className={styles.content}>
              {
                dataItem.messages && dataItem.messages.length > 0 ?
                dataItem.messages.map((msg, index) => {
                  return (<div key={index} className={styles.item}>
                    <div className={styles.top}>
                      <div className={styles.left}>{msg.user}[用户]</div>
                      <div className={styles.right}>{msg.createTime}</div>
                    </div>
                    <div className={styles.msgContent}>{msg.content}</div>
                  </div>)
                }) : '暂无留言'
              }
            </div>
          </div>
        )
      }
    }
  };
  render () {
    const {tabs, currentTabKey, dataItem} = this.state;
    return(
      <div className={styles.main}>
        <div className={styles.top}>
          <div className={styles.left}>
            <div className={styles.title}>
              <div className={styles.name}>{dataItem.title}</div>
              <div className={styles.rate}><Rate disabled defaultValue={dataItem.rate} /></div>
            </div>
            <div className={styles.number}>
              <Button className={styles.btn_1}>库表</Button>
              <Button className={styles.btn_folder}>文件夹</Button>
              <Button className={styles.btn_2}>文件</Button>
              <Button className={styles.btn_3}>接口</Button>
              <span>数据量：{dataItem.dataNum}</span>
              <span>文件数：{dataItem.fileNum}</span>
            </div>
          </div>
          <div className={styles.right}>
            <div className={classNames(styles.button, dataItem.authStatus ? styles.btn1 : styles.btn2)}>
              {
                dataItem.authStatus ?
                  <img src={dataItem.authStatus ? '/assets/icon/choose.png' : '/assets/icon/plus.png'}/>
                  :
                  <Iconfont type="plus" className={styles.icon} />
              }
              <span>{dataItem.authStatus ? '已授权' : '申请服务'}</span>
            </div>
            {
              dataItem.star ?
                <div className={styles.subscription} onClick={this.updateSubscription}>
                  <Iconfont type={'star-full'} className={styles.full_icon}/>
                  <span className={styles.full}>已订阅</span>
                </div>
                :
                <div className={styles.subscription} onClick={this.updateSubscription}>
                  <Iconfont type={'star'} className={styles.icon}/> <span>订阅</span>
                </div>
            }
          </div>
        </div>
        <div className={styles.catalog}>
          {
            tabs.map((tab, index) => {
              return (
                <span
                  key={index}
                  className={classNames(styles.label, tab.key === currentTabKey && styles.selectedLabel)}
                  onClick={() => {
                    tab.key !== currentTabKey && this.setState({ currentTabKey: tab.key })
                  }}
                >{tab.label}</span>
              )
            })
          }

        </div>
        {this.renderTabContent(dataItem)}
      </div>
    )
  }
}
