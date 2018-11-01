import React from 'react';
import { Input, Pagination, Rate, Row, Col, Button, Icon, Select } from 'antd';
import classNames from 'classnames';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import styles from './index.less'
import Iconfont from "../../../components/Iconfont/Iconfont";
import {mapStateToProps} from "../../../utils/util";

const Search = Input.Search;
const Option = Select.Option;
@connect(mapStateToProps('sharedResource'))
export default class extends React.Component{
  state = {
    pageNumber: 1,
    tabs: [
      { key: 'all', label: '全部'},
      { key: 'table', label: '库表'},
      { key: 'file', label: '文件'},
      { key: 'folder', label: '文件夹'},
      { key: 'interface', label: '接口'},
    ],
    currentTabKey: 'all',
    filterCondition: {
      search: '',
    },
  };
  onClickContentItem = (id) => {
    this.props.dispatch(routerRedux.push({
      pathname: `/gx/shared-resource/${id}`,
    }))
  };
  render(){
    const { sharedResource = {} } = this.props;
    const { pageNumber = 1, filterCondition } = this.state;
    let { data = [] } = sharedResource;
    data = data.filter((o) => !o.title || o.title.includes(filterCondition.search));
    const showData = data.filter((d, index) => index >= (pageNumber-1) * 6 && index < pageNumber * 6)

    return(
      <div className={styles.main}>
        <div className={styles.data_ds}>
          <div className={styles.title}>共享资源</div>
          <div className={styles.num}>52346</div>
          <div className={styles.sorts}>
            <div className={styles.sort_btn}>排列顺序</div>
            <div className={styles.sort_btn}>时间顺序</div>
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
          <div className={styles.typeGroup}>
            <div className={styles.label}>
              <span>全部类型</span>
            </div>
            <div className={styles.item}>
              <div className={styles.name}>库表</div>
            </div>
            <div className={styles.item}>
              <div className={styles.name}>文件</div>
            </div>
            <div className={styles.item}>
              <div className={styles.name}>文件夹</div>
            </div>
            <div className={styles.item}>
              <div className={styles.name}>接口</div>
            </div>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.classification}>
            {
              this.state.tabs.map((tab, index) => {
                let style = { cursor: 'pointer' };
                if(tab.key === this.state.currentTabKey) {
                  style.color = '#0068b7'
                }
                return (
                  <span key={index} style={style} onClick={() => {this.setState({ currentTabKey: tab.key })}}>{tab.label}</span>
                )
              })
            }
          </div>
          {
            showData.map((item, index) => {
              return (
                <div key={index} className={styles.content_item}>
                  <div className={styles.col_1}>
                    <div className={styles.c_title} onClick={() => this.onClickContentItem(item.id)}>{item.title}</div>
                    <div className={styles.c_btns}>
                      {
                        item.database && item.database.tables && item.database.tables.length > 0
                        && <Button className={styles.btn_1}>库表</Button>
                      }
                      {
                        item.interface
                        && <Button className={styles.btn_3}>接口</Button>
                      }
                      {
                        item.folders && item.folders.length > 0
                        && <Button className={styles.btn_folder}>文件夹</Button>
                      }
                      {
                        item.files && item.files.length > 0
                        && <Button className={styles.btn_2}>文件</Button>
                      }
                      {
                        item.files && item.files.length > 0
                        && <div className={styles.download}>
                          <Iconfont type={'xiazai'} className={styles.icon}/>
                          文件下载
                        </div>
                      }
                    </div>
                  </div>
                  <div className={styles.col_2}>
                    <div className={styles.c_source_theme}>
                      <div className={styles.c_sources}>来源：{item.source}</div>
                      <div className={styles.c_belong}>所属主题：{item.subject}</div>
                    </div>
                    <div className={styles.c_props}>
                      <div className={styles.c_shared_props}>共享属性：{item.sharedType}</div>
                      <div className={styles.c_open_props}>开放属性：{item.openType}</div>
                    </div>
                  </div>
                  <div className={styles.col_3}>
                    <div className={styles.c_props}>
                      <div className={styles.number}>访问量：{item.visitNum}</div>
                      <div className={styles.number}>申请量：{item.applyNum}</div>
                    </div>
                    <div className={styles.update_time}>更新时间：{item.updateTime}</div>
                  </div>
                </div>
              )
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
    )
  }
}
