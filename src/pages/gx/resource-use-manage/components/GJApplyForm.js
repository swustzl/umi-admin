import React from 'react';
import { Form, Input, Button, Select, Row, Col, Upload } from 'antd';
import styles from './GJApplyForm.less';

const FormItem = Form.Item;
const Option = Select.Option;
const topFormItemLayout = {
  labelCol: {
    span: 8
  },
  wrapperCol: {
    span: 12
  },
};
const formItemLayout = {
  labelCol: {
    span: 4
  },
  wrapperCol: {
    span: 18
  },
};
@Form.create()
export default class GJApplyForm extends React.Component{
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log(1111111)
      }
    });
  }
  render(){
    const { getFieldDecorator } = this.props.form;
    return(
      <Form onSubmit={this.handleSubmit} className={styles.main}>
        <div className={styles.top}>
          <div className={styles.topLeft}>
            <div className={styles.title}>申请方信息</div>
            <FormItem label={'申请方名称'} {...topFormItemLayout}>
              {getFieldDecorator('applicant', {
                initialValue: '广西壮族自治区',
                rules: [{ required: true, message: '1~255个字符，不能为空', max: 255, whitespace: true }],
              })(
                <Input type="text" disabled placeholder="账号" />,
              )}
            </FormItem>
            <FormItem label={'联系人姓名'} {...topFormItemLayout}>
              {getFieldDecorator('apply_linkman', {
                rules: [{ required: true, message: '1~255个字符，不能为空', max: 255, whitespace: true }],
              })(
                <Input type="text" />,
              )}
            </FormItem>
            <FormItem label={'联系电话'} {...topFormItemLayout}>
              {getFieldDecorator('apply_phone', {
                rules: [{ required: true, message: '1~255个字符，不能为空', max: 255, whitespace: true }],
              })(
                <Input type="text" placeholder="请填写11位电话号码" />,
              )}
            </FormItem>
            <FormItem label={'联系邮箱'} {...topFormItemLayout}>
              {getFieldDecorator('apply_mail', {
                rules: [{ required: true, message: '1~255个字符，不能为空', max: 255, whitespace: true }],
              })(
                <Input type="text" placeholder="请填写邮箱地址" />,
              )}
            </FormItem>
          </div>
          <div className={styles.topRight}>
            <div className={styles.title}>使用方信息</div>
            <FormItem label={'使用方名称'} {...topFormItemLayout}>
              {getFieldDecorator('user_name', {
                rules: [{ required: true, message: '1~255个字符，不能为空', max: 255, whitespace: true }],
              })(
                <Select placeholder={'请选择使用方'} showSearch>
                  <Option key={11}>发改委</Option>
                  <Option key={22}>民政局</Option>
                </Select>
              )}
            </FormItem>
            <FormItem label={'联系人姓名'} {...topFormItemLayout}>
              {getFieldDecorator('use_linkman', {
                rules: [{ required: true, message: '1~255个字符，不能为空', max: 255, whitespace: true }],
              })(
                <Input type="text" />,
              )}
            </FormItem>
            <FormItem label={'联系电话'} {...topFormItemLayout}>
              {getFieldDecorator('use_phone', {
                rules: [{ required: true, message: '1~255个字符，不能为空', max: 255, whitespace: true }],
              })(
                <Input type="text" placeholder="请填写11位电话号码" />,
              )}
            </FormItem>
            <FormItem label={'联系邮箱'} {...topFormItemLayout}>
              {getFieldDecorator('use_mail', {
                rules: [{ required: true, message: '1~255个字符，不能为空', max: 255, whitespace: true }],
              })(
                <Input type="text" placeholder="请填写邮箱地址" />,
              )}
            </FormItem>
          </div>
        </div>
        <FormItem label={'资源名称'} {...formItemLayout}>
          {getFieldDecorator('resource', {
            rules: [{ required: true, message: '1~255个字符，不能为空', max: 255, whitespace: true }],
          })(
            <Select placeholder={'请选择'} showSearch size={'large'}>
              <Option key={11}>资源一</Option>
              <Option key={22}>资源二</Option>
            </Select>
          )}
        </FormItem>
        <FormItem label={'办公场景'} {...formItemLayout}>
          <Row>
            <Col span={4}>
              <Select placeholder={'请选择'} showSearch size={'large'}>
                <Option key={11}>百项堵点</Option>
              </Select>
            </Col>
            <Col span={20}>
              {getFieldDecorator('office_scene', {
                rules: [{ required: true, message: '1~255个字符，不能为空', max: 255, whitespace: true }],
              })(
                <Select placeholder={'请选择'} showSearch size={'large'}>
                  <Option key={11}>百项堵点</Option>
                </Select>
              )}
            </Col>
          </Row>
        </FormItem>
        <FormItem label={'使用范围说明'} {...formItemLayout}>
          {getFieldDecorator('use_description', {
            rules: [{ required: true, message: '1~255个字符，不能为空', max: 255, whitespace: true }],
          })(
            <Select placeholder={'请选择'} showSearch size={'large'}>
              <Option key={11}>行政依据</Option>
              <Option key={22}>22</Option>
            </Select>
          )}
        </FormItem>
        <FormItem label={'使用本资源业务系统'} {...formItemLayout}>
          {getFieldDecorator('org', {
            rules: [{ required: true, message: '1~255个字符，不能为空', max: 255, whitespace: true }],
          })(
            <Select placeholder={'请选择'} showSearch size={'large'}>
              <Option key={11}>业务系统1</Option>
              <Option key={22}>业务系统2</Option>
            </Select>
          )}
        </FormItem>
        <FormItem label={'申请依据'} {...formItemLayout}>
          {getFieldDecorator('apply_basis', {
            rules: [{ required: true, message: '1~255个字符，不能为空', max: 255, whitespace: true }],
          })(
            <Input type="text" placeholder={'描述使用部门完成上述办事场景的相关法律、法规、政策的具体依据'} size={'large'} />,
          )}
        </FormItem>
        <Row>
          <Col span={12}>
            <FormItem label={'服务接口调用频率'} labelCol={{span: 8}} wrapperCol={{span: 14}}>
              <Row>
                <Col span={20}>
                  {getFieldDecorator('use_frequency', {
                    rules: [{ required: true, message: '1~255个字符，不能为空', max: 255, whitespace: true }],
                  })(
                    <Input style={{width: 230}} type="text" placeholder={'服务接口调用频次(平均)'} size={'large'} />,
                  )}
                </Col>
                <Col span={4}>
                  <span style={{marginLeft: 10}}>次/天</span>
                </Col>
              </Row>
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem label={'使用时间范围'} labelCol={{span: 8}} wrapperCol={{span: 12}}>
              {getFieldDecorator('use_date_scope', {
                rules: [{ required: true, message: '1~255个字符，不能为空', max: 255, whitespace: true }],
              })(
                <Select placeholder={'请选择'} showSearch size={'large'}>
                  <Option key={11}>工作日（8:00-18:00）</Option>
                  <Option key={22}>休息日</Option>
                </Select>
              )}
            </FormItem>
          </Col>
        </Row>

        <FormItem label={'服务接口使用期限'} labelCol={{span: 4}} wrapperCol={{span: 9}}>
          <Row gutter={4}>
            <Col span={16}>
              {getFieldDecorator('use_date_limit', {
                rules: [{ required: true, message: '1~255个字符，不能为空', max: 255, whitespace: true }],
              })(
                <Input style={{width: 230}} type="text" placeholder={'接口使用期限'} size={'large'} />,
              )}
            </Col>
            <Col span={8}>
              <span style={{marginLeft: 3}}>天</span>
            </Col>
          </Row>
        </FormItem>
        <FormItem label={'其他技术请求'} {...formItemLayout}>
          {getFieldDecorator('other', {
            rules: [{ required: true, message: '1~255个字符，不能为空', max: 255, whitespace: true }],
          })(
            <Input type="text" placeholder={'基于特定服务接口的具体技术要求'} size={'large'} />,
          )}
        </FormItem>
        <FormItem label={'附件'} {...formItemLayout}>
          <Row>
            <Col span={4}><Upload className={styles.upload}><Button size={'large'} className={styles.upload_btn}>选择文件</Button></Upload></Col>
            <Col span={20}>支持的文件格式为jpg、gif、png、txt、doc、docx、pdf、xls、xlsx</Col>
          </Row>

        </FormItem>
        <FormItem className={styles.btns}>
          <Button disabled={this.props.loading} className={styles.submit} htmlType="submit" >提交</Button>
          <Button disabled={this.props.loading} className={styles.cancel} >取消</Button>
        </FormItem>
      </Form>
    )
  }
}
