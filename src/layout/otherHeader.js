import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import User from './user';
const { Header } = Layout;

export default function OtherHeader(){

  return (
    <Header className="other-layout-header">
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="0">
          <Link to="/">网站首页</Link>
        </Menu.Item>
        <Menu.Item key="1">免费课程</Menu.Item>
        <Menu.Item key="2">实战课程</Menu.Item>
        <Menu.Item key="3">就业班</Menu.Item>
        <Menu.Item key="4">专栏</Menu.Item>
        <Menu.Item key="5">猿问</Menu.Item>
      </Menu>
      <User />
    </Header>
  )
}