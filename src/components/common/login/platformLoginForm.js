import React, { Component } from 'react';
import { Form, Input, Button, Icon, Row, Col, message } from 'antd';
import PropTypes from 'prop-types';
import VCode from "./VCode";

const FormItem = Form.Item;

@Form.create()
export default class extends Component {
  static propTypes = {
    form: PropTypes.object.isRequired,
    submit: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
  }
  state = {
    captcha: '',
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        if (!values.captcha || values.captcha.toLowerCase() === this.state.captcha.toLowerCase()) {
          this.props.submit(values);
        } else {
          message.error('验证码错误');
        }
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem hasFeedback>
          {getFieldDecorator('name', {
            initialValue: 'admin',
            rules: [{ required: true, message: '1~255个字符，不能为空', max: 255, whitespace: true }],
          })(
            <Input disabled={this.props.loading} prefix={<Icon type="user" style={{fontSize: '18px'}}/>} autoComplete="off" type="text" placeholder="账号" size={'large'}/>,
          )}
        </FormItem>
        <FormItem hasFeedback>
          {getFieldDecorator('password', {
            initialValue: 'admin',
            rules: [{
              required: true, message: '1~255个字符，不能为空', max: 255, whitespace: true,
            }],
          })(
            <Input disabled={this.props.loading} prefix={<Icon type="lock" style={{fontSize: '18px'}}/>} autoComplete="off" type="password" placeholder="密码" size={'large'} />,
          )}
        </FormItem>
        <div style={{ color: '#fff', textAlign: 'right', margin: '-20px 0 24px 0'}}>忘记密码</div>
        <FormItem>
          <Row type={'flex'} align={'middle'}>
            <Col span={12}>
              {getFieldDecorator('captcha', {
                rules: [{ required: true, message: '请输入验证码' }],
              })(
                <Input disabled={this.props.loading} autoComplete="off" type="text" placeholder="验证码" size={'large'}/>
              )}
            </Col>
            <Col span={10} offset={2}>
              <VCode callback={(code) => { this.setState({ captcha: code.data.join('') }) }} size={'large'}/>
            </Col>
          </Row>
        </FormItem>

        <FormItem>
          <Button disabled={this.props.loading} className="wpe-100" type="primary" htmlType="submit" size={'large'}>登录</Button>
        </FormItem>
      </Form>
    );
  }
}

