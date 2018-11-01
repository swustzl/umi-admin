import React from 'react';
import styles from './SharedData.less';
import CustomTitle from "../../../components/CustomTitle/index";
import Iconfont from "../../../components/Iconfont/Iconfont";
import SummaryBlock from "./components/SummaryBlock";
import SummaryTable from "./components/SummaryTable";
import SummaryChart from "./components/SummaryChart";

export default class extends React.Component{
  state = {
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
    ],
    resourceData: [
      {name: '北海市', resourceNum: 30, dataNum: 1230},
      {name: '防城港市', resourceNum: 28, dataNum: 1235},
      {name: '玉林市', resourceNum: 25, dataNum: 3230},
      {name: '柳州市', resourceNum: 23, dataNum: 4230},
      {name: '钦州市', resourceNum: 22, dataNum: 4230},
      {name: '桂林市', resourceNum: 21, dataNum: 1430},
      {name: '梧州市', resourceNum: 16, dataNum: 1530},
      {name: '梧州市', resourceNum: 14, dataNum: 1340},
      {name: '梧州市', resourceNum: 13, dataNum: 660},
      {name: '梧州市', resourceNum: 11, dataNum: 1430},
    ]
  };
  render(){
    return(
      <div className={styles.main}>
        <CustomTitle title="交换平台共享数据情况"/>
        <div className={styles.data_total}>
          <div className={styles.total_title}><span>交换平台共享数据总量</span></div>
          <div className={styles.total}>总计<span>67546</span>个</div>
        </div>
        <div className={styles.title}><span>平台目录情况统计</span></div>
        <div className={styles.data}>
          <div>基础信息资源目录<span>321</span>个</div>
          <div>主题信息资源目录<span>282</span>个</div>
          <div>部门信息资源目录<span>32</span>个</div>
        </div>
        <div className={styles.content}>
          <div className={styles.row_1}>
            <SummaryBlock
              title="广西壮族自治区"
              data={[
                {label: '今日上线（个）', value:12},
                {label: '累计上线（个）', value:2312},
              ]}
            />
            <SummaryBlock
              title="设区市"
              data={[
                {label: '今日上线（次）', value:2312},
                {label: '累计上线（次）', value:373482}
              ]}
            />
          </div>
          <div className={styles.row_2}>
            <SummaryTable
              title="自治区区直单位提供目录情况"
              data={this.state.data}
              config={{
                serialNumber: { show: true, span: 4 },
                columns: [
                  { key: 'name', label: '名称', span: 8 },
                  { key: 'num', label: '提供目录数量（个）', span: 10 },
                ]
              }}
            />
            <SummaryTable
              title="设区市提供目录情况"
              data={this.state.data}
              config={{
                serialNumber: { show: true, span: 4 },
                columns: [
                  { key: 'name', label: '名称', span: 8 },
                  { key: 'num', label: '提供目录数量（个）', span: 10 },
                ]
              }}
            />
          </div>
        </div>

        <div className={styles.title}><span>平台资源情况统计</span></div>
        <div className={styles.data}>
          <div>已发布共享库表<span>321</span>个</div>
          <div>已发布共享文件<span>12万</span>个</div>
          <div>已发布共享接口<span>234</span>个</div>
        </div>
        <div className={styles.content}>
          <div className={styles.row_1}>
            <SummaryBlock
              title="广西壮族自治区"
              data={[
                {label: '库表（个）', value:123},
                {label: '文件（个）', value:2312},
                {label: '接口（个）', value:1212},
              ]}
            />
            <SummaryBlock
              title="设区市"
              data={[
                {label: '库表（个）', value:123},
                {label: '文件（个）', value:2312},
                {label: '接口（个）', value:1212},
              ]}
            />
          </div>
          <SummaryChart
            className={styles.chart}
            title="交换平台资源走势"
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
                data: [820, 932, 901, 934, 1290, 1330, 1320, 1320, 1320, 1320, 1320, 1320, 1320, 1320, 1320],
                type: 'line',
                smooth: true,
                color: '#7ecef4',
                areaStyle: {normal: {}},
              }]
            }}
          />
          <div className={styles.row_2}>
            <SummaryTable
              title="自治区提供资源情况"
              data={this.state.resourceData}
              config={{
                serialNumber: { show: true, span: 4 },
                columns: [
                  { key: 'name', label: '名称', span: 8 },
                  { key: 'resourceNum', label: '资源（个）', span: 6 },
                  { key: 'dataNum', label: '数据量（条）', span: 6 },
                ]
              }}
            />
            <SummaryTable
              title="设区市提供资源情况"
              data={this.state.resourceData}
              config={{
                serialNumber: { show: true, span: 4 },
                columns: [
                  { key: 'name', label: '名称', span: 8 },
                  { key: 'resourceNum', label: '资源（个）', span: 6 },
                  { key: 'dataNum', label: '数据量（条）', span: 6 },
                ]
              }}
            />
          </div>
        </div>
      </div>
    )
  }
}
