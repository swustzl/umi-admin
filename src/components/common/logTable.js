import React, { Component } from 'react';
import { Table } from 'antd';
import { getUser } from '../../utils/user';
import HiddenTable from '../../shared/HiddenTable';

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pagination: {
        total: this.props.total,
      },
    };
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      pagination: {
        total: nextProps.total,
      },
    });
  }

  handleTableChange = (pagination) => {
    const pager = { ...this.state.pagination };
    pager.current = pagination.current;
    this.setState({
      pagination: pager,
    });
    this.props.getOperationLogs(pagination.current);
  };

  render() {
    const { pagination } = this.state;
    const role = getUser().role;
    const columns = [{
      title: '时间',
      dataIndex: 'created_at',
      key: 'created_at',
      width: '20%',
    }, {
      title: '操作内容',
      dataIndex: 'content',
      key: 'content',
      width: role % 100 === 0 ? '80%' : '60%',
    }];
    if (role % 100 !== 0) {
      columns.splice(1, 0, ({
        title: role === 101 ? '操作员' : '操作员',
        dataIndex: 'user_name',
        key: 'user_name',
        width: '20%',
      }));
    }
    return (<div>
      <HiddenTable
        columns={columns}
        line={1}
        pagination={pagination}
        rowKey={record => record.identifier}
        dataSource={this.props.data}
        onChange={this.handleTableChange}
      />
    </div>);
  }
}
