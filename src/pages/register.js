import React, { useState } from 'react';
import md5 from 'md5';
import http from '../server';

export default function Register(){

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (e, type) => {
    const value = e.target.value;
    switch (type) {
      case 'username':
        setUsername(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    http.post('/user/register' ,{ username, 'password': md5(password) }).then(res => {
      alert('注册成功');
    })
  }


  return (
    <div>
      <h3>用户注册</h3>
      <form onSubmit={handleSubmit}>
        <div className="ant-row ant-form-item">
          <label>手机号码:</label> 
          <input type="text" value={username} onChange={(e) => {handleChange(e, 'username')}} />
        </div>
        <div className="ant-row ant-form-item">
          <label>密码:</label>
          <input type="password" value={password} onChange={(e) => {handleChange(e, 'password')}} />
        </div>
        <div className="ant-row ant-form-item">
          <button type="submit">注册</button>
        </div>
      </form>
    </div>
  )
}