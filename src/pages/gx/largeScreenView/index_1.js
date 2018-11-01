import React from 'react';
import classNames from 'classnames';
import styles from './index_1.less';
import NumberView from "./components/NumberView";
import Iconfont from "../../../components/Iconfont/Iconfont";
import DataTable from "./components/DataTable";
import ReactChart from "../../../components/ReactChart/index";
import MapChart from "../../../components/ReactChart/MapChart";
import { geoCoordMap } from '../util';

export default class extends React.Component{
  state = {
    number: 125476,
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
    kbData: [120, 132, 101, 134, 90, 230, 210, 101, 134, 90, 230, 210],
    wjData: [220, 182, 191, 234, 290, 330, 310, 101, 134, 90, 230, 210],
    jkData: [150, 232, 201, 154, 190, 330, 410, 101, 134, 90, 230, 210],

    loginUnitNum: 12,
    loginNum: 50,
    loginTotal: 1234,
    usedToday: 2,
    usedMount: 1213,
    usedTotal: 123450,

    zzqToDayOnline: 10,
    zzqOnlineTotal: 3212,
    sqsToDayOnline: 0,
    sqsOnlineTotal: 212,
    zzqTableNum: 13209,
    zzqFileNum: 32212,
    zzqInterfaceNum: 23212,
    sqsTableNum: 432,
    sqsFileNum: 2212,
    sqsInterfaceNum: 589,

    sharedTable: 3230,
    sharedFile: 3200,
    sharedInterface: 2110,
  };
  componentWillMount () {
    this.numberInter = setInterval(()=>{

      let loginNum = Math.round(Math.random());
      let usedNum = Math.round(Math.random() * 5);
      this.setState({
        number: this.state.number + Math.round(Math.random() * 160),
        //textClassName: styles.item_num,
        loginUnitNum: this.state.loginUnitNum + Math.round(Math.random()),
        loginNum: this.state.loginNum + loginNum,
        loginTotal: this.state.loginTotal + loginNum,
        usedToday: this.state.usedToday + usedNum,
        usedMount: this.state.usedMount + usedNum,
        usedTotal: this.state.usedTotal + usedNum,

        sharedTable: this.state.sharedTable + Math.round(Math.random() * 10),
        sharedFile: this.state.sharedFile + Math.round(Math.random() * 10),
        sharedInterface: this.state.sharedInterface + Math.round(Math.random() * 10),
        //kbData: this.state.kbData.map((data, index) => index === 11 ? Math.round(Math.random() * 160) : this.state.kbData[index+1]),
        //wjData: this.state.wjData.map((data, index) => index === 11 ? Math.round(Math.random() * 160) : this.state.wjData[index+1]),
        //jkData: this.state.jkData.map((data, index) => index === 11 ? Math.round(Math.random() * 160) : this.state.jkData[index+1])
      })
    }, 3000);
    this.zzqOnlineInter = setInterval(() => {
      let zzqOnline = Math.round(Math.random() * 20);
      document.getElementById('zzqToDayOnline').className = styles.c_item;
      document.getElementById('zzqOnlineTotal').className = styles.c_item;
      this.setState({
        zzqToDayOnline: this.state.zzqToDayOnline + zzqOnline,
        zzqOnlineTotal: this.state.zzqOnlineTotal + zzqOnline,
      });
      setTimeout(()=>{
        document.getElementById('zzqToDayOnline').className = classNames(styles.c_item, styles.textItemAnimation);
        document.getElementById('zzqOnlineTotal').className = classNames(styles.c_item, styles.textItemAnimation);
      }, 100);
    }, 5000);
    this.sqsOnlineInter = setInterval(() => {
      let sqsOnline = Math.round(Math.random() * 20);
      document.getElementById('sqsToDayOnline').className = styles.c_item;
      document.getElementById('sqsOnlineTotal').className = styles.c_item;
      this.setState({
        sqsToDayOnline: this.state.sqsToDayOnline + sqsOnline,
        sqsOnlineTotal: this.state.sqsOnlineTotal + sqsOnline,
      });
      setTimeout(()=>{
        document.getElementById('sqsToDayOnline').className = classNames(styles.c_item, styles.textItemAnimation);
        document.getElementById('sqsOnlineTotal').className = classNames(styles.c_item, styles.textItemAnimation);
      }, 100);
    }, 7000);
    this.zzqTableNumInter = setInterval(() => {
      document.getElementById('zzqTableNum').className = styles.c_item;
      this.setState({
        zzqTableNum: this.state.zzqTableNum + Math.round(Math.random() * 10),
      });
      setTimeout(()=>{
        document.getElementById('zzqTableNum').className = classNames(styles.c_item, styles.textItemAnimation);
      }, 100);
    }, 5000);
    this.zzqFileNumInter = setInterval(() => {
      document.getElementById('zzqFileNum').className = styles.c_item;
      this.setState({
        zzqFileNum: this.state.zzqFileNum + Math.round(Math.random() * 10),
      });
      setTimeout(()=>{
        document.getElementById('zzqFileNum').className = classNames(styles.c_item, styles.textItemAnimation);
      }, 100);
    }, 7000);
    this.zzqInterfaceNumInter = setInterval(() => {
      document.getElementById('zzqInterfaceNum').className = styles.c_item;
      this.setState({
        zzqInterfaceNum: this.state.zzqInterfaceNum + Math.round(Math.random() * 10),
      });
      setTimeout(()=>{
        document.getElementById('zzqInterfaceNum').className = classNames(styles.c_item, styles.textItemAnimation);
      }, 100);
    }, 11000);
    this.sqsTableNumInter = setInterval(() => {
      document.getElementById('sqsTableNum').className = styles.c_item;
      this.setState({
        sqsTableNum: this.state.sqsTableNum + Math.round(Math.random() * 10),
      });
      setTimeout(()=>{
        document.getElementById('sqsTableNum').className = classNames(styles.c_item, styles.textItemAnimation);
      }, 100);
    }, 13000);
    this.sqsFileNumInter = setInterval(() => {
      document.getElementById('sqsFileNum').className = styles.c_item;
      this.setState({
        sqsFileNum: this.state.sqsFileNum + Math.round(Math.random() * 10),
      });
      setTimeout(()=>{
        document.getElementById('sqsFileNum').className = classNames(styles.c_item, styles.textItemAnimation);
      }, 100);
    }, 17000);
    this.sqsInterfaceNumInter = setInterval(() => {
      document.getElementById('sqsInterfaceNum').className = styles.c_item;
      this.setState({
        sqsInterfaceNum: this.state.sqsInterfaceNum + Math.round(Math.random() * 10),
      });
      setTimeout(()=>{
        document.getElementById('sqsInterfaceNum').className = classNames(styles.c_item, styles.textItemAnimation);
      }, 100);
    }, 19000);
    this.wordCloudInter = setInterval(()=>{
      this.setState({
        keyWord: this.state.keyWord.map((key) => {
          key.value = Math.round(Math.random() * 160) + 20
          return key;
        }),
      }, () => {this.wordCloudRef && this.wordCloudRef.resetRender()});
    }, 5000);
  }
  componentWillUnmount(){
    this.numberInter && clearInterval(this.numberInter);
    this.wordCloudInter && clearInterval(this.wordCloudInter);
    this.zzqOnlineInter && clearInterval(this.zzqOnlineInter);
    this.sqsOnlineInter && clearInterval(this.sqsOnlineInter);
    this.zzqTableNumInter && clearInterval(this.zzqTableNumInter);
    this.zzqFileNumInter && clearInterval(this.zzqFileNumInter);
    this.zzqInterfaceNumInter && clearInterval(this.zzqInterfaceNumInter);
    this.sqsTableNumInter && clearInterval(this.sqsTableNumInter);
    this.sqsFileNumInter && clearInterval(this.sqsFileNumInter);
    this.sqsInterfaceNumInter && clearInterval(this.sqsInterfaceNumInter);
  }
  render () {
    return (
      <div className={styles.main}>
        <div className={styles.header}>
          <span>广西壮族自治区政务信息共享交换统计</span>
        </div>
        <div className={styles.total_div}>
          <div className={styles.left}>
            <div className={styles.title}>
              <span>登录统计</span>
              <div className={styles.line}/>
            </div>
            <div className={styles.total_data}>
              <div className={styles.item}>
                <span className={classNames(styles.item_num)}>{this.state.loginUnitNum} 个</span>
                <span className={styles.item_label}>今日登录单位</span>
              </div>
              <div className={styles.item}>
                <span className={styles.item_num}>{this.state.loginNum} 次</span>
                <span className={styles.item_label}>今日登录次数</span>
              </div>
              <div className={styles.item}>
                <span className={styles.item_num}>{this.state.loginTotal} 次</span>
                <span className={styles.item_label}>累计登录次数</span>
              </div>
            </div>

          </div>
          <div className={styles.center}>
            <div className={styles.label}>数据交换总量统计</div>
            <NumberView
              className={styles.numberView}
              number={this.state.number}
              bit={8}
            />
          </div>
          <div className={styles.right} style={{justifyContent: 'flex-end'}}>
            <div className={styles.total_data}>
              <div className={styles.item}>
                <span className={styles.item_num}>{Math.round(this.state.usedTotal/10000)} 万次</span>
                <span className={styles.item_label}>累计调用</span>
              </div>
              <div className={styles.item}>
                <span className={styles.item_num}>{this.state.usedMount} 次</span>
                <span className={styles.item_label}>当月调用</span>
              </div>
              <div className={styles.item}>
                <span className={styles.item_num}>{this.state.usedToday} 次</span>
                <span className={styles.item_label}>今日调用</span>
              </div>
            </div>
            <div className={styles.title}>
              <div className={styles.line}/>
              <span>调用统计</span>
            </div>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.c_left}>
            <div className={styles.c_header}>
              <img src={'/assets/icon/mulu.png'} className={styles.icon}/>
              <span>目录提供情况统计</span>
            </div>
            <div className={styles.c_block}>
              <div className={classNames(styles.item, styles.bounceAnimation)}>
                <div className={styles.num}>312个</div>
                <div className={styles.label}>基础信息资源</div>
              </div>
              <div className={styles.item}>
                <div className={styles.num}>32个</div>
                <div className={styles.label}>主题信息资源</div>
              </div>
              <div className={styles.item}>
                <div className={styles.num}>211个</div>
                <div className={styles.label}>部门信息资源</div>
              </div>
            </div>
            <div className={styles.block_left}>
              <DataTable
                className={styles.table}
                animation={true}
                duration={5000}
                data={[
                  {label: '自治区发展和改革委员会', value: 80},
                  {label: '自治区住房和城乡建设厅', value: 75},
                  {label: '自治区公安厅', value: 70},
                  {label: '自治区教育厅', value: 60},
                  {label: '自治区国土资源厅', value: 54},
                  {label: '自治区环保厅', value: 50},
                  {label: '自治区司法厅', value: 49},
                  {label: '自治区交通厅', value: 49},
                  {label: '自治区科技厅', value: 48},
                  {label: '自治区民政厅', value: 46},
                  {label: '自治区监察厅', value: 45},
                  {label: '自治区林业厅', value: 44},
                  {label: '自治区农业厅', value: 40},
                ]}
                title="自治区区直单位提供目录情况"
                unit="数量（个）"
              />
              <DataTable
                className={styles.table}
                data={[
                  {label: '南宁市', value: 33},
                  {label: '桂林市', value: 27},
                  {label: '北海市', value: 23},
                  {label: '柳州市', value: 14},
                  {label: '钦州市', value: 12},
                  {label: '梧州市', value: 12},
                  {label: '玉林市', value: 11},
                  {label: '百色市', value: 10},
                  {label: '河池市', value: 10},
                ]}
                title="设区市提供目录情况"
                unit="数量（个）"
              />
              <div className={styles.chartTitle}>目录主题分类情况</div>
              <ReactChart
                width="392px"
                height="350px"
                config={{
                  tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}: {c} ({d}%)"
                  },
                  color: ['#ff0000', '#ffaf0d', '#e3ff06', '#3aff0f', '#0effa7', '#1e24ff', '#da26ff', '#ff13b0', '#ff8fc4', '#c6ffb3'],
                  legend: {
                    x: 'center',
                    y: 'bottom',
                    data:['财税金融','信用服务','城镇住房','教育文化','生活服务','医疗卫生','市场监管','工业农业','社会救助','其他'],
                    textStyle: {
                      color: '#60d4ff'
                    }

                  },
                  series: [
                    {
                      name:'访问来源',
                      type:'pie',
                      radius: ['40%', '60%'],
                      center : ['50%', '40%'],
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
                      data:[
                        {value:335, name:'财税金融'},
                        {value:310, name:'信用服务'},
                        {value:234, name:'城镇住房'},
                        {value:135, name:'教育文化'},
                        {value:1548, name:'生活服务'},
                        {value:335, name:'医疗卫生'},
                        {value:310, name:'市场监管'},
                        {value:234, name:'工业农业'},
                        {value:135, name:'社会救助'},
                        {value:1548, name:'其他'}
                      ]
                    }
                  ]
                }}
              />
            </div>
          </div>
          <div className={styles.c_center}>
            <div className={styles.row}>
              <div>
                <MapChart
                  width="520px"
                  height="348px"
                  config={
                    {
                      geo: {
                        map: 'GX',
                        left: 0,
                        right:10,
                        top: 10,
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
                          color: ['rgb(1,20,52)','rgb(2,13,33)',]
                        },
                        show: false,
                        seriesIndex: 0,
                      }],

                      series: [
                        {
                          left: 0,
                          right: 10,
                          top: 10,
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
                                show: true,
                                color: '#fff'
                              }
                            },
                            data: [
                              {name: '南宁市', coord: geoCoordMap['南宁市'],label: { show: false },},
                              {name: '柳州市', coord: geoCoordMap['柳州市'],label: { show: false },},
                              {name: '桂林市', coord: geoCoordMap['桂林市'],label: { show: false },},
                              {name: '梧州市', coord: geoCoordMap['梧州市'],label: { show: false },},
                              {name: '北海市', coord: geoCoordMap['北海市'],label: { show: false },},
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
                        },
                        {
                          name: 'Top 5',
                          type: 'effectScatter',
                          coordinateSystem: 'geo',
                          data: [
                            {name: '南宁市', value: geoCoordMap['南宁市'].concat(160)},
                            {name: '柳州市', value: geoCoordMap['柳州市'].concat(145)},
                            {name: '桂林市', value: geoCoordMap['桂林市'].concat(130)},
                            {name: '梧州市', value: geoCoordMap['梧州市'].concat(115)},
                            {name: '北海市', value: geoCoordMap['北海市'].concat(100)},
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
              <div className={styles.col_2}>
                <div className={styles.block}>
                  <div className={styles.title}>平台目录概况</div>
                  <div className={styles.b_c}>
                    <div className={styles.c_label}>自治区</div>
                    <div id={'zzqToDayOnline'} className={styles.c_item}>
                      <div className={styles.label}>今日上线(个)</div>
                      <div className={styles.value}>{this.state.zzqToDayOnline}</div>
                    </div>
                    <div id={'zzqOnlineTotal'} className={styles.c_item}>
                      <div className={styles.label}>累计上线(个)</div>
                      <div className={styles.value}>{this.state.zzqOnlineTotal}</div>
                    </div>
                  </div>
                  <div className={styles.b_c}>
                    <div className={styles.c_label}>设区市</div>
                    <div id={'sqsToDayOnline'} className={styles.c_item}>
                      <div className={styles.label}>今日上线(个)</div>
                      <div className={styles.value}>{this.state.sqsToDayOnline}</div>
                    </div>
                    <div id={'sqsOnlineTotal'} className={styles.c_item}>
                      <div className={styles.label}>累计上线(个)</div>
                      <div className={styles.value}>{this.state.sqsOnlineTotal}</div>
                    </div>
                  </div>
                </div>
                <div className={styles.block}>
                  <div className={styles.title}>平台资源概况</div>
                  <div className={styles.b_c}>
                    <div className={styles.c_label}>自治区</div>
                    <div id={'zzqTableNum'} className={styles.c_item}>
                      <div className={styles.label}>库表(个)</div>
                      <div className={styles.value}>{this.state.zzqTableNum}</div>
                    </div>
                    <div id={'zzqFileNum'} className={styles.c_item}>
                      <div className={styles.label}>文件(个)</div>
                      <div className={styles.value}>{this.state.zzqFileNum}</div>
                    </div>
                    <div id={'zzqInterfaceNum'} className={styles.c_item}>
                      <div className={styles.label}>接口(个)</div>
                      <div className={styles.value}>{this.state.zzqInterfaceNum}</div>
                    </div>
                  </div>
                  <div className={styles.b_c}>
                    <div className={styles.c_label}>设区市</div>
                    <div id={'sqsTableNum'} className={styles.c_item}>
                      <div className={styles.label}>库表(个)</div>
                      <div className={styles.value}>{this.state.sqsTableNum}</div>
                    </div>
                    <div id={'sqsFileNum'} className={styles.c_item}>
                      <div className={styles.label}>文件(个)</div>
                      <div className={styles.value}>{this.state.sqsFileNum}</div>
                    </div>
                    <div id={'sqsInterfaceNum'} className={styles.c_item}>
                      <div className={styles.label}>接口(个)</div>
                      <div className={styles.value}>{this.state.sqsInterfaceNum}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.row} style={{margin: '20px 0'}}>
              <div className={styles.col_3}>
                <div className={styles.title}>部门数据下载量统计</div>
                <div className={styles.col_3_content}>
                  <ReactChart
                    width="600px"
                    height="178px"
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
                        bottom: '20%',
                        top: '5%',
                        containLabel: true
                      },
                      xAxis : [
                        {
                          type : 'category',
                          data : ['发改委', '教育厅', '公安厅', '民政厅', '财政厅', '国土厅', '环保厅', '司法厅', '交通厅', '科技厅'],
                          axisTick: {
                            alignWithLabel: true
                          },
                          axisLabel: {
                            interval: 0,
                            rotate: -30,
                          },
                          axisLine: {
                            lineStyle: {
                              color: '#60d4ff'
                            }
                          },
                        }
                      ],
                      yAxis : [
                        {
                          type : 'value',
                          name: '万/条',
                          splitLine: {
                            show: false
                          },
                          axisLabel: {
                            formatter: (value, index) => value/10000
                          },
                          axisLine: {
                            lineStyle: {
                              color: '#cccccc'
                            },
                          },
                          nameTextStyle: {
                            color: '#60d4ff'
                          }
                        }
                      ],
                      series : [
                        {
                          name:'数量',
                          type:'bar',
                          barWidth: '45%',
                          data:[52345, 42345, 42045, 32305, 32300, 32123, 21234,21222,20167,12345]
                        }
                      ]
                    }}
                  />
                  <div className={styles.content_3}>
                    <div className={styles.left}>
                      <div className={styles.item}>
                        <span className={styles.span1}>①发改委</span>
                        <span className={styles.span2}>52345</span>
                      </div>
                      <div className={styles.item}>
                        <span className={styles.span1}>②教育厅</span>
                        <span className={styles.span2}>42345</span>
                      </div>
                      <div className={styles.item}>
                        <span className={styles.span1}>③公安厅</span>
                        <span className={styles.span2}>42045</span>
                      </div>
                      <div className={styles.item}>
                        <span className={styles.span1}>④民政厅</span>
                        <span className={styles.span2}>32305</span>
                      </div>
                      <div className={styles.item}>
                        <span className={styles.span1}>⑤财政厅</span>
                        <span className={styles.span2}>32300</span>
                      </div>
                    </div>
                    <div className={styles.line}/>
                    <div className={styles.right}>
                      <div className={styles.item}>
                        <span className={styles.span1}>⑥国土厅</span>
                        <span className={styles.span2}>32123</span>
                      </div>
                      <div className={styles.item}>
                        <span className={styles.span1}>⑦环保厅</span>
                        <span className={styles.span2}>21234</span>
                      </div>
                      <div className={styles.item}>
                        <span className={styles.span1}>⑧司法厅</span>
                        <span className={styles.span2}>21222</span>
                      </div>
                      <div className={styles.item}>
                        <span className={styles.span1}>⑨交通厅</span>
                        <span className={styles.span2}>20167</span>
                      </div>
                      <div className={styles.item}>
                        <span className={styles.span1}>⑩科技厅</span>
                        <span className={styles.span2}>12345</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.col_5}>
                <div className={styles.h_5}>
                  <div className={styles.title}>
                    <img src={'/assets/icon/diaoyong.png'} className={styles.icon}/>
                    <span>资源调用情况统计</span>
                  </div>
                  <div className={styles.unit}>次数</div>
                </div>
                <div className={styles.c_5}>
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
              <div className={styles.col_6}>
                <div className={styles.h_6}>
                  <img src={'/assets/icon/zuoye.png'} className={styles.icon}/>
                  <span>交换作业统计</span>
                </div>
                <div className={styles.c_6}>
                  <div className={styles.c_left}>
                    <div className={styles.top}>
                      <div className={styles.font_1}>当前共有<span>128</span>个交换作业</div>
                      <div className={styles.font_2}>已完成<span>238732</span>条数据交换</div>
                      <div className={styles.font_3}>产生<span>3</span>条脏数据</div>
                    </div>
                    <div className={styles.bottom}>
                      <div className={styles.item}>
                        <span>数据读取速度</span>
                        <span>13610条/秒</span>
                      </div>
                      <div className={styles.item}>
                        <span>数据处理速度</span>
                        <span>32113610条/秒</span>
                      </div>
                      <div className={styles.item}>
                        <span>数据写入速度</span>
                        <span>23610条/秒</span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.chart}>
                    <ReactChart
                      width="300px"
                      height="210px"
                      config={{
                        color: ['#1477fb', '#42b764', '#f39800'],
                        tooltip: {
                          trigger: 'item'
                        },
                        series: [
                          {
                            type:'pie',
                            radius: [0,50],
                            roseType : 'radius',
                            data:[
                              {value:10, name:'进行中的作业'},
                              {value:10, name:'已完成的作业'},
                              {value:15, name:'计划中的作业'},
                            ]
                          },
                        ]
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.c_right}>
            <div className={styles.c_header}>
              <img src={'/assets/icon/ziyuan.png'} className={styles.icon}/>
              <span>资源情况统计</span>
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
            <div className={styles.block_right}>
              <ReactChart
                width="414px"
                height="248px"
                config={{
                  backgroundColor: 'rgba(238, 238, 238, 0.16)',
                  color: ['#1477fb', '#42b764', '#f39800'],
                  //animation: false,
                  tooltip: {
                    trigger: 'axis'
                  },
                  grid: {
                    right: '5%',
                  },
                  legend: {
                    x: 'center',
                    y: 'top',
                    data:['库表','文件','接口'],
                    icon:'stack',
                    itemGap: 50,
                    top: 5,
                    textStyle: {
                      color: '#60d4ff'
                    }
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
              <DataTable
                className={styles.table}
                data={[
                  {label: '自治区发展和改革委员会', value: 11280},
                  {label: '自治区住房和城乡建设厅', value: 11075},
                  {label: '自治区公安厅', value: 7170},
                  {label: '自治区教育厅', value: 6660},
                  {label: '自治区国土资源厅', value: 5450},
                  {label: '自治区民政厅', value: 5400},
                  {label: '自治区林业厅', value: 5300},
                  {label: '自治区农业厅', value: 5240},
                  {label: '自治区监察厅', value: 5200},
                  {label: '自治区水利厅', value: 5100},
                ]}
                title="自治区区直单位提供资源情况"
                unit="数据量（条）"
              />
              <DataTable
                className={styles.table}
                data={[
                  {label: '南宁市', value: 11280},
                  {label: '桂林市', value: 7995},
                  {label: '北海市', value: 7021},
                  {label: '柳州市', value: 6020},
                  {label: '钦州市', value: 5400},
                  {label: '梧州市', value: 5380},
                  {label: '玉林市', value: 5230},
                  {label: '百色市', value: 5018},
                  {label: '河池市', value: 4980},
                  {label: '贵港市', value: 4900},
                ]}
                title="设区市提供资源情况"
                unit="数据量（条）"
              />
            </div>
            <div className={styles.keys}>
              <div className={styles.keyTitle}>
                <Iconfont type={'resou'} className={styles.icon}/>
                <span>热点聚类</span>
              </div>
              <ReactChart
                width="370px"
                height="160px"
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
        </div>
      </div>
    )
  }
}
