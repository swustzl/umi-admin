import React, { Component } from 'react';
import { Form, Input, Select, Spin } from 'antd';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/bar';
import 'echarts/lib/chart/pie';
import 'echarts/lib/chart/line';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts-wordcloud';

export default class ReactChart extends Component {

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
      name: this.getName(),
      reset: false,
    };
  }
  componentDidMount() { // 首次绘制echarts
    const { config } = this.props;
    if (config) {
      this.myChart = echarts.init(document.getElementById(this.state.name));
      this.myChart.setOption(config);
    }
  }

  componentDidUpdate() { // 更新绘制echarts
    const { config } = this.props;
    if (config) {
     // echarts.dispose(document.getElementById(this.state.name));
      //const myChart = echarts.init(document.getElementById(this.state.name));
      this.myChart.setOption(config);
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
    return this.props.width !== nextProps.width || this.state.reset;
  }

  render() {
    const { config, width = '80%', height = 400, style = {} } = this.props;
    return (this.getRenderData(width, height, config, style));
  }
}
