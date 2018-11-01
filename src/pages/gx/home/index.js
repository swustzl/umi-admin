import React, { Component } from 'react';
import {Carousel, Tabs, Button, Rate, Input} from 'antd';
import { routerRedux } from 'dva/router';
import { connect } from 'dva';
import Link from 'umi/link';
import classNames from 'classnames';
import styles from './index.less'
import CustomTitle from "../../../components/CustomTitle/index";
import MapChart from "../../../components/ReactChart/MapChart";
import { geoCoordMap } from '../util';
import ReactChart from "../../../components/ReactChart/index";
import DataList from "./components/DataList";
import UsedRank from "./components/UsedRank";
import DataDirectoryCard from "./components/DataDirectoryCard";
import PopoverSpan from "components/PopoverSpan";

const TabPane = Tabs.TabPane;
const Search = Input.Search;
const colors = ['#74c734','#00ced6','#f2c047','#f39b77','#4e9de2'];
@connect()
export default class extends Component {
  state = {
    r4_type: 'resource',
    r4_activeKey: 'bm',
    dtgg_activeKey: 'zcwj',
    r5_activeKey: 'gjbw',
    recommend_directory: [
      {id: '1', name: '自治区计生委_ 人口库', rate: 5},
      {id: '2', name: '自治区教育厅_高校学籍', rate: 5},
      {id: '3', name: '自治区林业厅_林业资源', rate: 5},
      {id: '4', name: '自治区农业厅_ 农业资源', rate: 4},
      {id: '5', name: '自治区发改委', rate: 4}
      ],
    hot_directory: [
      {id: '1', name: '自治区计生委_ 人口库', downloadNum: 91},
      {id: '2', name: '自治区教育厅_高校学籍', downloadNum: 82},
      {id: '3', name: '自治区林业厅_林业资源', downloadNum: 73},
      {id: '4', name: '自治区农业厅_ 农业资源', downloadNum: 64},
      {id: '5', name: '自治区发改委', downloadNum: 55}
    ],
    newest_directory: [
      {id: '1', name: '自治区计生委_ 人口库', publishTime: '9月30日'},
      {id: '2', name: '自治区教育厅_高校学籍', publishTime: '9月29日'},
      {id: '3', name: '自治区林业厅_林业资源', publishTime: '9月29日'},
      {id: '4', name: '自治区农业厅_ 农业资源', publishTime: '9月28日'},
      {id: '5', name: '自治区发改委', publishTime: '9月28日'}
    ],
    card_directory: {
      gjbw: [
        {id: '1', name: '全国人口', source: '民政部', data: 2132, publishTime: '2018-09-08'},
        {id: '2', name: '法人单位', source: '财政部', data: 2132, publishTime: '2018-09-08'},
        {id: '3', name: '自然和空间地理', source: '国土部', data: 2132, publishTime: '2018-09-08'},
        {id: '4', name: '社会信用', source: '发改委', data: 2132, publishTime: '2018-09-08'},
        {id: '5', name: '电子证照', source: '公安部', data: 2132, publishTime: '2018-09-08'},
      ],
      ws: [
        {id: '1', name: '国有土地房屋征收项目信息', source: '安徽省', data: 2132, publishTime: '2018-09-08'},
        {id: '2', name: '国有资本经营收入预算信息', source: '湖南省', data: 2132, publishTime: '2018-09-08'},
        {id: '3', name: '政府性基金收支执行平衡信息 ', source: '河南省', data: 2132, publishTime: '2018-09-08'},
        {id: '4', name: '城镇非私营单位分行业年末从业人员数', source: '山东省', data: 2132, publishTime: '2018-09-08'},
        {id: '5', name: '规模以上工业企业消费行业分类', source: '河南省', data: 2132, publishTime: '2018-09-08'},
      ],
      bzzq: [
        {id: '1', name: '地质灾害易发分区信息', source: '住建厅', data: 2132, publishTime: '2018-07-04'},
        {id: '2', name: '公共管理与公共服务用地基准地价', source: '国土厅', data: 2132, publishTime: '2018-09-08'},
        {id: '3', name: '国有资本经营收入预算信息', source: '财政厅', data: 2132, publishTime: '2018-09-08'},
        {id: '4', name: '文化宫活动及服务内容', source: '教育厅', data: 2132, publishTime: '2018-09-08'},
        {id: '5', name: '已记录的国家一级重点保护植物', source: '农业厅', data: 2132, publishTime: '2018-09-08'},
      ],
      sqs: [
        {id: '1', name: '市环境卫生检查考核通报', source: '北海市城管委', data: 2132, publishTime: '2018-09-08'},
        {id: '2', name: '市级园林式居住小区名录', source: '柳州市园林局', data: 2132, publishTime: '2018-09-08'},
        {id: '3', name: '城市道路基本信息', source: '南宁市市政局', data: 2132, publishTime: '2018-09-08'},
        {id: '4', name: '建设用地报征与批复', source: ' 钦州市国土局', data: 2132, publishTime: '2018-09-08'},
        {id: '5', name: '乡村旅游示范县、镇、村信息', source: '百色市旅游局', data: 2132, publishTime: '2018-09-08'},
      ],
    },
    r4_data: {
      resource: {
        department: [
          {name: '发改委', num: 52345},
          {name: '教育厅', num: 42345},
          {name: '公安厅', num: 42045},
          {name: '民政厅', num: 32305},
          {name: '财政厅', num: 32300},
          {name: '国土厅', num: 32123},
          {name: '环保厅', num: 21234},
          {name: '司法厅', num: 21222},
          {name: '交通厅', num: 20167},
          {name: '科技厅', num: 12345}
        ],
        area: [
          {name: '南宁市', value: 35000},
          {name: '桂林市', value: 32123},
          {name: '梧州市', value: 30150},
          {name: '柳州市', value: 28605},
          {name: '北海市', value: 22450},
          {name: '防城港市', value: 19050},
          {name: '玉林市', value: 18855},
          {name: '钦州市', value: 15420},
          {name: '百色市', value: 12850},
          {name: '贵港市', value: 10123},
          {name: '贺州市', value: 9800},
          {name: '河池市', value: 9510},
          {name: '来宾市', value: 8940},
          {name: '崇左市', value: 8500},
        ]
      },
      interface: {
        department: [
          {name: '发改委', num: 50345},
          {name: '教育厅', num: 48345},
          {name: '公安厅', num: 42045},
          {name: '民政厅', num: 40305},
          {name: '财政厅', num: 35300},
          {name: '国土厅', num: 32123},
          {name: '环保厅', num: 21234},
          {name: '司法厅', num: 20222},
          {name: '交通厅', num: 15167},
          {name: '科技厅', num: 12345}
        ],
        area: [
          {name: '南宁市', value: 35000},
          {name: '桂林市', value: 33123},
          {name: '梧州市', value: 30150},
          {name: '柳州市', value: 28105},
          {name: '北海市', value: 22450},
          {name: '防城港市', value: 19250},
          {name: '玉林市', value: 18055},
          {name: '钦州市', value: 15420},
          {name: '百色市', value: 12850},
          {name: '贵港市', value: 10123},
          {name: '贺州市', value: 9850},
          {name: '河池市', value: 9416},
          {name: '来宾市', value: 8540},
          {name: '崇左市', value: 8020},
        ]
      },
    },

  };
  onClickDTItem = () => {
    this.props.dispatch(routerRedux.push({
      pathname: `/gx/policy-basis/detail`,
    }))
  };
  onClickDirectoryItem = (item) => {
    this.props.dispatch(routerRedux.push({
      pathname: `/gx/shared-directory/detail/${item.id}`,
    }))
  };
  render() {
    const { r4_type } = this.state;
    return (
      <div className={styles.main}>
        <div className={styles.r1}>
          <div className={styles.carousel}>
            <Carousel autoplay={false}>
              <div className={styles.c_div}>
                <img src={'/assets/h-c1.jpg'}/>
                <div className={styles.c_title}>自治区党委政府召开数字广西建设大会 鹿心社陈武讲话</div>
              </div>
              <div className={styles.c_div}>
                <img src={'/assets/h-c2.jpg'}/>
                <div className={styles.c_title}>自治区政府与北京理工大学签署战略合作协议 陈武会见张军</div>
              </div>
              <div className={styles.c_div}>
                <img src={'/assets/h-c3.jpg'}/>
                <div className={styles.c_title}>陈武会见华能集团董事长曹培玺</div>
              </div>
              <div className={styles.c_div}>
                <img src={'/assets/h-c4.jpg'}/>
                <div className={styles.c_title}>自治区成立60周年庆祝活动筹委会：打好大庆筹备“百日攻坚战”</div>
              </div>
            </Carousel>
          </div>
          <div className={styles.gzdt}>
            <div className={styles.header_1}>
              <span className={styles.title}>动态公告</span>
              {this.state.dtgg_activeKey === 'zcwj' && <Link className={styles.more} to={'/gx/policy-basis'}>更多</Link>}
              {this.state.dtgg_activeKey === 'glzd' && <Link className={styles.more} to={'/gx/work-trend'}>更多</Link>}
              {this.state.dtgg_activeKey === 'jstz' && <Link className={styles.more} to={'/gx/work-trend'}>更多</Link>}
            </div>
            <Tabs className={styles.r1_dt_tabs} activeKey={this.state.dtgg_activeKey} onChange={(activeKey) => {this.setState({dtgg_activeKey: activeKey})}} >
              <TabPane tab="政策文件" key="zcwj">
                <ul>
                  <div className={styles.item} onClick={this.onClickDTItem}><span><li>自治区政府与北京理工大学签署战略合作协议 陈武会见张军</li></span><span>2018-08-31</span></div>
                  <div className={styles.item} onClick={this.onClickDTItem}><span><li>陈武会见华能集团董事长曹培玺</li></span><span>2018-08-31</span></div>
                  <div className={styles.item} onClick={this.onClickDTItem}><span><li>自治区成立60周年庆祝活动筹委会：打好大庆筹备“百日攻坚战”</li></span><span>2018-08-30</span></div>
                  <div className={styles.item} onClick={this.onClickDTItem}><span><li>自治区党委理论学习中心组：不断提高马克思主义理论素养</li></span><span>2018-08-29</span></div>
                  <div className={styles.item} onClick={this.onClickDTItem}><span><li>自治区党委常委会召开会议 鹿心社主持并讲话</li></span><span>2018-08-29</span></div>
                </ul>
              </TabPane>
              <TabPane tab="管理制度" key="glzd">
                <ul>
                  <div className={styles.item} onClick={this.onClickDTItem}><span><li>自治区党委政府召开数字广西建设大会 鹿心社陈武讲话</li></span><span>2018-08-31</span></div>
                  <div className={styles.item} onClick={this.onClickDTItem}><span><li>陈武会见华能集团董事长曹培玺</li></span><span>2018-08-31</span></div>
                  <div className={styles.item} onClick={this.onClickDTItem}><span><li>自治区成立60周年庆祝活动筹委会：打好大庆筹备“百日攻坚战”</li></span><span>2018-08-30</span></div>
                  <div className={styles.item} onClick={this.onClickDTItem}><span><li>自治区党委理论学习中心组：不断提高马克思主义理论素养</li></span><span>2018-08-29</span></div>
                  <div className={styles.item} onClick={this.onClickDTItem}><span><li>自治区党委常委会召开会议 鹿心社主持并讲话</li></span><span>2018-08-29</span></div>
                </ul>
              </TabPane>
              <TabPane tab="技术调整" key="jstz">
                <ul>
                  <div className={styles.item} onClick={this.onClickDTItem}><span><li>自治区党委政府召开数字广西建设大会 鹿心社陈武讲话</li></span><span>2018-08-31</span></div>
                  <div className={styles.item} onClick={this.onClickDTItem}><span><li>自治区政府与北京理工大学签署战略合作协议 陈武会见张军</li></span><span>2018-08-31</span></div>
                  <div className={styles.item} onClick={this.onClickDTItem}><span><li>陈武会见华能集团董事长曹培玺</li></span><span>2018-08-31</span></div>
                  <div className={styles.item} onClick={this.onClickDTItem}><span><li>自治区成立60周年庆祝活动筹委会：打好大庆筹备“百日攻坚战”</li></span><span>2018-08-30</span></div>
                  <div className={styles.item} onClick={this.onClickDTItem}><span><li>自治区党委常委会召开会议 鹿心社主持并讲话</li></span><span>2018-08-29</span></div>
                </ul>
              </TabPane>
            </Tabs>
          </div>
        </div>
        <div className={styles.r2}>
          <div className={styles.ng}>
            <div className={styles.title}>栏目导航板块</div>
            <div className={styles.search_div}><div className={styles.label}>全站搜索</div><Search placeholder={'请输入对应的关键文字'} className={styles.search}/></div>
            <div className={styles.ng_content}>
              <Link className={styles.ng_item} to={'/gx/home'}>
                <div className={styles.sj}/>
                <div className={styles.icon} style={{backgroundColor: '#4e9de2'}}><img src={'/assets/icon/ng-home.png'}/></div>
                <div className={styles.ng_text}>首页</div>
              </Link>
              <Link className={styles.ng_item} to={'/gx/shared-directory'}>
                <div className={styles.sj}/>
                <div className={styles.icon} style={{backgroundColor: '#f39b77'}}><img src={'/assets/icon/ng-mulu.png'}/></div>
                <div className={styles.ng_text}>政务资源目录</div>
              </Link>
              <Link className={styles.ng_item} to={'/gx/resource-use-manage'}>
                <div className={styles.sj}/>
                <div className={styles.icon} style={{backgroundColor: '#f0d06b'}}><img src={'/assets/icon/ng-manage.png'}/></div>
                <div className={styles.ng_text}>资源使用管理</div>
              </Link>
              <Link className={styles.ng_item} to={'/gx/platform-deployment'}>
                <div className={styles.sj}/>
                <div className={styles.icon} style={{backgroundColor: '#00ced6'}}><img src={'/assets/icon/ng-statistics.png'}/></div>
                <div className={styles.ng_text}>交换平台统计</div>
              </Link>
              <Link className={styles.ng_item} to={'/gx/shared-resource'}>
                <div className={styles.sj}/>
                <div className={styles.icon} style={{backgroundColor: '#a8e27b'}}><img src={'/assets/icon/ng-content-show.png'}/></div>
                <div className={styles.ng_text}>资源内容展示</div>
              </Link>
            </div>
          </div>
          <div className={styles.guide}>
            <div className={styles.title}>服务指引</div>
            <div className={styles.guide_content}>
              <div className={styles.row}>
                <div className={styles.guide_item} style={{padding: '0 20px 20px 0', borderWidth: '0 1px 1px 0'}}>
                  <img src={'/assets/icon/咨询.png'}/>
                  <span>咨询建议</span>
                </div>
                <div className={styles.guide_item} style={{padding: '0 0 20px 20px', borderWidth: '0 0 1px 1px'}}>
                  <img src={'/assets/icon/使用说明.png'}/>
                  <span>使用说明</span>
                </div>
              </div>
              <div className={styles.row}>
                <div className={styles.guide_item} style={{padding: '20px 20px 0 0', borderWidth: '1px 1px 0 0'}}>
                  <img src={'/assets/icon/操作手册.png'}/>
                  <span>操作手册</span>
                </div>
                <div className={styles.guide_item} style={{padding: '20px 0 0 20px', borderWidth: '1px 0 0 1px'}}>
                  <img src={'/assets/icon/开发文档.png'}/>
                  <span>开发文档</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*<div className={styles.r2}>
          <div className={styles.data}>
            <CustomTitle title="数据发布动态"/>
            <div className={styles.data_content}>
              <div className={styles.item}>（北海市）发布了一个接口资源  2018-07-08 12:21:23</div>
              <div className={styles.item}>（防城港市）发布了一个文件资源  2018-07-08 12:21:23</div>
              <div className={styles.item}>（玉林市）发布了一个文件资源  2018-07-08 12:21:23</div>
              <div className={styles.item}>（自治区公安厅）发布了一个库表资源  2018-07-08 12:21:23</div>
              <div className={styles.item}>（南宁发改委）发布了一个接口资源  2018-07-08 12:21:23</div>
              <div className={styles.item}>（玉林市）发布了一个库表资源  2018-07-08 12:21:23</div>
              <div className={styles.item}>（自治区公安厅）发布了一个文件资源  2018-07-08 12:21:23</div>
            </div>
          </div>
          <div className={styles.data}>
            <CustomTitle title="典型案例"/>
            <div className={styles.data_content}>
              <div className={styles.item}>【广西壮族自治区】实现了“一般工商业用电价格平均降低10%”目标</div>
              <div className={styles.item}>【贺州市】加快“东融”步伐观察，发展大旅游</div>
              <div className={styles.item}>【钦州市】保税港区通关流程“去繁就简”</div>
              <div className={styles.item}>【桂林市】旅游综合医院项目进展顺利</div>
              <div className={styles.item}>【防城港市】打造向海经济，构建临港产业集群</div>
              <div className={styles.item}>【南宁市】铁路物流中心开通运营</div>
              <div className={styles.item}>【北海市】市政协督办重点提案</div>
            </div>
          </div>
        </div>*/}
        <div className={styles.r5}>
          <CustomTitle title="政务信息数据目录"/>
          <Tabs activeKey={this.state.r5_activeKey} onChange={(activeKey) => {this.setState({r5_activeKey: activeKey})}} className={styles.r5_tabs} tabBarExtraContent={<Search className={styles.search} placeholder={'请输入对应的关键文字'}/>}>
            <TabPane tab="国家部委" key="gjbw">
              <div className={styles.r5_content}>
                <div className={styles.more_div}><span className={styles.more}>更多</span></div>
                <div className={styles.cards}>
                  {
                    this.state.card_directory[this.state.r5_activeKey] &&  this.state.card_directory[this.state.r5_activeKey].map((item, index) => {
                      return(<DataDirectoryCard key={index} color={colors[index % 5]} data={item} onClick={()=>{this.onClickDirectoryItem(item)}}/>)
                    })
                  }
                </div>
              </div>
            </TabPane>
            <TabPane tab="外省" key="ws">
              <div className={styles.r5_content}>
                <div className={styles.more_div}><span className={styles.more}>更多</span></div>
                <div className={styles.cards}>
                  {
                    this.state.card_directory[this.state.r5_activeKey] &&  this.state.card_directory[this.state.r5_activeKey].map((item, index) => {
                      return(<DataDirectoryCard key={index} color={colors[index % 5]} data={item} onClick={()=>{this.onClickDirectoryItem(item)}}/>)
                    })
                  }
                </div>
              </div>
            </TabPane>
            <TabPane tab="本自治区" key="bzzq">
              <div className={styles.r5_content}>
                <div className={styles.more_div}><span className={styles.more}>更多</span></div>
                <div className={styles.cards}>
                  {
                    this.state.card_directory[this.state.r5_activeKey] &&  this.state.card_directory[this.state.r5_activeKey].map((item, index) => {
                      return(<DataDirectoryCard key={index} color={colors[index % 5]} data={item} onClick={()=>{this.onClickDirectoryItem(item)}}/>)
                    })
                  }
                </div>
              </div>
            </TabPane>
            <TabPane tab="设区市" key="sqs">
              <div className={styles.r5_content}>
                <div className={styles.more_div}><span className={styles.more}>更多</span></div>
                <div className={styles.cards}>
                  {
                    this.state.card_directory[this.state.r5_activeKey] &&  this.state.card_directory[this.state.r5_activeKey].map((item, index) => {
                      return(<DataDirectoryCard key={index} color={colors[index % 5]} data={item} onClick={()=>{this.onClickDirectoryItem(item)}}/>)
                    })
                  }
                </div>
              </div>
            </TabPane>
          </Tabs>
        </div>
        <div className={styles.r3}>
          <CustomTitle title="共享平台目录情况"/>
          <div className={styles.r3_content}>
            <DataList
              className={styles.cdata}
              title={'推荐目录列表'}
              titleRightRender={()=>'评分'}
              data={this.state.recommend_directory}
              config={{
                columns: [
                  {key: 'name', span: 14, render: (item)=>{return(<div style={{ cursor: 'pointer'}} onClick={()=>{this.onClickDirectoryItem(item)}}><PopoverSpan data={item.name}/></div>)}},
                  {key: 'rate', span: 10, render: (item) => {
                    return(
                      <div className={styles.item_con2}>
                        <Rate disabled defaultValue={item.rate} />
                      </div>
                    );
                  }},
                ],
              }}
            />
            <DataList
              className={styles.cdata}
              title={'热门目录列表'}
              titleRightRender={()=>'下载次数'}
              data={this.state.hot_directory}
              config={{
                columns: [
                  {key: 'name', span: 14, render: (item)=>{return(<div style={{ cursor: 'pointer'}} onClick={()=>{this.onClickDirectoryItem(item)}}><PopoverSpan data={item.name}/></div>)}},
                  {key: 'downloadNum', span: 10, render: (item) => {
                    return(
                      <div className={styles.item_con2}>
                        {item.downloadNum}次
                      </div>
                    );
                  }},
                ],
              }}
            />
            <DataList
              className={styles.cdata}
              title={'最新目录列表'}
              titleRightRender={()=>'发布时间'}
              data={this.state.newest_directory}
              config={{
                columns: [
                  {key: 'name', span: 14, render: (item)=>{return(<div style={{ cursor: 'pointer'}} onClick={()=>{this.onClickDirectoryItem(item)}}><PopoverSpan data={item.name}/></div>)}},
                  {key: 'publishTime', span: 10, render: (item) => {
                    return(
                      <div className={styles.item_con2}>
                        {item.publishTime}
                      </div>
                    );
                  }},
                ],
              }}
            />
          </div>
        </div>
        <div className={styles.r4}>
          <CustomTitle title="政务信息共享分布"/>
          <Tabs activeKey={this.state.r4_activeKey} className={styles.r4_tabs} onChange={(activeKey) => {this.setState({r4_activeKey: activeKey})}}>
            <TabPane tab="部门数据调用情况" key="bm">
              <div className={styles.r4_content}>
                <div className={styles.btns}>
                  <Button className={classNames(styles.btn, r4_type === 'resource' && styles.choose_btn)} onClick={() => {this.bmRef && this.bmRef.resetRender(); this.setState({ r4_type: 'resource' })}}>资源分布情况</Button>
                  <Button className={classNames(styles.btn, r4_type === 'interface' && styles.choose_btn)} onClick={() => {this.bmRef && this.bmRef.resetRender(); this.setState({ r4_type: 'interface' })}}>接口分布情况</Button>
                </div>
                <div className={styles.left}>
                  <div className={styles.top}>
                    <div className={styles.title}>部门数据调用情况统计</div>
                    <div className={styles.date}>截止统计时间 2018-08-23 12:23</div>
                  </div>
                  <div className={styles.bottom}>
                    <div className={styles.charts}>
                      <ReactChart
                        width="787px"
                        height="485px"
                        ref={ref => this.bmRef = ref}
                        config={{
                          color: ['#60d4ff'],
                          tooltip : {
                            trigger: 'axis',
                            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                              type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                            }
                          },
                          grid: {
                            left: '3%',
                            right: '4%',
                            bottom: '10%',
                            top: '25%',
                            containLabel: true
                          },
                          xAxis : [
                            {
                              type : 'category',
                              data : this.state.r4_data[this.state.r4_type].department.map(d => d.name),
                              axisTick: {
                                alignWithLabel: true
                              },
                              axisLabel: {
                                interval: 0,
                                rotate: -30,
                              },
                              axisLine: {
                                lineStyle: {
                                  color: '#555555'
                                }
                              },
                            }
                          ],
                          yAxis : [
                            {
                              type : 'value',
                              name: '数据量 万/条',
                              axisLabel: {
                                formatter: (value, index) => value/10000
                              },
                              axisLine: {
                                lineStyle: {
                                  color: '#666666'
                                },
                              },
                              nameTextStyle: {
                                color: '#555555'
                              }
                            }
                          ],
                          series : [
                            {
                              name:'数量',
                              type:'bar',
                              barWidth: '45%',
                              data:this.state.r4_data[this.state.r4_type].department.map(d => d.num),
                              itemStyle: {
                                normal:{
                                  color: function (params){
                                    return params.dataIndex % 2 === 0 ? '#60d4ff' : '#3e6578'
                                  }
                                },
                              }
                            }
                          ]
                        }}
                      />
                    </div>
                  </div>
                </div>
                <UsedRank
                  title={'部门数据调用情况排名'}
                  config={{columns: [
                    {label: '数据资源名称', key: 'name'},
                    {label: '调用次数', key: 'num'},
                    ]}}
                  data={this.state.r4_data[this.state.r4_type].department}
                />
              </div>
            </TabPane>
            <TabPane tab="地方调用情况" key="df">
              <div className={styles.r4_content}>
                <div className={styles.btns}>
                  <Button className={classNames(styles.btn, r4_type === 'resource' && styles.choose_btn)} onClick={() => {this.dfMapRef && this.dfMapRef.resetRender(); this.setState({ r4_type: 'resource' })}}>资源分布情况</Button>
                  <Button className={classNames(styles.btn, r4_type === 'interface' && styles.choose_btn)} onClick={() => {this.dfMapRef && this.dfMapRef.resetRender();this.setState({ r4_type: 'interface' })}}>接口分布情况</Button>
                </div>
                <div className={styles.left}>
                  <div className={styles.top}>
                    <div className={styles.title}>地方调用情况统计</div>
                    <div className={styles.date}>截止统计时间 2018-08-23 12:23</div>
                  </div>
                  <div className={styles.bottom}>
                    <div className={styles.charts}>
                      <MapChart
                        ref={ref => this.dfMapRef = ref}
                        config={{
                          geo: {
                            map: 'GX',
                            left: 10,
                            right:20,
                            top: 10,
                            bottom: 20,
                            itemStyle: {
                              normal: {
                                borderColor: '#fff'//'rgba(0,159,232,0.9)',//区域边框颜色
                              }
                            },
                          },

                          visualMap: [{
                            min: 8000,
                            max: 35000,
                            left: 20,
                            text:['高','低'],
                            inRange: {
                              color: ['rgba(0,159,255, 0.1)','rgba(0,159,255, 0.5)']
                              //color: ['rgb(235,237,234)','rgb(232,236,211)','rgb(251,232,218)','rgb(247,241,188)','rgb(242,228,227)']
                            },
                            show: true
                          }],

                          series: [
                            {
                              left: 10,
                              right: 20,
                              top: 10,
                              bottom: 20,
                              type: 'map',
                              map: 'GX', // 自定义扩展图表类型
                              emphasis: {
                                label: {
                                  show: false,
                                },
                                /*itemStyle:{
                                  areaColor: 'red',
                                }*/
                              },
                              itemStyle: {
                                normal: {
                                  borderColor: '#fff'//'rgba(0,159,232,0.9)',//区域边框颜色
                                }
                              },
                              data: this.state.r4_data[this.state.r4_type].area,
                            },
                            {
                              type: 'scatter',
                              coordinateSystem: 'geo',
                              itemStyle: {
                                normal: {
                                  color: '#f4e925',
                                  shadowBlur: 10,
                                  shadowColor: '#333',
                                }
                              },
                              markPoint: {
                                itemStyle: {
                                  normal: {
                                    color: 'rgb(228,0,127)'
                                  }
                                },
                                symbol: 'circle',
                                symbolSize: 15,
                                //symbolOffset: ['50%', '50%'],
                                label: {
                                  normal: {
                                    formatter: '{b}',
                                    position: 'right',
                                    show: true,
                                    color: '#606060'
                                  }
                                },
                                data: [
                                  {name: '南宁市', coord: geoCoordMap['南宁市']},
                                  {name: '柳州市', coord: geoCoordMap['柳州市']},
                                  {name: '桂林市', coord: geoCoordMap['桂林市']},
                                  {name: '梧州市', coord: geoCoordMap['梧州市']},
                                  {name: '北海市', coord: geoCoordMap['北海市']},
                                  {name: '防城港市', coord: geoCoordMap['防城港市']},
                                  {name: '钦州市', coord: geoCoordMap['钦州市']},
                                  {name: '贵港市', coord: geoCoordMap['贵港市']},
                                  {name: '玉林市', coord: geoCoordMap['玉林市']},
                                  {name: '百色市', coord: geoCoordMap['百色市']},
                                  {name: '贺州市', coord: geoCoordMap['贺州市']},
                                  {name: '河池市', coord: geoCoordMap['河池市']},
                                  {name: '来宾市', coord: geoCoordMap['来宾市']},
                                  {name: '崇左市', coord: geoCoordMap['崇左市']},
                                ]
                              }
                            }
                          ]
                        }}
                        width="787px"
                        height="485px"
                      />
                    </div>
                  </div>
                </div>
                <UsedRank
                  title={'地方调用情况排名'}
                  config={{columns: [
                    {label: '名称', key: 'name'},
                    {label: '调用次数', key: 'value'},
                  ]}}
                  data={this.state.r4_data[this.state.r4_type].area}
                />
              </div>
            </TabPane>
          </Tabs>
        </div>
        <div className={styles.r6}>
          <CustomTitle title="交换平台统计"/>
          <div className={styles.r6_content}>
            <img src={'/assets/交换系统三级体系图.png'}/>
          </div>
        </div>
      </div>
    );
  }
}
