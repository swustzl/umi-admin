import React from 'react';
import classNames from 'classnames';
import {Row, Col} from 'antd';
import styles from './index.less';
import NumberView from "./components/NumberView";
import Iconfont from "components/Iconfont/Iconfont";
import DataTable from "./components/DataTable";
import ReactChart from "components/ReactChart/index";
import MapChart from "components/ReactChart/MapChart";
import { geoCoordMap } from '../util';
import Battery from "components/Battery/index";
import CustomDataTable from "./components/CustomDataTable";

export default class extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      number: 1250476,
      runtime: 523456,
      runtimeStr: this.calcRunTime(523456),
      keyWord: [
        { name: '财政', value: 100 },
        { name: '住建', value: 90 },
        { name: '生活', value: 80 },
        { name: '信用服务', value: 120 },
        { name: '文化', value: 70 },
        { name: '资源', value: 70 },
        { name: '安全', value: 70 },
        { name: '质检', value: 70 },
        { name: '工商', value: 70 },
        { name: '住房', value: 70 },
        { name: '教育', value: 70 },
        { name: '电子证照', value: 70 },
        { name: '法人', value: 70 },
        { name: '地理空间', value: 70 },
        { name: '民生', value: 70 },
        { name: '科技', value: 70 },
        { name: '社保就业', value: 70 },
        { name: '医疗卫生', value: 70 },
        { name: '市场监督', value: 70 },
        { name: '气象', value: 70 },
        { name: '能源', value: 70 },
        { name: '商贸流通', value: 70 },
      ],
      vms:[
        {status: 'online'},
        {status: 'online'},
        {status: 'online'},
        {status: 'online'},
        {status: 'online'},
        {status: 'online'},
        {status: 'online'},
        {status: 'online'},
        {status: 'online'},
        {status: 'online'},
        {status: 'online'},
        {status: 'warn'},
        {status: 'online'},
        {status: 'online'},
        {status: 'online'},
        {status: 'online'},
        {status: 'offline'},
        {status: 'online'},
        {status: 'online'},
        {status: 'online'},
        {status: 'offline'},
        {status: 'online'},
        {status: 'online'},
        {status: 'offline'},
        {status: 'online'},
        {status: 'online'},
        {status: 'online'},
        {status: 'online'},
        {status: 'online'},
        {status: 'online'},
      ],
      kbData: [120, 132, 101, 134, 90, 230, 210, 101, 134, 90, 230, 210],
      wjData: [220, 182, 191, 234, 290, 330, 310, 101, 134, 90, 230, 210],
      jkData: [150, 232, 201, 154, 190, 330, 410, 101, 134, 90, 230, 210],
      city: [
        {id: '1',name: '南宁', up: 125454, down: 311457, status: 'on'},
        {id: '2',name: '柳州', up: 113464, down: 301453, status: 'on'},
        {id: '3',name: '桂林', up: 105453, down: 291545, status: 'on'},
        {id: '4',name: '梧州', up: 95454, down: 231145, status: 'off'},
        {id: '5',name: '北海', up: 95052, down: 217195, status: 'on'},
        {id: '6',name: '防城港', up: 90765, down: 206745, status: 'on'},
        {id: '7',name: '钦州', up: 89467, down: 198640, status: 'on'},
        {id: '8',name: '贵港', up: 86579, down: 189073, status: 'on'},
        {id: '9',name: '玉林', up: 82740, down: 183890, status: 'on'},
        {id: '10',name: '百色', up: 80234, down: 178948, status: 'off'},
        {id: '11',name: '贺州', up: 79840, down: 170283, status: 'on'},
        {id: '12',name: '河池', up: 78920, down: 164890, status: 'on'},
        {id: '13',name: '来宾', up: 72940, down: 159837, status: 'off'},
        {id: '14',name: '崇左', up: 70983, down: 150203, status: 'on'},
      ],
      chooseCity: {id: '1',name: '南宁', up: 125454, down: 31145, status: 'on'},
      pieChartData: [
        {value:335, name:'全民健康保障信息'},
        {value:260, name:'教育专题'},
        {value:234, name:'食品安全监管信息'},
        {value:135, name:'市场价格监管信息'},
        {value:1548, name:'行政执法监督'},
        {value:335, name:'药品安全监管信息'},
        {value:310, name:'金融监管'},
        {value:234, name:'应急维护保障'},
        {value:135, name:'安全生产监督信息'},
        {value:1548, name:'其他'}
      ],
      pieChartDataColors: ['#ff0000', '#ffaf0d', '#e3ff06', '#3aff0f', '#0effa7', '#1e24ff', '#da26ff', '#ff13b0', '#ff8fc4', '#c6ffb3'],
      loginUnitNum: 12,
      loginNum: 50,
      loginTotal: 1234,

      baseResource: 4123,
      themeResource: 2123,
      departmentResource: 7211,
      sharedTable: 7230,
      sharedFile: 4210,
      sharedInterface: 12110,
    };
  }

  calcRunTime = (t) => {
    let s = t % 60;
    t = Math.floor(t / 60);
    let m = t % 60;
    t = Math.floor(t / 60);
    return(`${t}:${m}:${s}`)
  };
  componentWillMount () {
    this.interval_1 = setInterval(()=>{
      let runtime = this.state.runtime + 1;
      this.setState({
        runtime,
        runtimeStr: this.calcRunTime(runtime),
      })
    }, 1000);
    this.interval_3 = setInterval(()=>{
      let loginNum = Math.round(Math.random());
      this.setState({
        number: this.state.number + Math.round(Math.random() * 160),
        loginUnitNum: this.state.loginUnitNum + Math.round(Math.random()),
        loginNum: this.state.loginNum + loginNum,
        loginTotal: this.state.loginTotal + loginNum,

        baseResource: this.state.baseResource + Math.round(Math.random() * 5),
        themeResource: this.state.themeResource + Math.round(Math.random() * 5),
        departmentResource: this.state.departmentResource + Math.round(Math.random() * 5),
        sharedTable: this.state.sharedTable + Math.round(Math.random() * 10),
        sharedFile: this.state.sharedFile + Math.round(Math.random() * 10),
        sharedInterface: this.state.sharedInterface + Math.round(Math.random() * 10),
        //kbData: this.state.kbData.map((data, index) => index === 11 ? Math.round(Math.random() * 160) : this.state.kbData[index+1]),
        //wjData: this.state.wjData.map((data, index) => index === 11 ? Math.round(Math.random() * 160) : this.state.wjData[index+1]),
        //jkData: this.state.jkData.map((data, index) => index === 11 ? Math.round(Math.random() * 160) : this.state.jkData[index+1])
      })
    }, 3000);
    this.interval_5 = setInterval(() => {
      let chooseCity = {};
      let cities = this.state.city.filter(c => c.status === 'on');
      for (let i = 0; i < cities.length; i ++){
        if(cities[i].id === this.state.chooseCity.id){
          if (i + 1 >= cities.length) {
            chooseCity = cities[0];
          } else {
            chooseCity = cities[i + 1];
          }
          break;
        }
      }
      this.setState({
        chooseCity: chooseCity,
        keyWord: this.state.keyWord.map((key) => {
          key.value = Math.round(Math.random() * 160) + 20
          return key;
        }),
      }, () => {this.wordCloudRef && this.wordCloudRef.resetRender()});
    }, 5000);
  }
  componentWillUnmount(){
    this.interval_1 && clearInterval(this.interval_1);
    this.interval_3 && clearInterval(this.interval_3);
    this.interval_5 && clearInterval(this.interval_5);
  }
  render () {
    let pieChartLegend = [];
    for(let i = 0, j = 0; i < 5; i++){
      pieChartLegend.push(<Row key={`i${i}`}>
        <Col span={12} className={styles.pie_legend_col}>
          <div className={styles.pie_legend} style={{backgroundColor: this.state.pieChartDataColors[j]}}/>
          <span>{this.state.pieChartData[j++].name}</span>
        </Col>
        <Col span={12} className={styles.pie_legend_col}>
          <div className={styles.pie_legend} style={{backgroundColor: this.state.pieChartDataColors[j]}}/>
          <span>{this.state.pieChartData[j++].name}</span>
        </Col>
      </Row>)
    }
    return (
      <div className={styles.main}>
        <img className={styles.img} src={'/assets/光源.png'}/>
        <div className={styles.header}>
          <span>广西壮族自治区政务信息共享交换统计</span>
        </div>
        <div className={styles.total_div}>
          <div className={styles.left}>
            共享数据总量<span>61275476</span>
          </div>
          <div className={styles.center}>
            <div className={styles.label}>
              <div className={styles.small_rect}/>
              <div className={styles.small_rect}/>
              <div className={styles.small_rect}/>
              <div className={styles.small_rect}/>
              <div className={styles.large_rect}/>
              <div className={styles.span}><span>数据交换总量统计</span></div>
              <div className={styles.large_rect}/>
              <div className={styles.small_rect}/>
              <div className={styles.small_rect}/>
              <div className={styles.small_rect}/>
              <div className={styles.small_rect}/>
            </div>
            <NumberView
              className={styles.numberView}
              number={this.state.number}
              bit={8}
            />
            <div className={styles.total_unit}>万次</div>
          </div>
          <div className={styles.right}>
            <div className={styles.item}>
              <span className={styles.item_num}>{Math.round(this.state.loginUnitNum)}</span>
              <span>今日登陆单位</span>
            </div>
            <div className={styles.line}/>
            <div className={styles.item}>
              <span className={styles.item_num}>{this.state.loginNum} 次</span>
              <span>今日登陆次数</span>
            </div>
            <div className={styles.line}/>
            <div className={styles.item}>
              <span className={styles.item_num}>{this.state.loginTotal} 次</span>
              <span>累计登陆次数</span>
            </div>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.c_left}>
            <div className={styles.c_total_block}>
              <div className={styles.c_header}>
                <img src={'/assets/icon/mulu.png'} className={styles.icon}/>
                <span>共享目录数量</span>
                <div className={styles.mulu_num}>{this.state.baseResource+this.state.themeResource+this.state.departmentResource}</div>
              </div>
              <div className={styles.c_block}>
                <div className={classNames(styles.item, styles.bounceAnimation)}>
                  <div className={styles.num}>{this.state.baseResource} 个</div>
                  <div className={styles.label}>基础信息资源</div>
                </div>
                <div className={styles.item}>
                  <div className={styles.num}>{this.state.themeResource} 个</div>
                  <div className={styles.label}>主题信息资源</div>
                </div>
                <div className={styles.item}>
                  <div className={styles.num}>{this.state.departmentResource} 个</div>
                  <div className={styles.label}>部门信息资源</div>
                </div>
              </div>
            </div>
            <div className={styles.block_theme_panels}>
              <div className={styles.chartTitle}>目录主题分类情况</div>
              <ReactChart
                width="370px"
                height="150px" //"285px"
                config={{
                  tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}: {c} ({d}%)"
                  },
                  color: this.state.pieChartDataColors,
                  /*legend: {
                    show: false,
                    x: 'center',
                    y: 'bottom',
                    bottom: '45%',
                    data:['自治区住房和城乡建设厅','自治区工程咨询中心','自治区住房和城乡建设厅1','自治区住房和城乡建设厅2','自治区住城乡建设厅3','自治区住房和城乡建设厅4','自治区住房和城乡建设厅5','自治区住房和城乡建设厅6','自治区住房和城乡建设厅7','其他'],
                    textStyle: {
                      color: '#60d4ff'
                    }
                  },*/
                  series: [
                    {
                      name:'访问来源',
                      type:'pie',
                      radius: ['60%', '90%'],
                      center : ['50%', '50%'],
                      avoidLabelOverlap: false,
                      label: {
                        normal: {
                          show: false,
                          position: 'center'
                        },
                        emphasis: {
                          show: true,
                          textStyle: {
                            fontSize: '30',
                            fontWeight: 'bold'
                          }
                        }
                      },
                      labelLine: {
                        normal: {
                          show: false
                        }
                      },
                      data: this.state.pieChartData
                    }
                  ]
                }}
              />
              <div className={styles.pie_chart_legend}>
                {pieChartLegend}
              </div>
            </div>
            <div className={styles.c_total_block} style={{marginTop: 20}}>
              <div className={styles.c_header}>
                <img src={'/assets/icon/ziyuan.png'} className={styles.icon}/>
                <span>共享资源数量</span>
                <div className={styles.mulu_num}>{this.state.sharedTable+this.state.sharedFile+this.state.sharedInterface}</div>
              </div>
              <div className={styles.c_block}>
                <div className={styles.item}>
                  <div className={styles.num}>{this.state.sharedTable}个</div>
                  <div className={styles.label}>已发布共享库表</div>
                </div>
                <div className={styles.item}>
                  <div className={styles.num}>{this.state.sharedFile}个</div>
                  <div className={styles.label}>已发布共享文件</div>
                </div>
                <div className={styles.item}>
                  <div className={styles.num}>{this.state.sharedInterface}个</div>
                  <div className={styles.label}>已发布共享接口</div>
                </div>
              </div>
            </div>
            <div className={styles.block_resource}>
              <div className={styles.chart_legend}>
                <div className={styles.legend_item}>
                  <div className={styles.legend} style={{backgroundColor: '#1477fb'}}/>
                  <span>库表</span>
                </div>
                <div className={styles.legend_item}>
                  <div className={styles.legend} style={{backgroundColor: '#42b764'}}/>
                  <span>文件</span>
                </div>
                <div className={styles.legend_item}>
                  <div className={styles.legend} style={{backgroundColor: '#f39800'}}/>
                  <span>接口</span>
                </div>
              </div>
              <ReactChart
                width="414px"
                height="225px"
                config={{
                  backgroundColor: 'rgba(238, 238, 238, 0.16)',
                  color: ['#1477fb', '#42b764', '#f39800'],
                  //animation: false,
                  tooltip: {
                    trigger: 'axis'
                  },
                  grid: {
                    right: '5%',
                    top: '10%',
                    bottom: '15%',
                  },
                  legend: {
                    show: false,
                  },
                  xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
                    axisLabel: {
                      interval: 0,
                    },
                    axisLine: {
                      lineStyle: {
                        color: '#cccccc'
                      }
                    },
                  },
                  yAxis: {
                    type: 'value',
                    splitLine: {
                      show: false
                    },
                    axisLine: {
                      lineStyle: {
                        color: '#cccccc'
                      }
                    },
                  },
                  series: [
                    {
                      name:'库表',
                      type:'line',
                      stack: '总量1',
                      data:this.state.kbData,
                      smooth: true
                    },
                    {
                      name:'文件',
                      type:'line',
                      stack: '总量2',
                      data:this.state.wjData,
                      smooth: true
                    },
                    {
                      name:'接口',
                      type:'line',
                      stack: '总量3',
                      data:this.state.jkData,
                      smooth: true
                    },
                  ]
                }}
              />
            </div>
          </div>
          <div className={styles.c_center}>
            <div className={styles.row} style={{padding: '0 30px', marginBottom: 10}}>
              <div className={styles.map}>
                <div className={styles.map_title}>交换平台部署情况</div>
                <MapChart
                  width="500px"
                  height="300px"
                  config={
                    {
                      geo: {
                        map: 'GX',
                        left: 5,
                        right:10,
                        top: 20,
                        bottom: 0,
                        /*label: {
                          normal:{
                            show: true,
                            textStyle: {
                              color: '#fff',
                            }
                          }
                        },*/
                        /*itemStyle: {					// 定义样式
                          normal: {					// 普通状态下的样式
                            //areaColor: '#323c48',
                            //borderColor: '#111'
                          },
                          emphasis: {					// 高亮状态下的样式
                            areaColor: '#fff',
                            color: '#fff',
                            backgroundColor: '#fff'
                          }
                        }*/
                      },
                      visualMap: [{
                        min: 1,
                        max: 500,
                        text:['High','Low'],
                        inRange: {
                          color: ['rgb(22,52,87)','rgb(2,13,33)',]
                        },
                        show: false,
                        seriesIndex: 0,
                      }],

                      series: [
                        {
                          left: 5,
                          right: 10,
                          top: 20,
                          bottom: 0,
                          type: 'map',
                          map: 'GX', // 自定义扩展图表类型
                          emphasis: {
                            label: {
                              show: false,
                            },
                          },
                          data:[
                            {name: '南宁市', value: 454},
                            {name: '柳州市', value: 90},
                            {name: '桂林市', value: 432},
                            {name: '梧州市', value: 20},
                            {name: '北海市', value: 309},
                            {name: '防城港市', value: 209},
                            {name: '钦州市', value: 39},
                            {name: '贵港市', value: 59},
                            {name: '玉林市', value: 80},
                            {name: '百色市', value: 20},
                            {name: '贺州市', value: 100},
                            {name: '河池市', value: 222},
                            {name: '来宾市', value: 333},
                            {name: '崇左市', value: 19},
                          ],
                        },
                        {
                          type: 'scatter',
                          coordinateSystem: 'geo',
                          itemStyle: {
                            normal: {
                              color: '#f4e925',
                              shadowBlur: 10,
                              shadowColor: '#333'
                            }
                          },
                          markPoint: {
                            itemStyle: {
                              normal: {
                                color: '#ffd123'
                              }
                            },
                            symbol: 'circle',
                            symbolSize: 15,
                            //symbolOffset: ['50%', '50%'],
                            label: {
                              normal: {
                                formatter: '{b}',
                                position: 'right',
                                show: false,
                                color: '#fff'
                              }
                            },
                            data: [
                              {name: '南宁市', coord: geoCoordMap['南宁市']},
                              {name: '柳州市', coord: geoCoordMap['柳州市']},
                              {name: '桂林市', coord: geoCoordMap['桂林市']},
                              {name: '梧州市', coord: geoCoordMap['梧州市'],label: { show: true },},
                              {name: '北海市', coord: geoCoordMap['北海市']},
                              {name: '防城港市', coord: geoCoordMap['防城港市']},
                              {name: '钦州市', coord: geoCoordMap['钦州市']},
                              {name: '贵港市', coord: geoCoordMap['贵港市']},
                              {name: '玉林市', coord: geoCoordMap['玉林市']},
                              {name: '百色市', coord: geoCoordMap['百色市'],label: { show: true }},
                              {name: '贺州市', coord: geoCoordMap['贺州市']},
                              {name: '河池市', coord: geoCoordMap['河池市']},
                              {name: '来宾市', coord: geoCoordMap['来宾市'],label: { show: true },},
                              {name: '崇左市', coord: geoCoordMap['崇左市']},
                            ]
                          }
                        },
                        {
                          name: 'Top 5',
                          type: 'effectScatter',
                          coordinateSystem: 'geo',
                          data: [
                            {name: '南宁市', value: geoCoordMap['南宁市'].concat(100)},
                            {name: '柳州市', value: geoCoordMap['柳州市'].concat(100)},
                            {name: '桂林市', value: geoCoordMap['桂林市'].concat(100)},
                            //{name: '梧州市', value: geoCoordMap['梧州市'].concat(100)},
                            {name: '北海市', value: geoCoordMap['北海市'].concat(100)},
                            {name: '防城港市', value: geoCoordMap['防城港市'].concat(100)},
                            {name: '钦州市', value: geoCoordMap['钦州市'].concat(100)},
                            {name: '贵港市', value: geoCoordMap['贵港市'].concat(100)},
                            {name: '玉林市', value: geoCoordMap['玉林市'].concat(100)},
                            //{name: '百色市', value: geoCoordMap['百色市'].concat(100)},
                            {name: '贺州市', value: geoCoordMap['贺州市'].concat(100)},
                            {name: '河池市', value: geoCoordMap['河池市'].concat(100)},
                            //{name: '来宾市', value: geoCoordMap['来宾市'].concat(100)},
                            {name: '崇左市', value: geoCoordMap['崇左市'].concat(100)},
                          ],
                          symbolSize: function (val) {
                            return val[2] / 5
                          },
                          showEffectOn: 'render',
                          rippleEffect: {
                            brushType: 'stroke'
                          },

                          hoverAnimation: true,
                          label: {
                            normal: {
                              formatter: '{b}',
                              position: 'right',
                              show: true,
                              color: '#fff'
                            }
                          },
                          itemStyle: {
                            normal: {
                              color: '#f4e925',
                              shadowBlur: 10,
                              shadowColor: '#333'
                            }
                          },
                          zlevel: 1
                        }
                      ]
                    }
                  }
                />
              </div>
              <div className={styles.shared_exchange_system}>
                <div className={styles.ses_title}>
                  共享交换体系概况
                </div>
                <div className={styles.one}>全国政务信息共享网站</div>
                <div className={styles.ses_link}>
                  <div className={styles.link_left}><span>共享资源上报</span><span>1272230</span></div>
                  <div className={styles.link_center}><Iconfont type={'jiantou-xiangshang'} className={styles.link_icon}/><Iconfont type={'jiantou-xiangxia'} className={styles.link_icon}/></div>
                  <div className={styles.link_right}><span>数据交换量</span><span>3261230</span></div>
                </div>
                <div className={styles.two}>广西自治区交换平台</div>
                <div className={styles.ses_link}>
                  <div className={styles.link_left}><span>共享资源上报</span><span>{this.state.chooseCity.up}</span></div>
                  <div className={styles.link_center}><Iconfont type={'jiantou-xiangshang'} className={styles.link_icon}/><Iconfont type={'jiantou-xiangxia'} className={styles.link_icon}/></div>
                  <div className={styles.link_right}><span>数据交换量</span><span>{this.state.chooseCity.down}</span></div>
                </div>
                <div className={styles.three}>
                  <div className={styles.show_city}>{this.state.chooseCity.name}</div>
                  {
                    this.state.city.map((item, index)=>{
                      return(<div key={index} className={classNames(styles.city, this.state.chooseCity.id === item.id && styles.cityItemAnimation)} style={{opacity: item.status === 'on' ? 1 : 0.5}}>{item.name}</div>)
                    })
                  }
                </div>
              </div>
            </div>
            <div className={styles.row}>
              <CustomDataTable
                className={styles.data_table}
                animation
                duration={5000}
                title={'自治区直属部门情况'}
                data={[
                  {id:'1', department_name: '自治区发展和改革委员会', status: '在线', exchange_num: 8765, use_num: 8765, shared_num: 8765},
                  {id:'2', department_name: '自治区住房和城乡建设厅', status: '在线', exchange_num: 7676, use_num: 7676, shared_num: 7676},
                  {id:'3', department_name: '自治区公安厅', status: '在线', exchange_num: 6789, use_num: 6789, shared_num: 6789},
                  {id:'4', department_name: '自治区教育厅', status: '在线', exchange_num: 6675, use_num: 6675, shared_num: 6675},
                  {id:'5', department_name: '自治区国土资源厅', status: '在线', exchange_num: 6599, use_num: 6599, shared_num: 6599},
                  {id:'6', department_name: '自治区科技厅', status: '在线', exchange_num: 5898, use_num: 5898, shared_num: 5898},
                  {id:'7', department_name: '自治区民政厅', status: '在线', exchange_num: 5479, use_num: 5479, shared_num: 5479},
                  {id:'8', department_name: '自治区监察厅', status: '在线', exchange_num: 5200, use_num: 5200, shared_num: 5200},
                ]}
                config={{
                  columns: [
                    {key: 'department_name',label: '部门名称', span: 7,render: (item) => {
                      return(<div className={styles.department_name}><div className={styles.tri}/><span>{item.department_name}</span></div>)
                    }},
                    {key: 'status',label: '状态', span: 5, render: (item)=>{
                      return(<div className={styles.status}>{item.status}</div>)
                    }},
                    {key: 'exchange_num',label: '交换量', span: 4, render: (item)=>{
                      return(<div className={styles.data_num}>{item.exchange_num}</div>)
                    }},
                    {key: 'use_num',label: '调用次数', span: 4, render: (item)=>{
                      return(<div className={styles.data_num}>{item.use_num}</div>)
                    }},
                    {key: 'shared_num',label: '共享次数', span: 4, render: (item)=>{
                      return(<div className={styles.data_num}>{item.shared_num}</div>)
                    }},
                  ],
                }}
              />
            </div>
            <div className={styles.row}>
              <div className={styles.data_use_total}>
                <div className={styles.use_total_top}>
                  <span className={styles.use_total_data_num}>123278730</span>
                  <span className={styles.use_total_data_label}>数据调用总量统计</span>
                </div>
                <div className={styles.use_total_bottom}>
                  <div className={styles.use_total_item}>季度<span>62422345</span></div>
                  <div className={styles.use_total_item}>本月<span>20124234</span></div>
                  <div className={styles.use_total_item}>今日<span>42456</span></div>
                </div>
              </div>
              <div className={styles.hot_aggreg}>
                <div className={styles.data_list_header}>
                  <div className={styles.title}>
                    <img src={'/assets/icon/diaoyong.png'} className={styles.icon}/>
                    <span>热门主题调用信息聚类</span>
                  </div>
                </div>
                <div className={styles.aggreg_content}>
                  <ReactChart
                    width="289px"
                    height="211px"
                    ref={ref => this.wordCloudRef = ref}
                    config={{
                      series: [{
                        type: 'wordCloud',
                        //shape: 'square',
                        gridSize: 20,
                        left: 'center',
                        top: 'center',
                        width: '95%',
                        height: '80%',
                        sizeRange: [12, 25],
                        rotationRange: [0, 0],
                        textStyle: {
                          normal: {
                            color() {
                              return `rgb(${
                                [Math.round(Math.random() * 150 + 100),
                                  Math.round(Math.random() * 150 + 100),
                                  Math.round(Math.random() * 150 + 100)]
                                  .join(',')})`;
                            },
                          },
                          emphasis: {
                            shadowBlur: 10,
                            shadowColor: '#333',
                            color: '#fff'
                          },
                        },
                        data: this.state.keyWord,
                      }],
                    }}
                  />
                </div>
              </div>
              <div className={styles.block_data_list}>
                <div className={styles.data_list_header}>
                  <div className={styles.title}>
                    <img src={'/assets/icon/diaoyong.png'} className={styles.icon}/>
                    <span>热门资源调用情况统计</span>
                  </div>
                  <div className={styles.unit}>次数</div>
                </div>
                <div className={styles.data_list_content} style={{backgroundColor: 'rgba(140,150,203,0.5)'}}>
                  <div className={styles.content_row}>
                    <div className={styles.c_r_col}>
                      <div className={styles.label}>人口库</div>
                      <div className={styles.value}>180</div>
                    </div>
                    <div className={styles.c_r_col}>
                      <div className={styles.label}>车辆信息资源</div>
                      <div className={styles.value}>80</div>
                    </div>
                  </div>
                  <div className={styles.content_row}>
                    <div className={styles.c_r_col}>
                      <div className={styles.label}>城镇人口户籍资源</div>
                      <div className={styles.value}>167</div>
                    </div>
                    <div className={styles.c_r_col}>
                      <div className={styles.label}>气象资源接口</div>
                      <div className={styles.value}>75</div>
                    </div>
                  </div>
                  <div className={styles.content_row}>
                    <div className={styles.c_r_col}>
                      <div className={styles.label}>高校学籍库</div>
                      <div className={styles.value}>153</div>
                    </div>
                    <div className={styles.c_r_col}>
                      <div className={styles.label}>渔业资源</div>
                      <div className={styles.value}>72</div>
                    </div>
                  </div>
                  <div className={styles.content_row}>
                    <div className={styles.c_r_col}>
                      <div className={styles.label}>耕地面积统计</div>
                      <div className={styles.value}>123</div>
                    </div>
                    <div className={styles.c_r_col}>
                      <div className={styles.label}>林业资源</div>
                      <div className={styles.value}>64</div>
                    </div>
                  </div>
                  <div className={styles.content_row}>
                    <div className={styles.c_r_col}>
                      <div className={styles.label}>外籍人口库</div>
                      <div className={styles.value}>98</div>
                    </div>
                    <div className={styles.c_r_col}>
                      <div className={styles.label}>港口资源统计</div>
                      <div className={styles.value}>50</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.c_right}>
            <div className={styles.c_total_block}>
              <div className={styles.c_header}>
                <img src={'/assets/icon/ziyuan.png'} className={styles.icon}/>
                <span>平台运行情况</span>
              </div>
              <div className={styles.c_block}>
                <div className={styles.item} style={{width: '50%'}}>
                  <div className={styles.label}>累计运行时间</div>
                  <div className={styles.num}>{this.state.runtimeStr}</div>
                </div>
                <div className={styles.item} style={{width: '50%'}}>
                  <div className={styles.label}>负载状态</div>
                  <div className={styles.num}>正常</div>
                </div>
              </div>
            </div>
            <div className={styles.block_run}>
              <div className={styles.vm}>
                <div className={styles.vm_title}>虚拟机状态<div className={styles.vm_status}>正常</div></div>
                <div className={styles.vm_content}>
                  {
                    this.state.vms.map((item,index) => {
                      let style = {};
                      if(index % 10 === 0){
                        style.marginLeft = 0;
                      }
                      if(index % 10 === 9){
                        style.marginRight = 0;
                      }
                      return(
                        <div
                          key={index}
                          className={classNames(styles.square,
                            item.status === 'online' ? styles.online :
                              (item.status === 'warn' ? styles.warn :
                                (item.status === 'offline' ? styles.offline : styles.error)))}
                          style={style}
                        />
                      )
                    })
                  }
                </div>
                <div className={styles.vm_total}>
                  <span>共计 30</span>
                  <span>在线 26</span>
                  <span>故障 3</span>
                  <span>告警 1</span>
                </div>
              </div>
              <div className={styles.physical_config_title}>
                物理资源配置
              </div>
              <div className={styles.physical_config_content}>
                <Battery
                  percent={Math.round(12000/320)}
                  text={'CPU'}
                  topClassName={styles.battery_top}
                  renderBottom={()=>{
                    return(
                      <div className={styles.content_rb}>
                        <div className={styles.row}>120/<span>320</span></div>
                        <div className={styles.row}>核数</div>
                      </div>
                    )
                  }}
                />
                <Battery
                  percent={Math.round(32000/640)}
                  text={'MEMORY'}
                  topClassName={styles.battery_top}
                  spanStyle={{letterSpacing: '2px'}}
                  renderBottom={()=>{
                    return(
                      <div className={styles.content_rb}>
                        <div className={styles.row}>320/<span>640</span></div>
                        <div className={styles.row}>GB</div>
                      </div>
                    )
                  }}
                />
                <Battery
                  percent={Math.round(108000/4000)}
                  text={'DISK'}
                  topClassName={styles.battery_top}
                  renderBottom={()=>{
                    return(
                      <div className={styles.content_rb}>
                        <div className={styles.row}>1080/<span>4000</span></div>
                        <div className={styles.row}>TB</div>
                      </div>
                    )
                  }}
                />
                <Battery
                  percent={20}
                  text={'NET'}
                  topClassName={styles.battery_top}
                  bgColor={'#4fca3f'}
                  markColor={'#128603'}
                  renderBottom={()=>{
                    return(
                      <div className={styles.content_rb}>
                        <div className={styles.row}>1000MB</div>
                        <div className={styles.row}>带宽</div>
                      </div>
                    )
                  }}
                />
              </div>
            </div>
            <div className={styles.block_data_list} style={{ width: '100%', marginTop: 25}}>
              <div className={styles.data_list_header}>
                <div className={styles.title}>
                  <img src={'/assets/icon/diaoyong.png'} className={styles.icon}/>
                  <span>热门目录查询情况统计</span>
                </div>
                <div className={styles.unit}>次数</div>
              </div>
              <div className={styles.data_list_content}>
                <div className={styles.content_row}>
                  <div className={styles.c_r_col}>
                    <div className={styles.label}>人口库</div>
                    <div className={styles.value}>180</div>
                  </div>
                  <div className={styles.c_r_col}>
                    <div className={styles.label}>车辆信息资源</div>
                    <div className={styles.value}>80</div>
                  </div>
                </div>
                <div className={styles.content_row}>
                  <div className={styles.c_r_col}>
                    <div className={styles.label}>城镇人口户籍资源</div>
                    <div className={styles.value}>167</div>
                  </div>
                  <div className={styles.c_r_col}>
                    <div className={styles.label}>气象资源接口</div>
                    <div className={styles.value}>75</div>
                  </div>
                </div>
                <div className={styles.content_row}>
                  <div className={styles.c_r_col}>
                    <div className={styles.label}>高校学籍库</div>
                    <div className={styles.value}>153</div>
                  </div>
                  <div className={styles.c_r_col}>
                    <div className={styles.label}>渔业资源</div>
                    <div className={styles.value}>72</div>
                  </div>
                </div>
                <div className={styles.content_row}>
                  <div className={styles.c_r_col}>
                    <div className={styles.label}>耕地面积统计</div>
                    <div className={styles.value}>123</div>
                  </div>
                  <div className={styles.c_r_col}>
                    <div className={styles.label}>林业资源</div>
                    <div className={styles.value}>64</div>
                  </div>
                </div>
                <div className={styles.content_row}>
                  <div className={styles.c_r_col}>
                    <div className={styles.label}>外籍人口库</div>
                    <div className={styles.value}>98</div>
                  </div>
                  <div className={styles.c_r_col}>
                    <div className={styles.label}>港口资源统计</div>
                    <div className={styles.value}>50</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
