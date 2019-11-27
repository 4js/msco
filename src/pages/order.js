import React, { useState, useEffect } from 'react';
import http from '../server';

export default function Order(){

  const [list, setList] = useState([]);

  useEffect(() => {
    http.get('/order/list').then(res => {
      setList(res);
    })
  }, [])

  const renderList = () => {
    return list.map((item, index) => 
    (
      <li key={index}>
        <p>商品名称： { item.product_name }</p>
        <p>商品单价： { item.product_price }</p>
        <p>数量： { item.product_num }</p>
        <p>订单总价： { item.price }</p>
        <p>订单编号： { item.order_id }</p>
      </li>
    )
  )
  }

  return (
    <div>
      <h2>order</h2>
      <ul>{ renderList() }</ul>
    </div>
  )
}