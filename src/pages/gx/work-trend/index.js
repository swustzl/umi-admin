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
      { title: '全国政协副主席辜胜阻来桂开展脱贫攻坚民主监督调研', date: '2018-08-31' },
      { title: '鹿心社：开创政协系统党的建设新局面推动人民政协工作迈上新台阶', date: '2018-08-31' },
      { title: '王培安一行来桂调研并出席自治区贯彻落实全国计生协改革部署推进会精神调研座谈会黄俊华出席座谈会', date: '2018-08-31' },
      { title: '自治区政府与北京理工大学签署战略合作协议陈武会见张军', date: '2018-08-31' },
      { title: '自治区党委政府召开数字广西建设大会鹿心社陈武讲话', date: '2018-08-31' },
      { title: '全国政协副主席辜胜阻来桂开展脱贫攻坚民主监督调研', date: '2018-08-31' },
      { title: '鹿心社：开创政协系统党的建设新局面推动人民政协工作迈上新台阶', date: '2018-08-31' },
      { title: '王培安一行来桂调研并出席自治区贯彻落实全国计生协改革部署推进会精神调研座谈会黄俊华出席座谈会', date: '2018-08-31' },
      { title: '自治区政府与北京理工大学签署战略合作协议陈武会见张军', date: '2018-08-31' },
      { title: '自治区党委政府召开数字广西建设大会鹿心社陈武讲话', date: '2018-08-31' },
      { title: '全国政协副主席辜胜阻来桂开展脱贫攻坚民主监督调研', date: '2018-08-31' },
      { title: '鹿心社：开创政协系统党的建设新局面推动人民政协工作迈上新台阶', date: '2018-08-31' },
      { title: '王培安一行来桂调研并出席自治区贯彻落实全国计生协改革部署推进会精神调研座谈会黄俊华出席座谈会', date: '2018-08-31' },
      { title: '自治区政府与北京理工大学签署战略合作协议陈武会见张军', date: '2018-08-31' },
      { title: '自治区党委政府召开数字广西建设大会鹿心社陈武讲话', date: '2018-08-31' },
      { title: '全国政协副主席辜胜阻来桂开展脱贫攻坚民主监督调研', date: '2018-08-31' },
      { title: '鹿心社：开创政协系统党的建设新局面推动人民政协工作迈上新台阶', date: '2018-08-31' },
      { title: '王培安一行来桂调研并出席自治区贯彻落实全国计生协改革部署推进会精神调研座谈会黄俊华出席座谈会', date: '2018-08-31' },
      { title: '自治区政府与北京理工大学签署战略合作协议陈武会见张军', date: '2018-08-31' },
      { title: '自治区党委政府召开数字广西建设大会鹿心社陈武讲话', date: '2018-08-31' },
      { title: '自治区政府与北京理工大学签署战略合作协议陈武会见张军', date: '2018-08-31' },
      { title: '自治区党委政府召开数字广西建设大会鹿心社陈武讲话', date: '2018-08-31' },
      { title: '全国政协副主席辜胜阻来桂开展脱贫攻坚民主监督调研', date: '2018-08-31' },
      { title: '鹿心社：开创政协系统党的建设新局面推动人民政协工作迈上新台阶', date: '2018-08-31' },
      { title: '王培安一行来桂调研并出席自治区贯彻落实全国计生协改革部署推进会精神调研座谈会黄俊华出席座谈会', date: '2018-08-31' },
      { title: '自治区政府与北京理工大学签署战略合作协议陈武会见张军', date: '2018-08-31' },
      { title: '自治区党委政府召开数字广西建设大会鹿心社陈武讲话', date: '2018-08-31' },
      { title: '自治区政府与北京理工大学签署战略合作协议陈武会见张军', date: '2018-08-31' },
      { title: '自治区党委政府召开数字广西建设大会鹿心社陈武讲话', date: '2018-08-31' },
      { title: '全国政协副主席辜胜阻来桂开展脱贫攻坚民主监督调研', date: '2018-08-31' },
      { title: '鹿心社：开创政协系统党的建设新局面推动人民政协工作迈上新台阶', date: '2018-08-31' },
      { title: '王培安一行来桂调研并出席自治区贯彻落实全国计生协改革部署推进会精神调研座谈会黄俊华出席座谈会', date: '2018-08-31' },
      { title: '自治区政府与北京理工大学签署战略合作协议陈武会见张军', date: '2018-08-31' },
      { title: '自治区党委政府召开数字广西建设大会鹿心社陈武讲话', date: '2018-08-31' },
      { title: '自治区政府与北京理工大学签署战略合作协议陈武会见张军', date: '2018-08-31' },
      { title: '自治区党委政府召开数字广西建设大会鹿心社陈武讲话', date: '2018-08-31' },
      { title: '全国政协副主席辜胜阻来桂开展脱贫攻坚民主监督调研', date: '2018-08-31' },
      { title: '鹿心社：开创政协系统党的建设新局面推动人民政协工作迈上新台阶', date: '2018-08-31' },
      { title: '王培安一行来桂调研并出席自治区贯彻落实全国计生协改革部署推进会精神调研座谈会黄俊华出席座谈会', date: '2018-08-31' },
      { title: '自治区政府与北京理工大学签署战略合作协议陈武会见张军', date: '2018-08-31' },
      { title: '自治区党委政府召开数字广西建设大会鹿心社陈武讲话', date: '2018-08-31' },
      { title: '自治区政府与北京理工大学签署战略合作协议陈武会见张军', date: '2018-08-31' },
      { title: '自治区党委政府召开数字广西建设大会鹿心社陈武讲话', date: '2018-08-31' },
      { title: '全国政协副主席辜胜阻来桂开展脱贫攻坚民主监督调研', date: '2018-08-31' },
      { title: '鹿心社：开创政协系统党的建设新局面推动人民政协工作迈上新台阶', date: '2018-08-31' },
      { title: '王培安一行来桂调研并出席自治区贯彻落实全国计生协改革部署推进会精神调研座谈会黄俊华出席座谈会', date: '2018-08-31' },
      { title: '自治区政府与北京理工大学签署战略合作协议陈武会见张军', date: '2018-08-31' },
      { title: '自治区党委政府召开数字广西建设大会鹿心社陈武讲话', date: '2018-08-31' },
    ]
  };
  onClickItem = () => {
    this.props.dispatch(routerRedux.push({
      pathname: `/gx/work-trend/detail`,
    }))
  };
  render(){
    const { pageNumber = 1, data = [] } = this.state;
    const showData = data.filter((d, index) => index >= (pageNumber-1) * 20 && index < pageNumber *20)
    return(
      <div className={styles.main}>
        <CustomTitle title="工作动态"/>
        <div className={styles.list}>
          {
            showData.map((item, index)=>{
              let result = []
              if(index !== 0 && index % 5 === 0) {
                result.push(<div key={`line${index}`} className={styles.line}/>)
              }
              result.push(<div className={styles.item} key={index} onClick={this.onClickItem}>
                <span>{item.title}</span>
                <span className={styles.date}>{`(${item.date})`}</span>
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
