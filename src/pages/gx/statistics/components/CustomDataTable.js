import React from 'react';
import classNames from 'classnames';
import {Icon, Row, Col} from 'antd';
import styles from './CustomDataTable.less';

export default class CustomDataTable extends React.Component {
  getName = () => {
    const str = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz';
    const maxStr = str.length;
    let string = '';
    const len = 16;
    for (let i = 0; i < len; i++) {
      string += str.charAt(Math.floor(Math.random() * maxStr));
    }
    return string;
  };
  state = {
    showData: [],
    nextPage: 1,
    name: this.getName(),
  };
  componentWillMount () {
    this.handleData();
    const { data = [], showSize = 5, duration = 5000 } = this.props;
    const { animation = data.length > showSize } = this.props;
    if (animation) {
      this.interval = setInterval(() => {
        //this.handleData()
        let contentElement = document.getElementById(this.state.name);
        if(contentElement) {
          contentElement.className = classNames(styles.t_content);
          setTimeout(()=>{
            document.getElementById(this.state.name).className =classNames(styles.t_content, styles.bounceAnimation);
          }, 100);
          setTimeout(()=>{
            this.handleData()
          }, 600);
        } else {
          this.handleData()
        }
      },duration)
    }
  }
  handleData = () => {
    const { data = [], showSize = 5 } = this.props;
    let page = this.state.nextPage;
    let start = (page - 1) * showSize;
    let end = page * showSize;
    let nextPage = page + 1;
    if(start >= data.length) {
      nextPage = 2;
      start = 0;
      end = showSize;
    }
    this.setState({
      nextPage,
      showData: data.filter((d, index) => index >= start && index < end),
      contentClassName: classNames(styles.t_content, styles.bounceAnimation),
    });
  };
  componentWillUnmount(){
    this.timeout && clearTimeout(this.timeout);
    this.interval && clearInterval(this.interval);
  }
  render(){
    const { title, className, showSize = 5, config={}} = this.props;
    const { nextPage, showData = []} = this.state;
    const { serialNumber = {}, columns = [] } = config;
    let current = (nextPage - 2) * showSize + 1;
    let replenish = [];
    for (let i = 0; i < showSize - showData.length; i ++) {
      replenish.push(<div key={`replenish_${i}`} className={styles.item} />)
    }
    return (
      <div className={classNames(styles.main,className)}>
        <div className={styles.header}>
          {title}
        </div>
        <Row className={styles.t_header}>
          {serialNumber.show && <Col className={styles.t_header_col} span={serialNumber.span}>序号</Col>}
          {
            columns.map((col, index) => {
              return(<Col key={index} className={styles.t_header_col} span={col.span} offset={col.offset}>{col.label}</Col>)
            })
          }
        </Row>
        <div id={this.state.name} className={styles.t_content} style={{ height: showSize * 20 }}>
          {
            showData.map((item, index)=>{
              let style={}
              return(
                <Row key={index} className={styles.item} style={style}>
                  {serialNumber.show && <Col span={serialNumber.span}>{index+1}</Col>}
                  {
                    columns.map((col, inx) => {
                      return(
                        <Col key={inx} span={col.span} offset={col.offset}>
                          {
                            col.render ? col.render(item) : item[col.key]
                          }
                        </Col>)
                    })
                  }
                </Row>
              )
            })
          }
        </div>
        {/*<div id={this.state.name} className={styles.t_content} style={{ height: showSize * 20 }}>
          {
            showData.map((item, index) => {
              return(
                <div key={index} className={styles.item}>
                  <div className={styles.label}><div className={styles.num}>{current + index}</div><span>{item.label}</span></div>
                  <div className={styles.value}>{item.value}</div>
                </div>
              )
            })
          }
        </div>*/}
      </div>
    )
  }
}
