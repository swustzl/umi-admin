import React from 'react';
import { Modal, Form, Input, Icon, Button, Select } from 'antd';
import styles from './TableDataViewModal.less';
import HiddenTable from "components/HiddenTable";

const Option = Select.Option;
export default class TableDataViewModal extends React.Component{
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
  state = {
    visible: false,
    filters: [
      {id: this.getName(), fieldName: '', operate: '=', value: ''}
    ],
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  }
  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  handleCancel = (e) => {
    //console.log(e);
    this.setState({
      visible: false,
    });
  };
  addFilter = () => {
    let filters = this.state.filters;
    filters.push({id: this.getName(), fieldName: '', operate: '=', value: ''})
    this.setState({filters})
  };
  subFilter = (item) => {
    this.setState({
      filters: this.state.filters.filter(f => f.id !== item.id)
    })
  };
  search = () => {
    console.log(this.state.filters)
  }
  render(){
    const { columnFields = [], data = [] } = this.props;
    const columns = [];
    let xh = 1;
    columnFields.forEach((field) => {
      columns.push({
        title: field.label,
        dataIndex: field.name,
        key: field.name,
        width: 100
      })
    });

    return(
      <Modal
        title="数据预览"
        visible={this.state.visible}
        onOk={this.handleOk}
        onCancel={this.handleCancel}
        closable={false}
        wrapClassName={styles.modal}
        width={1200}
        footer={false}
      >
        <div className={styles.content}>
          <div className={styles.filters}>
            {
              this.state.filters.map((item, index)=>{
                return(
                  <div className={styles.filter} key={index}>
                    <div className={styles.col_field}>字段:
                      <Select
                        className={styles.col_field_select}
                        value={item.fieldName}
                        onChange={(value) => {
                          this.setState({filters: this.state.filters.map(f =>{
                            if (f.id === item.id) {
                              f.fieldName = value;
                            }
                            return f;
                          })})}
                        }
                      >
                        {
                          columnFields.map((field)=>{
                            return <Option key={field.name}>{field.label}</Option>
                          })
                        }
                      </Select>
                    </div>
                    <Select
                      className={styles.col_operate_select}
                      value={item.operate}
                      onChange={(value) => {
                        this.setState({filters: this.state.filters.map(f =>{
                          if (f.id === item.id) {
                            f.operate = value;
                          }
                          return f;
                        })})}
                      }
                    >
                      <Option key={'>'}>大于</Option>
                      <Option key={'<'}>小于</Option>
                      <Option key={'='}>等于</Option>
                    </Select>
                    <Input
                      className={styles.col_value}
                      value={item.value}
                      onChange={(e) => {
                        this.setState({filters: this.state.filters.map(f =>{
                          if (f.id === item.id) {
                            f.value = e.target.value;
                          }
                          return f;
                        })})}
                      }
                    />
                    {
                      index === this.state.filters.length - 1 ?
                        <div className={styles.operation}>
                          <div className={styles.btn} onClick={this.addFilter}><Icon type="plus" theme="outlined" className={styles.plus} /></div>
                          {this.state.filters.length > 1 && <div className={styles.btn} onClick={()=>this.subFilter(item)}><Icon type="minus" theme="outlined" className={styles.minus} /></div>}
                          <Button className={styles.find} onClick={this.search}>查询</Button>
                        </div>
                        :
                        <div className={styles.operation}/>
                    }
                  </div>
                )
              })
            }
          </div>
          <HiddenTable
            columns={columns}
            line={1}
            rowKey={record => `${record.identifier}+${xh++}`}
            dataSource={data}
            scroll={{ x: true }}
            //pagination={false}
          />
        </div>
      </Modal>
    )
  }
}
