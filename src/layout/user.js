import React from 'react';
import { Menu, Dropdown, Icon, Badge, Avatar } from 'antd';
import { Link } from 'react-router-dom';

const menu = (
  <Menu>
    <Menu.Item>
      <Link rel="noopener noreferrer" to="/k">
        我的课程
      </Link>
    </Menu.Item>
    <Menu.Item>
      <Link rel="noopener noreferrer" to="/order">
        订单中心
      </Link>
    </Menu.Item>
    <Menu.Item>
      <Link rel="noopener noreferrer" to="/setting">
        个人设置
      </Link>
    </Menu.Item>
  </Menu>
);

export default function Counter() {

  return (
    <div className="header-user">
      <Badge dot>
        <Icon type="notification" />
      </Badge>
      <Dropdown overlay={menu} placement="bottomLeft">
        <span className="ant-dropdown-link">
          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        </span>
      </Dropdown>
    </div>
  )
}