import React, { useState, useEffect } from 'react';
import { List, Avatar } from 'antd';
import http from '../../server';

// import './order.scss';

export default function Order(){

  const [list, setList] = useState([]);

  useEffect(() => {
    http.get('/product').then(res => {
      setList(res);
    })
  }, [])


  return (
    <div className="right-container">
      <div className="right-title">
        <h2>实战课程</h2>
        <ul>
          <li className="action"><a href="/myorder">全部</a></li>
          <li><a href="/myorder?type=0">未支付</a></li>
          <li><a href="/myorder?type=3">已完成</a></li>
          <li><a href="/myorder?type=5">已失效</a></li>
        </ul>
        <span className="recycle">
          <a href="/myorder?type=del"><i className="imv2-delete"></i>订单回收站</a>
        </span>
      </div>
      <List
        itemLayout="horizontal"
        dataSource={list}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
              title={<a href="https://ant.design">{item.product_name}</a>}
              description={item.product_price}
            />
          </List.Item>
        )}
      />
    </div>
  )
}