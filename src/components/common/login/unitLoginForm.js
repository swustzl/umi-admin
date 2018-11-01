import React, { Component } from 'react';
import { Form, Input, Select, Button, Icon } from 'antd';
import PropTypes from 'prop-types';
import styles from './unitLoginForm.less';

const FormItem = Form.Item;
const Option = Select.Option;

@Form.create()
export default class extends Component {

  static propTypes = {
    submit: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    units: PropTypes.array.isRequired,
    initialValue: PropTypes.string.isRequired,
    handleSelectChange: PropTypes.func.isRequired,
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.submit(values);
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const units = this.props.units;
    const initialValue = this.props.initialValue;
    const defaultUnit = units.filter((unit) => {
      return unit.identifier === initialValue;
    });

    let defaultKey;
    if (units.length > 0) {
      defaultKey = units[0].identifier;
    }
    if (defaultUnit.length > 0) {
      defaultKey = defaultUnit[0].identifier;
    }
    // else if (defaultKey) {
    //   this.props.handleSelectChange(defaultKey);
    // }

    const initialValueProps = {};
    if (defaultKey) {
      initialValueProps.initialValue = defaultKey;
    }

    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem hasFeedback>
          {getFieldDecorator('domain', {
            rules: [{ required: true, message: '请选择单位' }],
            ...initialValueProps,
          })(
            <Select
              disabled={this.props.loading}
              showSearch
              dropdownClassName={styles.select}
              placeholder="选择单位"
              onChange={this.props.handleSelectChange}
              optionFilterProp="children"
            >
              {
                units.map((value, index) => {
                  return <Option key={index} value={value.identifier}>{value.name}</Option>;
                })
              }
            </Select>,
          )}
        </FormItem>
        <FormItem hasFeedback>
          {getFieldDecorator('name', {
            rules: [{
              required: true,
              message: '1~255个字符，不能为空',
              max: 255,
            }],
          })(
            <Input disabled={this.props.loading} prefix={<Icon type="user" />} autoComplete="off" type="text" placeholder="账号" />,
          )}
        </FormItem>
        <FormItem hasFeedback>
          {getFieldDecorator('password', {
            rules: [{
              required: true,
              message: '1~255个字符，不能为空',
              max: 255,
            }],
          })(
            <Input disabled={this.props.loading} prefix={<Icon type="lock" />} autoComplete="off" type="password" placeholder="密码" />,
          )}
        </FormItem>
        <FormItem>
          <Button disabled={this.props.loading} className="wpe-100" type="primary" htmlType="submit">登录</Button>
        </FormItem>
      </Form>
    );
  }
}

