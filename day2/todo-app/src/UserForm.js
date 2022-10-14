import React, { Component, PureComponent } from 'react'
import { Button, Drawer, Form, Input } from 'antd';
import { config } from './service/config';

export default class UserForm extends PureComponent {

   
  render() {
    return (
      <div>
        <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      onFinish={this.props.onFinish}
      onFinishFailed={this.props.onFinishFailed}
      autoComplete="off"
    >
    {config.map((ele) => {
      console.log(ele)
        return (
            <Form.Item
        label={ele.label}
        name={ele.key}
        initialValue={this.props.userEdit[ele.key]}
        key={ele.key}
        rules={[
          {
            required: true,
            message: `Please input your ${ele.label}!`,
          },
        ]}
      >
        <Input></Input>
      </Form.Item>
        );
    })}
    <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
      </Form>

      </div>
    )
  }
}
