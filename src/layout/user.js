import React, { useState, useEffect } from 'react';
import { Menu, Dropdown, Icon, Badge, Avatar, message } from 'antd';
import { Link } from 'react-router-dom';

export default function Counter() {

  const [username, setUsername] = useState('')
  
  useEffect(() => {
    const username = localStorage.getItem('username');
    setUsername(username);
  }, [])

  const logout = function (){
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    message.success('退出登录成功');
    setTimeout(function(){
      window.location.reload();
    }, 1000);
  }

  const menu = (
    <Menu>
      <Menu.Item>
        <Link rel="noopener noreferrer" to="/k">
          我的课程
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link rel="noopener noreferrer" to="/user/order">
          订单中心
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link rel="noopener noreferrer" to="/setting">
          个人设置
        </Link>
      </Menu.Item>
      <Menu.Item>
        <span onClick={logout}>退出登录</span>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="header-user">
      <Badge dot>
        <Icon type="notification" />
      </Badge>
      {
        username && (
          <Dropdown overlay={menu} placement="bottomLeft">
            <span className="ant-dropdown-link">
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            </span>
          </Dropdown>
        )
      }
      { !username && (
        <span>
          <Link className="header-login-link" rel="noopener noreferrer" to="/login">登录</Link>
          <i>|</i>
          <Link className="header-login-link" rel="noopener noreferrer" to="/register">注册</Link>
        </span>
      ) }
    </div>
  )
}