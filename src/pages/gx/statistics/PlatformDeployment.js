import React from 'react';
import styles from './PlatformDeployment.less';
import CustomTitle from "../../../components/CustomTitle/index";
import Iconfont from "../../../components/Iconfont/Iconfont";
import MapChart from "../../../components/ReactChart/MapChart";
import { geoCoordMap } from '../util';
import SummaryTable from "./components/SummaryTable";

export default class extends React.Component{
  state={
    data: [
      {id: '1', name: '自治区发展和改革委员会', status: '畅通', num1: 23123, num2: 12233, num3: 12232},
      {id: '2', name: '自治区住房和城乡建设厅', status: '畅通', num1: 23123, num2: 12233, num3: 12232},
      {id: '3', name: '自治区公安厅', status: '畅通', num1: 23123, num2: 12233, num3: 12232},
      {id: '4', name: '自治区教育厅', status: '畅通', num1: 23123, num2: 12233, num3: 12232},
      {id: '5', name: '自治区国土资源厅', status: '畅通', num1: 23123, num2: 12233, num3: 12232},
      {id: '6', name: '自治区发展和改革委员会', status: '畅通', num1: 23123, num2: 12233, num3: 12232},
      {id: '7', name: '自治区住房和城乡建设厅', status: '畅通', num1: 23123, num2: 12233, num3: 12232},
      {id: '8', name: '自治区公安厅', status: '畅通', num1: 23123, num2: 12233, num3: 12232},
      {id: '9', name: '自治区教育厅', status: '畅通', num1: 23123, num2: 12233, num3: 12232},
      {id: '10', name: '自治区国土资源厅', status: '畅通', num1: 23123, num2: 12233, num3: 12232},
    ],
  }
  render(){
    return(
      <div className={styles.main}>
        <CustomTitle title="交换平台部署范围"/>
        <div className={styles.title}><span>平台覆盖范围</span></div>
        <div className={styles.content}>
          <div className={styles.left}>
            {/*<MapChart
              config={
                {
                  geo: {
                    map: 'GX',
                    left: 10,
                    right:20,
                    top: 10,
                    bottom: 10,
                  },
                  visualMap: [{
                    min: 1,
                    max: 500,
                    text:['High','Low'],
                    inRange: {
                      color: ['rgb(247,241,188)','rgb(242,228,227)']
                    },
                    show: false
                  }],

                  series: [
                    {
                      left: 10,
                      right: 20,
                      top: 10,
                      bottom: 10,
                      type: 'map',
                      map: 'GX', // 自定义扩展图表类型
                      emphasis: {
                        label: {
                          show: false,
                        }
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
                            color: '#606060'
                          }
                        },
                        symbol: 'path://M896 318.336H384a64 64 0 0 1-64-64v-190.592a64 64 0 0 1 64-64h512a64 64 0 0 1 64 64v190.592a64 64 0 0 1-64 64z m0-222.528a32 32 0 0 0-32-32h-448a32 32 0 0 0-32 32v126.592a32 32 0 0 0 32 32h448a32 32 0 0 0 32-32v-126.592zM735.424 192.38400000000001h-62.72a32.64 32.64 0 1 1 0-65.28h62.72a32.64 32.64 0 1 1 0 65.28zM355.392 597.8240000000001a228.16 228.16 0 0 0 192 105.408c103.616 0 190.336-69.696 218.304-164.352 5.696-19.2 9.728-42.496 10.112-63.424 4.608-0.32 9.28-3.072 13.696-3.904a133.248 133.248 0 0 0 97.408-74.88 32.384 32.384 0 0 1 57.536 29.056c-0.064 0.128 0.064-0.128 0 0-0.768 1.856-2.048 3.584-3.136 5.248a196.352 196.352 0 0 1-105.472 94.656c-24.32 137.6-144 242.624-288.448 242.624-114.752 0-213.248-66.816-261.504-163.008C162.688 599.488 64 498.304 64 373.76c0-93.952 61.952-174.016 145.088-210.368a60.8 60.8 0 0 1 6.592-2.944c0.896-0.384-0.896 0.384 0 0 2.368-0.576 5.696-1.408 8.256-1.408a30.848 30.848 0 1 1 10.752 59.904v0.064a167.36 167.36 0 0 0-105.728 154.688c0 80.128 56.64 147.2 131.968 163.584 11.52 2.496 23.424 4.032 35.648 4.032 11.072 0 21.824-1.216 32.256-3.264 6.208 21.312 14.848 41.536 26.56 59.776z',
                        symbolSize: 25,
                        symbolRotate: 180,
                        //symbolOffset: ['50%', '50%'],
                        label: {
                          normal: {
                            formatter: '{b}',
                            position: 'bottom',
                            show: true,
                            color: '#606060'
                          }
                        },
                        data: [
                          {name: '南宁市', coord: geoCoordMap['南宁市'],itemStyle: {color: '#0077d3'},label: {color: '#0077d3'}},
                          {name: '柳州市', coord: geoCoordMap['柳州市'],itemStyle: {color: '#0077d3'},label: {color: '#0077d3'}},
                          {name: '桂林市', coord: geoCoordMap['桂林市'],itemStyle: {color: '#0077d3'},label: {color: '#0077d3'}},
                          {name: '梧州市', coord: geoCoordMap['梧州市'],itemStyle: {color: '#3dae62'},label: {color: '#3dae62'}},
                          {name: '北海市', coord: geoCoordMap['北海市'],itemStyle: {color: '#0077d3'},label: {color: '#0077d3'}},
                          {name: '防城港市', coord: geoCoordMap['防城港市'],itemStyle: {color: '#0077d3'},label: {color: '#0077d3'}},
                          {name: '钦州市', coord: geoCoordMap['钦州市']},
                          {name: '贵港市', coord: geoCoordMap['贵港市']},
                          {name: '玉林市', coord: geoCoordMap['玉林市'],itemStyle: {color: '#3dae62'},label: {color: '#3dae62'}},
                          {name: '百色市', coord: geoCoordMap['百色市']},
                          {name: '贺州市', coord: geoCoordMap['贺州市']},
                          {name: '河池市', coord: geoCoordMap['河池市']},
                          {name: '来宾市', coord: geoCoordMap['来宾市']},
                          {name: '崇左市', coord: geoCoordMap['崇左市']},
                        ]
                      }
                    }
                  ]
                }
              }
              width="600px"
              height="368px"
            />*/}
            <img src={'/assets/bushu.png'} style={{width: '100%', height: '100%', padding: '20px 40px 20px 20px'}}/>
          </div>
          <div className={styles.right}>
            <div className={styles.row_1}>
              <div>总计部署<span>5</span>个区域</div>
              <div style={{margin: '0 20px'}}>正在搭建中<span>2</span>个</div>
              <div>尚未搭建<span>7</span>个</div>
            </div>
            <div className={styles.label_row}>当前部署区域</div>
            <div className={styles.detail}>
              <div className={styles.label}>
                <img src={'/assets/icon/yun1.png'} className={styles.icon}/>
                {/*<Iconfont type={'yun'} className={styles.icon} style={{ color: '#0077d3' }}/>*/}
                <span>开通运行：</span>
              </div>
              <div className={styles.item}>
                <span>南宁市</span>
                <span>柳州市</span>
                <span>北海市</span>
                <span>防城港市</span>
                <span>桂林市</span>
              </div>
            </div>
            <div className={styles.detail}>
              <div className={styles.label}>
                <img src={'/assets/icon/yun2.png'} className={styles.icon}/>
                {/*<Iconfont type={'yun'} className={styles.icon} style={{ color: '#3dae62' }}/>*/}
                <span>正在搭建：</span>
              </div>
              <div className={styles.item}>
                <span>玉林市</span>
                <span>梧州市</span>
              </div>
            </div>
            <div className={styles.detail}>
              <div className={styles.label}>
                <img src={'/assets/icon/yun3.png'} className={styles.icon}/>
                {/*<Iconfont type={'yun'} className={styles.icon} style={{ color: '#606060' }}/>*/}
                <span>尚未搭建：</span>
              </div>
              <div className={styles.item}>
                <span>河池市</span>
                <span>百色市</span>
                <span>贺州市</span>
                <span>崇左市</span>
                <span>来宾市</span>
                <span>贵港市</span>
                <span>钦州市</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.title}><span>自治区直属部门连接情况</span></div>
        <SummaryTable
          className={styles.content_2}
          title="自治区直属部门连接情况"
          data={this.state.data}
          config={{
            serialNumber: { show: false },
            columns: [
              { key: 'name', label: '部门名称', span: 8 },
              { key: 'status', label: '状态', span: 4, render: (item) => {return(<span style={{color: '#45b167'}}>{item.status}</span>)} },
              { key: 'num1', label: '交换量', span: 4 },
              { key: 'num2', label: '调用量', span: 4 },
              { key: 'num3', label: '贡献量', span: 4 },
            ]
          }}
        />
      </div>
    )
  }
}
