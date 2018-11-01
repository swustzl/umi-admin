import React from 'react';
import styles from './DataUsed.less';
import CustomTitle from "../../../components/CustomTitle/index";
import Iconfont from "../../../components/Iconfont/Iconfont";
import SummaryTable from "./components/SummaryTable";

export default class extends React.Component{
  state={
    resourceUsedData: [
      { name: '人口库', num: 3032, usedInfo: '发改委/310  网信办/310  信访办/223  住建厅/21  公安厅/34  '},
      { name: '车辆信息资源', num: 3032, usedInfo: '发改委/310  网信办/310  信访办/223  住建厅/21'},
      { name: '城镇人口户籍资源', num: 3032, usedInfo: '发改委/310  网信办/310  信访办/223  住建厅/21'},
      { name: '高校学籍库', num: 3032, usedInfo: '网信办/230  信访办/23  住建厅/221  公安厅/21 '},
      { name: '气象资源接口', num: 3032, usedInfo: '发改委/310  网信办/310  信访办/223  住建厅/21'},
      { name: '渔业资源', num: 3032, usedInfo: '发改委/310  网信办/310  信访办/223  住建厅/21'},
      { name: '耕地面积统计', num: 3032, usedInfo: '信访办/223  住建厅/211  公安厅/213  '},
      { name: '林业资源', num: 3032, usedInfo: '发改委/310  网信办/310  信访办/223  住建厅/21'},
      { name: '耕地面积统计', num: 3032, usedInfo: '发改委/310  网信办/310  信访办/223  住建厅/21'},
      { name: '林业资源', num: 3032, usedInfo: '发改委/310  网信办/310  信访办/223  住建厅/21'},
    ],
    dataUsedData: [
      { name: '发改委', num: 3032, usedInfo: '人口库  车辆信息资源  城镇人口户籍资源  气象资源接口'},
      { name: '网信办', num: 3032, usedInfo: '车辆信息资源  城镇人口户籍资源  气象资源接口 '},
      { name: '信访办', num: 3032, usedInfo: '城镇人口户籍资源  气象资源接口 '},
      { name: '住建厅', num: 3032, usedInfo: '车辆信息资源  城镇人口户籍资源  气象资源接口'},
      { name: '公安厅', num: 3032, usedInfo: '城镇人口户籍资源  气象资源接口 '},
      { name: '教育局', num: 3032, usedInfo: '车辆信息资源  城镇人口户籍资源  气象资源接口'},
      { name: '气象局', num: 3032, usedInfo: '人口库  车辆信息资源  城镇人口户籍资源  气象资源接口'},
      { name: '信访办', num: 3032, usedInfo: '车辆信息资源  城镇人口户籍资源  气象资源接口'},
      { name: '发改委', num: 3032, usedInfo: '人口库  车辆信息资源  城镇人口户籍资源  气象资源接口'},
      { name: '发改委', num: 3032, usedInfo: '车辆信息资源  城镇人口户籍资源  气象资源接口'},
    ],
    hotDirUsed: [
      { name: '人口库', num: 3032, usedInfo: '发改委/310  网信办/310  信访办/223  住建厅/21  公安厅/34  '},
      { name: '车辆信息资源', num: 3032, usedInfo: '发改委/310  网信办/310  信访办/223  住建厅/21'},
      { name: '城镇人口户籍资源', num: 3032, usedInfo: '发改委/310  网信办/310  信访办/223  住建厅/21'},
      { name: '高校学籍库', num: 3032, usedInfo: '网信办/230  信访办/23  住建厅/221  公安厅/21 '},
      { name: '气象资源接口', num: 3032, usedInfo: '发改委/310  网信办/310  信访办/223  住建厅/21'},
      { name: '渔业资源', num: 3032, usedInfo: '发改委/310  网信办/310  信访办/223  住建厅/21'},
      { name: '耕地面积统计', num: 3032, usedInfo: '信访办/223  住建厅/211  公安厅/213  '},
      { name: '林业资源', num: 3032, usedInfo: '发改委/310  网信办/310  信访办/223  住建厅/21'},
      { name: '耕地面积统计', num: 3032, usedInfo: '发改委/310  网信办/310  信访办/223  住建厅/21'},
      { name: '林业资源', num: 3032, usedInfo: '发改委/310  网信办/310  信访办/223  住建厅/21'},
    ],
  }
  render(){
    return(
      <div className={styles.main}>
        <CustomTitle title="交换平台数据调用情况"/>
        <div className={styles.data_total}>
          <div className={styles.total_title}><span>交换平台数据调用总量</span></div>
          <div className={styles.total}>总计<span>6723546</span>个</div>
          <div className={styles.line}/>
          <div className={styles.detail_data}>
            <div>季度<span>343213</span>次</div>
            <div>本月<span>11212</span>次</div>
            <div>今日<span>132</span>次</div>
          </div>
        </div>
        <div className={styles.title}><span>热门主题调用情况统计</span></div>
        <div className={styles.data}>
          <div>季度<span>4213</span>次</div>
          <div>本月<span>1212</span>次</div>
          <div>今日<span>132</span>次</div>
        </div>
        <SummaryTable
          className={styles.content}
          title="热门主题调用情况"
          data={this.state.resourceUsedData}
          config={{
            serialNumber: { show: false },
            columns: [
              { key: 'name', label: '名称', span: 8 },
              { key: 'num', label: '调用（次）', span: 4 },
              { key: 'usedInfo', label: '调用单位/次数', span: 12 },
            ]
          }}
        />
        <div className={styles.title}><span>热门资源调用情况统计</span></div>
        <div className={styles.data}>
          <div>季度<span>3233</span>次</div>
          <div>本月<span>1282</span>次</div>
          <div>今日<span>32</span>次</div>
        </div>
        <SummaryTable
          className={styles.content}
          title="热门资源调用情况"
          data={this.state.resourceUsedData}
          config={{
            serialNumber: { show: false },
            columns: [
              { key: 'name', label: '名称', span: 8 },
              { key: 'num', label: '调用（次）', span: 4 },
              { key: 'usedInfo', label: '调用单位/次数', span: 12 },
            ]
          }}
        />
        <div className={styles.title}><span>热门目录调用情况统计</span></div>
        <div className={styles.data}>
          <div>季度<span>4213</span>次</div>
          <div>本月<span>1212</span>次</div>
          <div>今日<span>132</span>次</div>
        </div>
        <SummaryTable
          className={styles.content}
          title="热门目录调用情况"
          searchVisible
          onSearch={(value)=>{
            this.setState({
              hotDirUsed: this.state.resourceUsedData.filter(d => d.name.includes(value))
            })
          }}
          data={this.state.hotDirUsed}
          config={{
            serialNumber: { show: false },
            columns: [
              { key: 'name', label: '名称', span: 8 },
              { key: 'num', label: '调用（次）', span: 4 },
              { key: 'usedInfo', label: '调用单位/次数', span: 12 },
            ]
          }}
        />
      </div>
    )
  }
}
