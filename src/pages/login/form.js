import React from 'react';
import { Form, Icon, Input, Button, Checkbox, message } from 'antd';
import http from '../../server';
import md5 from 'md5';

class NormalLoginForm extends React.Component {

  handleSubmit = e => {
    e.preventDefault();
    let _this = this;
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const { username, password } = values;
        http.post('/user/login' ,{ username, password: md5(password) }).then(res => {
          const { token, 'user': { username } } = res.data;
          localStorage.setItem('token', token);
          localStorage.setItem('username', username);
          message.success('登录成功');
          setTimeout(function(){
            _this.props.history.push('/order');
          }, 1000);
        })
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: '请输入用户名!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="请输入用户名"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入密码!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="请输入密码"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox>记住密码</Checkbox>)}
          <a className="login-form-forgot" href="/forget">
            忘记密码
          </a>
          <Button type="primary" htmlType="submit" className="login-form-button">
            登录
          </Button>
          Or <a href="/register">立即注册!</a>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);

export default WrappedNormalLoginForm;