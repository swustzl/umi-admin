import React from 'react';
import { Input, Pagination, Rate, Row, Col, Button, Icon, Select } from 'antd';
import classNames from 'classnames';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import { mapStateToProps } from '../../../utils/util';
import styles from './index.less'
import Iconfont from "../../../components/Iconfont/Iconfont";
import SwitchArea from "./components/SwitchArea";

const Search = Input.Search;
const Option = Select.Option;

@connect(mapStateToProps('sharedDirectory'))
export default class extends React.Component{
  state = {
    pageNumber: 1,
    currentDSKey: '',
    currentAreaKey: 'bzzq',
    basicInfoShow: true,
    basicInfoMore: false,
    basicInfoRes: [
      { key: 'b1', name: '人口基础信息', num: 2 },
      { key: 'b2', name: '法人单位基础信息', num: 21 },
      { key: 'b3', name: '资源和空间地理基础信息', num: 12 },
      { key: 'b4', name: '电子证照基础信息', num: 4 },
      { key: 'b5', name: '宏观经济基础信息', num: 7 },
    ],
    themeInfoShow: true,
    themeInfoMore: false,
    themeInfoRes: [
      { key: 't1', name: '全民健康保障信息', num: 4 },
      { key: 't2', name: '全民住房保障信息', num: 27 },
      { key: 't3', name: '全民社会保障信息', num: 34 },
      { key: 't4', name: '药品安全监督信息', num: 5 },
      { key: 't5', name: '食品安全监管信息', num: 7 },
      { key: 't6', name: '安全生产监督信息', num: 2 },
      { key: 't7', name: '市场价格监管信息', num: 2 },
      { key: 't8', name: '能源安全保障信息', num: 2 },
      { key: 't9', name: '信用体系建设信息', num: 2 },
      { key: 't10', name: '生态环境保护', num: 2 },
      { key: 't11', name: '应急维稳保障（综合应急）', num: 2 },
      { key: 't12', name: '行政执法监督', num: 2 },
      { key: 't13', name: '投资审批（招商引资）', num: 2 },
      { key: 't14', name: '金融监管', num: 2 },
      { key: 't15', name: '城市运行全景图', num: 2 },
      { key: 't16', name: '事件分析', num: 2 },
      { key: 't17', name: '教育专题', num: 3 },
      { key: 't18', name: '运行特征', num: 21 },
    ],
    departmentInfoShow: true,
    departmentInfoMore: false,
    departmentInfoRes: [
      { key: 'd1', name: '机关', num: 2 },
      { key: 'd2', name: '事业单位', num: 3 },
      { key: 'd3', name: '企业单位', num: 4 },
      { key: 'd4', name: '社会团体', num: 5 },
    ],
    filterSetting: {
      key: [
        { key: 'noLimit', label: '不限' },
        { key: '1', label: '财税金融' },
        { key: '2', label: '信用服务' },
        { key: '3', label: '城镇住房' },
        { key: '4', label: '教育文化' },
        { key: '5', label: '生活服务' },
        { key: '6', label: '医疗卫生' },
        { key: '7', label: '市场监管' },
        { key: '8', label: '工业农业' },
        { key: '9', label: '社会救助' },
        { key: '10', label: '机构团队' },
        { key: '11', label: '生态环境' },
        { key: '12', label: '法律服务' },
        { key: '13', label: '资源能源' },
        { key: '14', label: '安全生产' },
        { key: '15', label: '气象服务' },
        { key: '16', label: '其他' },
      ],
      keyMore: false,
      type: [
        { key: 'noLimit', label: '不限' },
        { key: '1', label: '库表' },
        { key: '2', label: '文件' },
        { key: '3', label: '文件夹' },
        { key: '4', label: '接口' },
      ],
      area: {
        gjbw: [
          { key: 'noLimit', label: '不限' },
          { key: '1', label: '外交部' },
          { key: '2', label: '国防部' },
          { key: '3', label: '发展改革委' },
          { key: '4', label: '教育部' },
          { key: '5', label: '科技部' },
          { key: '6', label: '工业和信息化部' },
          { key: '7', label: '国家民委' },
          { key: '8', label: '公安部' },
          { key: '9', label: '监察部' },
          { key: '10', label: '民政部' },
          { key: '11', label: '司法部' },
          { key: '12', label: '财政部' },
          { key: '13', label: '人力资源社会保障部' },
          { key: '14', label: '国土资源部' },
          { key: '15', label: '环境保护部' },
          { key: '16', label: '住房城乡建设部' },
          { key: '17', label: '交通运输部' },
          { key: '18', label: '水利部' },
          { key: '19', label: '农业部' },
          { key: '20', label: '商务部' },
          { key: '21', label: '文化部' },
          { key: '22', label: '卫生计生委' },
          { key: '23', label: '人民银行' },
          { key: '24', label: '审计署' },
          { key: '25', label: '国家语委' },
          { key: '26', label: '航天局' },
          { key: '27', label: '原子能机构' },
          { key: '28', label: '核安全局' },
        ],
        gjbw_limit: 11,
        ws: [
          { key: 'noLimit', label: '不限' },
          { key: '1', label: '河南'},
          { key: '2', label: '河北'},
          { key: '3', label: '北京'},
          { key: '4', label: '天津'},
          { key: '5', label: '山东'},
          { key: '6', label: '山西'},
          { key: '7', label: '黑龙江'},
          { key: '8', label: '吉林'},
          { key: '9', label: '辽宁'},
          { key: '10', label: '浙江'},
          { key: '11', label: '江苏'},
          { key: '12', label: '上海'},
          { key: '13', label: '安徽'},
          { key: '14', label: '江西'},
          { key: '15', label: '湖南'},
          { key: '16', label: '湖北'},
          { key: '17', label: '新疆'},
          { key: '18', label: '云南'},
          { key: '19', label: '贵州'},
          { key: '20', label: '福建'},
          { key: '21', label: '台湾'},
          { key: '22', label: '宁夏'},
          { key: '23', label: '西藏'},
          { key: '24', label: '四川'},
          { key: '25', label: '重庆'},
          { key: '26', label: '内蒙古'},
          { key: '27', label: '广西'},
          { key: '28', label: '海南'},
          { key: '29', label: '青海'},
          { key: '30', label: '甘肃'},
          { key: '31', label: '陕西'},
          { key: '32', label: '广东'},
          { key: '33', label: '香港'},
          { key: '34', label: '澳门'},
        ],
        ws_limit: 17,
        bzzq: [
          { key: 'noLimit', label: '不限' },
          { key: '1', label: '发改委' },
          { key: '2', label: '工信委' },
          { key: '3', label: '教育厅' },
          { key: '4', label: '科技厅' },
          { key: '5', label: '公安厅' },
          { key: '6', label: '监察厅' },
          { key: '7', label: '民政厅' },
          { key: '8', label: '司法厅' },
          { key: '9', label: '财政厅' },
          { key: '10', label: '人社厅' },
          { key: '11', label: '国土厅' },
          { key: '12', label: '环保厅' },
          { key: '13', label: '住建厅' },
          { key: '14', label: '交通厅' },
          { key: '15', label: '水利厅' },
          { key: '16', label: '农业厅' },
          { key: '17', label: '林业厅' },
          { key: '18', label: '商务厅' },
          { key: '19', label: '文化厅' },
        ],
        bzzq_limit: 13,
        sqs: [
          { key: 'noLimit', label: '不限' },
          { key: '1', label: '南宁市'},
          { key: '2', label: '柳州市'},
          { key: '3', label: '桂林市'},
          { key: '4', label: '梧州市'},
          { key: '5', label: '北海市'},
          { key: '6', label: '防城港市'},
          { key: '7', label: '钦州市'},
          { key: '8', label: '贵港市'},
          { key: '9', label: '玉林市'},
          { key: '10', label: '百色市'},
          { key: '11', label: '贺州市'},
          { key: '12', label: '河池市'},
          { key: '13', label: '来宾市'},
          { key: '14', label: '崇左市'},
        ],
        sqs_limit: 13,
      },
      areaMore: false,
    },
    filterCondition: {
      key: 'noLimit',
      type: 'noLimit',
      area: 'noLimit',
      search: '',
    },
  };
  onClickContentItem = (id) => {
    this.props.dispatch(routerRedux.push({
      pathname: `/gx/shared-directory/${id}`,
    }))
  };
  updateSubscription = (id) => {
    this.props.dispatch({
      type: 'sharedDirectory/updateSubscription',
      payload: {id}
    })
  };
  render(){
    const { sharedDirectory = {} } = this.props;
    const { pageNumber = 1, filterSetting, filterCondition } = this.state;
    let { data = [] } = sharedDirectory;
    data = data.filter((o) => !o.title || o.title.includes(filterCondition.search));
    const showData = data.filter((d, index) => index >= (pageNumber-1) * 6 && index < pageNumber * 6);
    return(
      <div className={styles.main}>
        <SwitchArea
          style={{width: '325px'}}
          content={[{key: 'gjbw', label: '国家部委'},{key: 'ws', label: '外省'},{key: 'sqs', label: '设区市'},{key: 'bzzq', label: '广西壮族自治区'}]}
          currentKey={this.state.currentAreaKey}
          callback={(item) => { this.setState({ currentAreaKey: item.key })}}
        />
        <div className={styles.main_content}>
          <div className={styles.data_ds}>
            <div className={styles.title}>数据目录</div>
            <div className={styles.num}>346</div>
            <div className={styles.sorts}>
              <div className={styles.sort_label}>排序:</div>
              <div className={styles.sort_btn}><span>时间顺序</span><Iconfont type={'paixujiangxu'} style={{ fontSize: '18px', marginLeft: '3px' }}/></div>
            </div>
            <Search
              className={styles.search}
              placeholder="请输入对应的关键文字"
              onPressEnter={(e) => {
                let condition = this.state.filterCondition;
                condition.search = e.target.value;
                this.setState({
                  filterCondition: {
                    ...condition,
                  }
                })
              }}
            />
            <div className={styles.highSearch}><span>高级搜索</span></div>
            <div className={styles.typeGroup}>
              <div className={styles.label}>
                <span>基础信息资源</span>
                <span className={styles.show} onClick={()=>{ this.setState({ basicInfoShow: !this.state.basicInfoShow, basicInfoMore: false})}}>
                {
                  this.state.basicInfoShow ? <Icon type="up" theme="outlined" /> : <Icon type="down" theme="outlined" />
                }
              </span>
              </div>
              {
                this.state.basicInfoShow && this.state.basicInfoRes.map((item, index) => {
                  let style = {};
                  if(item.key === this.state.currentDSKey) {
                    style.color = '#333333';
                    style.backgroundColor = 'rgba(52,152,219,0.3)'
                  }
                  if (index < 6 || this.state.basicInfoMore) {
                    return (
                      <div key={index} className={styles.item} style={style} onClick={() => {this.setState({currentDSKey: item.key})}}>
                        <span className={styles.name}>{item.name}</span>
                        <span>{item.num}</span>
                      </div>
                    )
                  } else if(index === 6) {
                    return (
                      <div key={index} className={styles.item} onClick={() => {this.setState({basicInfoMore: true})}}>
                        <div className={styles.more}>查看更多</div>
                      </div>
                    )
                  }
                  return null;
                })
              }
            </div>
            <div className={styles.typeGroup}>
              <div className={styles.label}>
                <span>主题信息资源</span>
                <span className={styles.show} onClick={()=>{ this.setState({ themeInfoShow: !this.state.themeInfoShow, themeInfoMore: false})}}>
                {
                  this.state.themeInfoShow ? <Icon type="up" theme="outlined" /> : <Icon type="down" theme="outlined" />
                }
              </span>
              </div>
              {
                this.state.themeInfoShow && this.state.themeInfoRes.map((item, index) => {
                  let style = {};
                  if(item.key === this.state.currentDSKey) {
                    style.color = '#333333';
                    style.backgroundColor = 'rgba(52,152,219,0.3)'
                  }
                  if(index < 6 || this.state.themeInfoMore) {
                    return (
                      <div key={index} className={styles.item} style={style} onClick={() => {this.setState({currentDSKey: item.key})}}>
                        <span className={styles.name}>{item.name}</span>
                        <span>{item.num}</span>
                      </div>
                    )
                  }else if(index === 6) {
                    return (
                      <div key={index} className={styles.item} onClick={() => {this.setState({themeInfoMore: true})}}>
                        <div className={styles.more}>查看更多</div>
                      </div>
                    )
                  }
                  return null;
                })
              }
            </div>
            <div className={styles.typeGroup}>
              <div className={styles.label}>
                <span>部门信息资源</span>
                <span className={styles.show} onClick={()=>{ this.setState({ departmentInfoShow: !this.state.departmentInfoShow, departmentInfoMore: false})}}>
                {
                  this.state.departmentInfoShow ? <Icon type="up" theme="outlined" /> : <Icon type="down" theme="outlined" />
                }
              </span>
              </div>
              {
                this.state.departmentInfoShow && this.state.departmentInfoRes.map((item, index) => {
                  let style = {};
                  if(item.key === this.state.currentDSKey) {
                    style.color = '#333333';
                    style.backgroundColor = 'rgba(52,152,219,0.3)'
                  }
                  if(index < 6 || this.state.departmentInfoMore) {
                    return (
                      <div key={index} className={styles.item} style={style} onClick={() => {this.setState({currentDSKey: item.key})}}>
                        <span className={styles.name}>{item.name}</span>
                        <span>{item.num}</span>
                      </div>
                    )
                  }else if(index === 6) {
                    return (
                      <div key={index} className={styles.item} onClick={() => {this.setState({departmentInfoMore: true})}}>
                        <div className={styles.more}>查看更多</div>
                      </div>
                    )
                  }
                  return null;
                })
              }
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.classification}>
              <Row className={styles.row}>
                <Col span={2} className={styles.label}><span>主</span>题: </Col>
                <Col span={20} className={styles.l_cont}>
                  {
                    filterSetting.key.map((item, index) => {
                      if(!filterSetting.keyMore && index > 9) {
                        return null
                      }
                      let style = {};
                      if (filterCondition.key === item.key){
                        style.color = '#333333';
                      }
                      return (
                        <span
                          key={index}
                          className={styles.lab}
                          style={style}
                          onClick={() => {
                            let condition = this.state.filterCondition;
                            condition.key = item.key;
                            this.setState({
                              filterCondition: {
                                ...condition,
                              }
                            })
                          }}
                        >
                        {item.label}
                      </span>
                      )
                    })
                  }
                </Col>
                <Col span={2}>
                  {
                    filterSetting.keyMore ?
                      <span
                        className={styles.more}
                        onClick={() => {
                          let fs = this.state.filterSetting;
                          fs.keyMore = false;
                          this.setState({ filterSetting: fs })
                        }}
                      >收起<Icon type="up" theme="outlined" /></span>
                      :
                      <span
                        className={styles.more}
                        onClick={() => {
                          let fs = this.state.filterSetting;
                          fs.keyMore = true;
                          this.setState({ filterSetting: fs })
                        }}
                      >更多<Icon type="down" theme="outlined" /></span>
                  }
                </Col>
              </Row>
              <Row className={styles.row}>
                <Col span={2} className={styles.label}><span>类</span>型: </Col>
                <Col span={20} className={styles.l_cont}>
                  {
                    filterSetting.type.map((item, index) => {
                      let style = {}
                      if (filterCondition.type === item.key){
                        style.color = '#333333';
                      }
                      return (<span
                        key={index}
                        className={styles.lab}
                        style={style}
                        onClick={() => {
                          let condition = this.state.filterCondition;
                          condition.type = item.key;
                          this.setState({
                            filterCondition: {
                              ...condition,
                            }
                          })
                        }}
                      >{item.label}</span>)
                    })
                  }
                </Col>
              </Row>
              <Row className={styles.row}>
                {
                  ['ws','sqs'].includes(this.state.currentAreaKey) ?
                    <Col span={2} className={styles.label}><span>区</span>域: </Col>
                    :
                    <Col span={2} className={styles.label}><span>部</span>门: </Col>
                }
                <Col span={20} className={styles.l_cont}>
                  {
                    filterSetting.area[this.state.currentAreaKey] && filterSetting.area[this.state.currentAreaKey].map((item, index) => {
                      if(!filterSetting.areaMore && index > filterSetting.area[`${this.state.currentAreaKey}_limit`] -1) {
                        return null
                      }
                      let style = {};
                      if (filterCondition.area === item.key){
                        style.color = '#333333';
                      }
                      return (
                        <span
                          key={index}
                          className={styles.lab}
                          style={style}
                          onClick={() => {
                            let condition = this.state.filterCondition;
                            condition.area = item.key;
                            this.setState({
                              filterCondition: {
                                ...condition,
                              }
                            })
                          }}
                        >
                        {item.label}
                      </span>
                      )
                    })
                  }
                </Col>
                <Col span={2}>
                  {
                    filterSetting.areaMore ?
                      <span
                        className={styles.more}
                        onClick={() => {
                          let fs = this.state.filterSetting;
                          fs.areaMore = false;
                          this.setState({ filterSetting: fs })
                        }}
                      >收起<Icon type="up" theme="outlined" /></span>
                      :
                      <span
                        className={styles.more}
                        onClick={() => {
                          let fs = this.state.filterSetting;
                          fs.areaMore = true;
                          this.setState({ filterSetting: fs })
                        }}
                      >更多<Icon type="down" theme="outlined" /></span>
                  }
                </Col>
              </Row>
            </div>

            {
              showData.map((item, index) => {
                return (
                  <div key={index} className={styles.content_item}>
                    <div className={styles.col_1}>
                      <div className={styles.c_title} onClick={() => this.onClickContentItem(item.id)}>{item.title}</div>
                      <div className={styles.c_rate}><Rate disabled defaultValue={item.rate} /></div>
                      <div className={styles.c_sources}><div className={styles.icon}/>来源：{item.source}</div>
                    </div>
                    <div className={styles.col_2}>
                      <div className={styles.c_belong}>所属主题：{item.subject}</div>
                      <div className={styles.c_dataNum}>数据量：{item.dataNum}  文件数：{item.fileNum}</div>
                      <div className={styles.update_time}>更新时间：{item.updateTime}</div>
                    </div>
                    <div className={styles.col_3}>
                      <div className={styles.c_btns}>
                        <Button className={styles.btn_1}>库表</Button>
                        {
                          item.fileNum ?
                            <Button className={styles.btn_2}>文件</Button> : null
                        }
                        {
                          item.folders && item.folders.length > 0 &&
                            <Button className={styles.btn_folder}>文件夹</Button>
                        }
                        <Button className={styles.btn_3}>接口</Button>
                      </div>
                      <div className={styles.c_action}>
                        {
                          item.fileNum ?
                            <div className={styles.download}>
                              <Iconfont type={'xiazai'} className={styles.icon}/>
                              文件下载
                            </div> : null
                        }
                        {
                          item.star ?
                            <div className={styles.subscription} onClick={() => this.updateSubscription(item.id)}>
                              <Iconfont type={'star-full'} className={styles.full_icon}/>
                              <span className={styles.full}>已订阅</span>
                            </div>
                            :
                            <div className={styles.subscription} onClick={() => this.updateSubscription(item.id)}>
                              <Iconfont type={'star'} className={styles.icon}/> <span>订阅</span>
                            </div>
                        }
                        <div className={styles.message}>
                          留言(<span>{item.messageLength}</span>)
                        </div>
                      </div>
                    </div>
                  </div>
                );
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
        </div>
      </div>
    )
  }
}
