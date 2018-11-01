import React, { Component } from 'react';
import { Form, Popover, Input, Button } from 'antd';
import { formItemLayout, tailFormItemLayout } from '../../config';
import { getUser } from '../../utils/user';

const FormItem = Form.Item;

export default class extends Component {
  state = {
    visible: false,
  }
  hide = () => {
    this.setState({
      visible: false,
    });
  }
  handleVisibleChange = (visible) => {
    this.setState({ visible });
  }
  handleSubmit = (identifier) => {
    this.props.handleDelete(identifier);
    this.hide();
  }

  render() {
    return (
      <Popover
        placement="topRight"
        content={<PopoverContent
          cancel={this.props.cancel}
          record={this.props.record}
          noticeMessage={this.props.noticeMessage}
          handleHide={this.hide}
          handleSubmit={this.handleSubmit}
        />}
        trigger="click"
        visible={this.state.visible}
        onVisibleChange={this.handleVisibleChange}
      >
        {this.props.children}
      </Popover>
    );
  }
}

@Form.create()
class PopoverContent extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        this.props.handleSubmit(this.props.record.identifier);
        this.props.form.resetFields();
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div style={{ minHeight: 100 }}>
        <h3 className="red">{this.props.noticeMessage}</h3>
        <br />

        <p style={{ minWidth: 400 }}>确定删除该项吗？</p>
        <Form className="mt-10" onSubmit={this.handleSubmit}>
          <FormItem className={'float-r'} >
            <Button onClick={this.props.handleHide}>取消</Button>&emsp;
            <Button type="primary" htmlType="submit">确定</Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}
