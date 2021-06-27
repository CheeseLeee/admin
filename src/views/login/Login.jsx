import React from 'react'
import { Form, Input, Button, Checkbox ,message} from 'antd';
import './login.css'
import {getUserLogin} from '../../api/request'
import {useHistory} from 'react-router-dom'
const LoginForm = () => {
    let history = useHistory()
    const onFinish = (values) => {
      console.log('Success:', values);
      getUserLogin(values).then(res => {       
        message.info('login successfully');
        window.sessionStorage.setItem(
          'username',values.username
        )
        history.push({pathname:'/home',state:{user:values.username}})  
      })
    };
  
    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
    };
  
    return (
    <Form
      name="basic"
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 6, span: 8 }}>
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 4, span: 8 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    );
  };
export default function Login() {
    return (
        <div id="login">
            <div className="login-form">
                <LoginForm></LoginForm>
            </div>
        </div>
    )
}




