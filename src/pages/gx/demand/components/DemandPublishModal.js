import React from 'react';
import { Modal, Form, Input, Radio, Button, Select } from 'antd';
import styles from './DemandPublishModal.less';

const FormItem = Form.Item;
const TextArea = Input.TextArea;
const RadioGroup = Radio.Group;
const Option = Select.Option;
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 5 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 15, offset: 1 },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 15,
      offset: 6,
    },
  },
};
const DPFrom = Form.create()(({ form, handleOk, handleCancel }) => {
  const { getFieldDecorator } = form;
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(1111)
    form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        handleOk && handleOk()
        //this.props.submit(values);
      }
    });
  }
  return(
    <Form onSubmit={handleSubmit}>
      <FormItem
        {...formItemLayout}
        label="数据标题"
        colon={false}
      >
        {getFieldDecorator('title', {
          rules: [{ required: true }],
        })(
          <Input placeholder={'请输入对应的文字或内容'} />,
        )}
      </FormItem>
      <FormItem
        {...formItemLayout}
        label="受理单位"
        colon={false}
      >
        {getFieldDecorator('unit', {
          rules: [{ required: true }],
        })(
          <Select placeholder={'请选择对应的文字或内容'} >
            <Option value={'jtt'}>自治区交通厅</Option>
          </Select>,
        )}
      </FormItem>
      <FormItem
        {...formItemLayout}
        label="数据描述"
        colon={false}
      >
        {getFieldDecorator('description', {
          rules: [{ required: true }],
        })(
          <TextArea placeholder={'请输入对应的文字或内容'} />,
        )}
      </FormItem>
      <FormItem
        {...formItemLayout}
        label="数据用途"
        colon={false}
      >
        {getFieldDecorator('use', {
          rules: [{ required: true }],
        })(
          <TextArea placeholder={'请输入对应的文字或内容'} />,
        )}
      </FormItem>
      <FormItem
        {...formItemLayout}
        label="备注"
        colon={false}
      >
        {getFieldDecorator('remark', {})(
          <TextArea placeholder={'选填'} />,
        )}
      </FormItem>
      <FormItem
        {...formItemLayout}
        label="公开"
        colon={false}
      >
        {getFieldDecorator('permission', {
          initialValue: 'public',
          rules: [{ required: true }],
        })(
          <RadioGroup>
            <Radio value="public">公开</Radio>
            <Radio value="limit">仅受理单位可见</Radio>
          </RadioGroup>
        )}
      </FormItem>
      <FormItem {...tailFormItemLayout} className={styles.btns}>
        <Button htmlType="submit" className={styles.submit}>确定</Button>
        <Button className={styles.cancel} onClick={handleCancel}>取消</Button>
      </FormItem>
    </Form>
  )
});


export default class DemandPublishModal extends React.Component{
  state = { visible: false }

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
  }
  render(){
    return(
      <Modal
        title="需求发布"
        visible={this.state.visible}
        onOk={this.handleOk}
        onCancel={this.handleCancel}
        closable={false}
        wrapClassName={styles.modal}
        width={700}
        footer={null}
      >
        <DPFrom
          handleOk={this.handleOk}
          handleCancel={this.handleCancel}
        />
      </Modal>
    )
  }
}
