import React from 'react';
import { Menu, Dropdown, Icon, Spin } from 'antd';
import classNames from 'classnames';
import styles from './SummaryChart.less';
import ReactChart from "../../../../components/ReactChart/index";

export default class SummaryChart extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      selectedRangeKey: '15',
      rangeOptions: [
        { key: '15', value: '15日' },
        { key: '30', value: '30日' },
      ]
    };
  }

  onChangeRange = ({ key }) => {
    this.setState({ selectedRangeKey: key });
  };

  render () {
    const menu = (
      <Menu onClick={this.onChangeRange}>
        {
          this.state.rangeOptions.map((option) => {
            return(
              <Menu.Item key={option.key}>
                <div style={{ padding: '0 20px', textAlign: 'center', lineHeight: '30px', height: 30 }}>{option.value}</div>
              </Menu.Item>
            )
          })
        }
      </Menu>
    );
    const { className, title, } = this.props;
    const selectedRangeOption = this.state.rangeOptions.find(o => o.key === this.state.selectedRangeKey);
    return (
      <div className={classNames(styles.main, className)}>
        <div className={styles.header}>
          <div className={styles.left}>
            <div className={styles.line}/>
            <span>{title}</span>
          </div>
          <div className={styles.right}>
            <span className={styles.updateTime}>更新时间 2018-08-08 13:23:12</span>
            <div className={styles.range}>
              <span>展示最近：</span>
              <Dropdown overlay={menu} trigger={['click']}>
                <div style={{ padding: '0 10px', textAlign: 'center', cursor: 'pointer' }}>{selectedRangeOption && selectedRangeOption.value} <Icon type="down" /></div>
              </Dropdown>
            </div>
          </div>
        </div>
        <div className={styles.chart}>
          <ReactChart
            config={this.props.config}
            width="1198px"
            height="268px"
          />
        </div>
      </div>
    )
  }
}
