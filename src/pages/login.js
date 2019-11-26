import React, { useState } from 'react';
import http from '../server';

export default function Login(){

  const [telephone, setTelephone] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(username, telephone, password);
    http.post('/user/login' ,{telephone, password}).then(res => {
      console.log(res);
      alert(res.msg);
    })
  }

  const handleChange = (e, type) => {
    const value = e.target.value;
    switch (type) {
      case 'telephone':
        setTelephone(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  }
  
  return (
    <div>
      <h3>用户登录</h3>
      <form onSubmit={handleSubmit}>
        <div className="ant-row ant-form-item">
          <label>手机号码:</label> 
          <input type="text" value={telephone} onChange={(e) => {handleChange(e, 'telephone')}} />
        </div>
        <div className="ant-row ant-form-item">
          <label>密码:</label>
          <input type="password" value={password} onChange={(e) => {handleChange(e, 'password')}} />
        </div>
        <div className="ant-row ant-form-item">
          <button type="submit">登录</button>
        </div>
      </form>
    </div>
  )
}