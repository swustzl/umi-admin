import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';
import { formItemLayout, tailFormItemLayout } from '../../config';
import { getUser } from '../../utils/user';

const FormItem = Form.Item;

@Form.create()
export default class extends Component {
  state = {
    confirmDirty: false,
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        this.props.submit(values);
      }
    });
  }
  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }
  checkPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('两次密码输入不一致！');
    } else {
      callback();
    }
  }
  checkConfirm = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['password-confirm'], { force: true });
    }
    callback();
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const defaultValue = getUser();
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem>
          {getFieldDecorator('identifier', {
            initialValue: defaultValue.identifier,
            rules: [{ required: true,
            }],
          })(
            <Input autoComplete="off" type="hidden" />,
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="用户名"
          colon={false}
        >
          {getFieldDecorator('name', {
            rules: [{ required: true, message: '1~255个字符，不能为空', max: 255, whitespace: true }],
            initialValue: (defaultValue
              && defaultValue.name) || getUser().name || null,
          })(
            <Input disabled autoComplete="off" />,
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="原密码"
          colon={false}
          hasFeedback
        >
          {getFieldDecorator('origin_password', {
            rules: [{
              required: true, message: '6~255个字符，不能为空', min: 6, max: 255, whitespace: true,
            }],
          })(
            <Input type="password" autoComplete="off" />,
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="新密码"
          colon={false}
          hasFeedback
        >
          {getFieldDecorator('password', {
            rules: [{
              required: true, message: '6~255个字符，不能为空', min: 6, max: 255, whitespace: true,
            }, {
              validator: this.checkConfirm,
            }],
          })(
            <Input type="password" autoComplete="off" />,
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="确认密码"
          colon={false}
          hasFeedback
        >
          {getFieldDecorator('password-confirm', {
            rules: [{
              required: true, message: '6~255个字符，不能为空', min: 6, max: 255, whitespace: true,
            }, {
              validator: this.checkPassword,
            }],
          })(
            <Input autoComplete="off" type="password" onBlur={this.handleConfirmBlur} />,
          )}
        </FormItem>
        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">保存</Button>
        </FormItem>
      </Form>
    );
  }
}

