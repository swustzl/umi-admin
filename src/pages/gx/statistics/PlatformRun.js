import React from 'react';
import styles from './PlatformRun.less';
import CustomTitle from "../../../components/CustomTitle/index";
import SummaryBlock from "./components/SummaryBlock";
import SummaryTable from "./components/SummaryTable";
import SummaryChart from "./components/SummaryChart";
import VmwareStatus from "./components/VmwareStatus";
import PhysicalConfig from "./components/PhysicalConfig";

export default class extends React.Component{
  state={
    data: [
      {name: '北海市', num: 30},
      {name: '防城港市', num: 28},
      {name: '玉林市', num: 25},
      {name: '柳州市', num: 23},
      {name: '钦州市', num: 22},
      {name: '桂林市', num: 21},
      {name: '梧州市', num: 16},
      {name: '梧州市', num: 14},
      {name: '梧州市', num: 13},
      {name: '梧州市', num: 11},
    ]
  };
  render(){
    return(
      <div className={styles.main}>
        <CustomTitle title="交换平台运行情况"/>
        <div className={styles.title}><span>平台运行情况统计</span></div>
        <div className={styles.total_run_time}>平台累计运行时间<span>231小时21分13秒</span></div>
        <div className={styles.content}>
          <div className={styles.row_1}>
            <VmwareStatus/>
            <PhysicalConfig/>
          </div>
          <div className={styles.row_1}>
            <SummaryBlock
              title="登录情况"
              data={[
                {label: '今日登录单位（个）', value:12},
                {label: '今日登录次数（次）', value:2312},
                {label: '累计登录（次）', value:373482}
              ]}
            />
            <SummaryBlock
              title="目录访问量"
              data={[
                {label: '今日访问量（次）', value:2312},
                {label: '累计访问量（次）', value:373482}
              ]}
            />
          </div>
          <div className={styles.row_2}>
            <SummaryTable
              title="自治区区直单位登录情况"
              data={this.state.data}
              config={{
                serialNumber: { show: true, span: 4 },
                columns: [
                  { key: 'name', label: '名称', span: 8 },
                  { key: 'num', label: '登录次数（次）', span: 10 },
                ]
              }}
            />
            <SummaryTable
              title="设区市登录情况"
              data={this.state.data}
              config={{
                serialNumber: { show: true, span: 4 },
                columns: [
                  { key: 'name', label: '名称', span: 8 },
                  { key: 'num', label: '登录次数（次）', span: 10 },
                ]
              }}
            />
          </div>
          <SummaryChart
            className={styles.chart}
            title="登录情况走势"
            config={{
              xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15']
              },
              yAxis: {
                type: 'value'
              },
              series: [{
                data: [820, 932, 901, 934, 1090, 1130, 1220, 1290, 1320, 1360, 1390, 1420, 1520, 1530, 1620],
                type: 'line',
                smooth: true,
                color: '#7ecef4',
                areaStyle: {normal: {}},
              }]
            }}
          />
          <SummaryChart
            className={styles.chart}
            title="目录访问量情况走势"
            config={{
              xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15']
              },
              yAxis: {
                type: 'value'
              },
              series: [{
                data: [820, 932, 901, 934, 1090, 1130, 1220, 1290, 1320, 1360, 1390, 1420, 1520, 1530, 1620],
                type: 'line',
                smooth: true,
                color: '#7ecef4',
                areaStyle: {normal: {}}, // 注释掉，只显示线型
              }]
            }}
          />
        </div>
      </div>
    )
  }
}
