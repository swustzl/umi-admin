import React from 'react';
import { Form, Input, Button, Badge, Row, Col, message, Popover } from 'antd';
import VCode from "../login/VCode";
import styles from './layout.less';
import {getUser} from "../../../utils/user";
import Iconfont from "../../Iconfont/Iconfont";

const FormItem = Form.Item;
@Form.create()
export default class Login extends React.Component{
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
  render(){
    const { getFieldDecorator } = this.props.form;
    const user = getUser();
    return(
      <div className={styles.login}>
        <div className={styles.login_content}>
          <span className={styles.welcome}>欢迎来到广西壮族自治区政务信息共享网站</span>
          {
            user.name ?
            <div className={styles.right}>
              <div className={styles.user}>{user.name}</div>
              <Popover placement={'bottomRight'} content={<div></div>} title={<div style={{textAlign: 'center'}}>消息</div>}>
                <Badge count={0} offset={[10,0]}>
                  <Iconfont type={'mail'} className={styles.icon}/>
                </Badge>
              </Popover>
            </div>
            :
            <Form layout="inline" onSubmit={this.handleSubmit} hideRequiredMark>
              <FormItem hasFeedback label={'账号'} help={''}>
                {getFieldDecorator('name', {
                  initialValue: 'admin',
                  rules: [{ required: true, message: '1~255个字符，不能为空', max: 255, whitespace: true }],
                })(
                  <Input disabled={this.props.loading} autoComplete="off" type="text" placeholder="请输入用户账号" size={'small'} className={styles.input}/>,
                )}
              </FormItem>
              <FormItem hasFeedback label={'密码'} help={''}>
                {getFieldDecorator('password', {
                  initialValue: 'admin',
                  rules: [{
                    required: true, message: '1~255个字符，不能为空', max: 255, whitespace: true,
                  }],
                })(
                  <Input disabled={this.props.loading} autoComplete="off" type="password" placeholder="请输入用户密码" size={'small'}  className={styles.input}/>,
                )}
              </FormItem>
              <FormItem label={'验证码'} help={''}>
                <Row type={'flex'} align={'middle'}>
                  <Col span={12}>
                    {getFieldDecorator('captcha', {
                      rules: [{ required: true, message: '' }],
                    })(
                      <Input disabled={this.props.loading} autoComplete="off" type="text" placeholder="验证码" size={'small'} className={styles.vcode_input}/>
                    )}
                  </Col>
                  <Col span={10}>
                    <VCode callback={(code) => { this.setState({ captcha: code.data.join('') }) }} size={'small'} className={styles.vcode}/>
                  </Col>
                </Row>
              </FormItem>

              <FormItem>
                <Button disabled={this.props.loading} className={styles.btn} type="primary" htmlType="submit" size={'small'}>登录</Button>
              </FormItem>
            </Form>
          }

        </div>
      </div>
    )
  }
}
