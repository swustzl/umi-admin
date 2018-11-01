import React from 'react';
import {Pagination} from 'antd';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import styles from './index.less';
import CustomTitle from "../../../components/CustomTitle/index";

@connect()
export default class extends React.Component{
  state={
    pageNumber: 1,
    data: [
      { title: '让公益更透明、更阳光——解读《关于切实做好社会公益事业建设领域政府信息公开工作的通知》', date: '2018-08-31' },
      { title: '《广西壮族自治区人民政府办公厅关于制定和实施老年人照顾服务项目的实施意见》解读 ', date: '2018-08-31' },
      { title: '《广西壮族自治区人民政府办公厅关于加强公共资源配置领域政府信息公开工作的通知》政策解读', date: '2018-08-31' },
      { title: '《关于推进防灾减灾救灾体制机制改革的实施意见》解读', date: '2018-08-31' },
      { title: '《广西壮族自治区就业补助资金管理办法》政策解读', date: '2018-08-31' },
      { title: '广西深化改革优化营商环境系列文件政策解读：优化要素供给厚植发展土壤', date: '2018-08-31' },
      { title: '广西壮族自治区主席质量奖管理办法（2018年修订）政策解读', date: '2018-08-31' },
      { title: '《广西壮族自治区就业补助资金管理办法》政策解读', date: '2018-08-31' },
      { title: '关于《广西壮族自治区人民政府关于取消下放和调整一批行政许可事项的决定》的解读', date: '2018-08-31' },
      { title: '关于《广西壮族自治区建筑工程安全生产管理办法》的解读', date: '2018-08-31' },
      { title: '关于《广西壮族自治区山口红树林生态自然保护区和北仑河口国家级自然保护区管理办法》的解读 ', date: '2018-08-31' },
      { title: '关于《广西壮族自治区人民政府关于修改〈广西壮族自治区政府投资建设项目审计办法〉和〈广西壮族自治区建设工程造价管理办法... ', date: '2018-08-31' },
      { title: '《广西壮族自治区劳动关系和谐单位认定办法（试行）》政策解读', date: '2018-08-31' },
      { title: '《广西教育提升三年行动计划》八大工程解析', date: '2018-08-31' },
      { title: '自治区党委政府召开数字广西建设大会鹿心社陈武讲话 ', date: '2018-08-31' },
      { title: '《广西壮族自治区退役士兵安置办法》解读', date: '2018-08-31' },
      { title: '《广西壮族自治区本级财政性资金管理使用领域信用负面清单管理办法》政策解读'},
      { title: '解读《广西壮族自治区人民政府关于公布自治区政府部门行政权力运行流程的通知》', date: '2018-08-31' },
      { title: '解读《广西关于深化用海管理体制机制改革的意见》' },
      { title: '《广西壮族自治区人民政府办公厅关于进一步促进农产品加工业发展的实施意见》政策解读' },
      { title: '自治区党委政府召开数字广西建设大会鹿心社陈武讲话 ', date: '2018-08-31' },
      { title: '《广西壮族自治区退役士兵安置办法》解读', date: '2018-08-31' },
      { title: '《广西壮族自治区本级财政性资金管理使用领域信用负面清单管理办法》政策解读'},
      { title: '解读《广西壮族自治区人民政府关于公布自治区政府部门行政权力运行流程的通知》', date: '2018-08-31' },
      { title: '解读《广西关于深化用海管理体制机制改革的意见》' },
      { title: '自治区党委政府召开数字广西建设大会鹿心社陈武讲话 ', date: '2018-08-31' },
      { title: '《广西壮族自治区退役士兵安置办法》解读', date: '2018-08-31' },
      { title: '《广西壮族自治区本级财政性资金管理使用领域信用负面清单管理办法》政策解读'},
      { title: '解读《广西壮族自治区人民政府关于公布自治区政府部门行政权力运行流程的通知》', date: '2018-08-31' },
      { title: '解读《广西关于深化用海管理体制机制改革的意见》' },
      { title: '自治区党委政府召开数字广西建设大会鹿心社陈武讲话 ', date: '2018-08-31' },
      { title: '《广西壮族自治区退役士兵安置办法》解读', date: '2018-08-31' },
      { title: '《广西壮族自治区本级财政性资金管理使用领域信用负面清单管理办法》政策解读'},
      { title: '解读《广西壮族自治区人民政府关于公布自治区政府部门行政权力运行流程的通知》', date: '2018-08-31' },
      { title: '解读《广西关于深化用海管理体制机制改革的意见》' },
      { title: '自治区党委政府召开数字广西建设大会鹿心社陈武讲话 ', date: '2018-08-31' },
      { title: '《广西壮族自治区退役士兵安置办法》解读', date: '2018-08-31' },
      { title: '《广西壮族自治区本级财政性资金管理使用领域信用负面清单管理办法》政策解读'},
      { title: '解读《广西壮族自治区人民政府关于公布自治区政府部门行政权力运行流程的通知》', date: '2018-08-31' },
      { title: '解读《广西关于深化用海管理体制机制改革的意见》' },
      { title: '自治区党委政府召开数字广西建设大会鹿心社陈武讲话 ', date: '2018-08-31' },
      { title: '《广西壮族自治区退役士兵安置办法》解读', date: '2018-08-31' },
      { title: '《广西壮族自治区本级财政性资金管理使用领域信用负面清单管理办法》政策解读'},
      { title: '解读《广西壮族自治区人民政府关于公布自治区政府部门行政权力运行流程的通知》', date: '2018-08-31' },
      { title: '解读《广西关于深化用海管理体制机制改革的意见》' },
      { title: '自治区党委政府召开数字广西建设大会鹿心社陈武讲话 ', date: '2018-08-31' },
      { title: '《广西壮族自治区退役士兵安置办法》解读', date: '2018-08-31' },
      { title: '《广西壮族自治区本级财政性资金管理使用领域信用负面清单管理办法》政策解读'},
      { title: '解读《广西壮族自治区人民政府关于公布自治区政府部门行政权力运行流程的通知》', date: '2018-08-31' },
      { title: '解读《广西关于深化用海管理体制机制改革的意见》' },
      { title: '自治区党委政府召开数字广西建设大会鹿心社陈武讲话 ', date: '2018-08-31' },
      { title: '《广西壮族自治区退役士兵安置办法》解读', date: '2018-08-31' },
      { title: '《广西壮族自治区本级财政性资金管理使用领域信用负面清单管理办法》政策解读'},
      { title: '解读《广西壮族自治区人民政府关于公布自治区政府部门行政权力运行流程的通知》', date: '2018-08-31' },
      { title: '解读《广西关于深化用海管理体制机制改革的意见》' },
    ]
  };
  onClickItem = () => {
    this.props.dispatch(routerRedux.push({
      pathname: `/gx/policy-basis/detail`,
    }))
  };
  render(){
    const { pageNumber = 1, data = [] } = this.state;
    const showData = data.filter((d, index) => index >= (pageNumber-1) * 20 && index < pageNumber *20)
    return(
      <div className={styles.main}>
        <CustomTitle title="政策依据"/>
        <div className={styles.list}>
          {
            showData.map((item, index)=>{
              let result = []
              if(index !== 0 && index % 5 === 0) {
                result.push(<div key={`line${index}`} className={styles.line}/>)
              }
              result.push(<div className={styles.item} key={index} onClick={() => this.onClickItem()}>
                <span>{item.title}</span>
                <span className={styles.date}>{item.date && `(${item.date})`}</span>
              </div>)
              return result;
            })
          }
          <div className={styles.line}/>
          <div className={styles.pagination}>
            <Pagination
              showQuickJumper
              current={pageNumber}
              total={data.length}
              pageSize={20}
              onChange={(pageNumber)=>{
                this.setState({pageNumber})
              }}
            />
          </div>
        </div>
      </div>
    )
  }
}
