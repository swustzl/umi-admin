import React, { Component } from 'react';
import { Popover, Table } from 'antd';
import Ellipsis from '../components/antd/Ellipsis/index';

const defaultOverflow = {
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  maxWidth: '100%',
  minWidth: '50px',
};

export default class extends Component {

  getColumns = (columns, line) => {
    const popRender = (value, rowValue, column) => {
      // 用法为在传入columns时，添加一个popoverFix作为渲染popover的方法，接受（value，rowValue）两个参数
      // column.popoverFix = (value,rowValue)=>{
      //   return (<div>
      //     <p style={{textAlign:"center"}}>{rowValue.identifier}</p>
      //     <p style={{textAlign:"center"}}>{value}</p>
      //   </div>)
      // }
      if (column.popoverFix) {
        return column.popoverFix(value, rowValue);
      } else {
        return value;
      }
    };
    columns.map((i) => {
      !i.render ? i.render = (v, r) => {
        return (<Popover placement="bottomLeft" content={popRender(v, r, i)}>
          <Ellipsis tooltip lines={line}>{v}</Ellipsis>
        </Popover>);
      } : i;
    });
    return columns;
  };

  render() {
    const { columns, dataSource, line = 1, ...others } = this.props;
    const fixColumns = this.getColumns(columns, line);
    dataSource.forEach((v, i) => {
      v.key = i;
    });
    return (
      <Table columns={fixColumns} dataSource={dataSource} {...others} />
    );
  }
}
