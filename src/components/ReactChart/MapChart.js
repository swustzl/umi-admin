import React, { Component } from 'react';
import { Form, Input, Select, Spin } from 'antd';
import echarts from 'echarts/lib/echarts';
import fetch from 'dva/fetch';

import 'echarts/lib/chart/map';
import 'echarts/lib/chart/scatter';
import 'echarts/lib/chart/effectScatter';
import 'echarts/lib/component/geo';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/visualMap';
import 'echarts/lib/component/grid';
import 'echarts/lib/component/markPoint';

import geoJson from '../../../public/map/json/province/guangxi.json';

export default class MapChart extends Component {

  getName = () => {
    const str = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz';
    const maxStr = str.length;
    let string = '';
    const len = 16;
    for (let i = 0; i < len; i++) {
      string += str.charAt(Math.floor(Math.random() * maxStr));
    }
    return string;
  }

  constructor(props) {
    super(props);
    this.state = {
      reset: false,
      name: this.getName(),
    };
  }
  componentDidMount() { // 首次绘制echarts
    const { config } = this.props;
    if (config) {
      const myChart = echarts.init(document.getElementById(this.state.name));
      echarts.registerMap('GX', geoJson);
      myChart.setOption(config);
    }
  }

  componentDidUpdate() { // 更新绘制echarts
    const { config } = this.props;
    if (config) {
      echarts.dispose(document.getElementById(this.state.name));
      const myChart = echarts.init(document.getElementById(this.state.name));
      echarts.registerMap('GX', geoJson);
      myChart.setOption(config);
    }
  }
  resetRender = () => {
    this.setState({
      reset: true
    }, () => {this.setState({reset: false})})
  };
  getRenderData = (width, height, config, style) => {
    return (
      config ?
        <div id={this.state.name} style={{ width, height, margin: 'auto', ...style }} /> : <Spin />
    );
  }

  shouldComponentUpdate(nextProps) {
    return this.props.layoutWidth !== nextProps.layoutWidth || this.state.reset;
  }

  render() {
    const { config, width = '80%', height = 400, style = {} } = this.props;
    return (this.getRenderData(width, height, config, style));
  }
}
