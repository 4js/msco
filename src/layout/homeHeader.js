import React from 'react';
import { Layout, Menu } from 'antd';
import User from './user';
const { Header } = Layout;

export default function HomeHeader(){

  return (
    <Header>
      <div className="logo">
        <img src={require('../images/logo.png')} title="皓诚学社" alt="皓诚学社" />
      </div>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
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