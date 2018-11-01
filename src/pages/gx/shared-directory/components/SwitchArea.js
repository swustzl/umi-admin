import React from 'react';
import { Popover, Icon } from 'antd';
import styles from './SwitchArea.less';
import Iconfont from "../../../../components/Iconfont/Iconfont";

export default class SwitchArea extends React.Component{
  state = {
    visible: false
  };
  renderContent = (content) => {
    return(
      <div>
        {content.map((item,index) => {
          return(<div className={styles.switchItem} key={index} onClick={() => { this.props.callback && this.props.callback(item); this.setState({visible: false}) }}>{item.label}</div>)
        })}
      </div>
    )
  };
  render(){
    const { content = [], currentKey, style} = this.props;
    let currentItem = content.find(c => c.key === currentKey);
    return(
      <div className={styles.location} style={style}>
        <div className={styles.loc}>
          {/*<Iconfont type={'location'} className={styles.icon}/>*/}
          <span>{`${currentItem.label}政务信息资源目录`}</span>
        </div>
        <Popover
          content={this.renderContent(content.filter(c => c.key !== currentKey))}
          trigger="click"
          visible={this.state.visible}
          overlayClassName={styles.switchPopover}
          placement={'bottom'}
          onVisibleChange={(v) => { this.setState({visible: v})}}
        >
          <div className={styles.switch}>
            <span>切换</span>
            <Icon type="swap" theme="outlined" />
          </div>
        </Popover>
      </div>
    )
  }
}
