import React from 'react';
import { Icon } from 'antd';

export default function Employ(){
  return (
    <div className="container container-recommend container-employ">
      <h3 className="types-title">
        <span>就业班</span>
        <span className="intro">零基础快速就业</span>
      </h3>
      <div className="path-list clearfix">
        <a href="//class.imooc.com/sale/newfe?mc_marking=6be094dafde423bf49df7978fb1b5b44&amp;mc_channel=L1" target="_blank" data-track="ljtj-1-1">
          <Icon type="insurance" /><p className="tit">Web前端攻城狮</p>
          <p className="desc">从未接触编程也可以学好</p>
        </a>
        <a href="//class.imooc.com/sale/newjava?mc_marking=b9b1bf4f19e124900889941731e52a4b&amp;mc_channel=L2" target="_blank" data-track="ljtj-1-3">
          <Icon type="smile" theme="twoTone" /><p className="tit">Java攻城狮</p>
          <p className="desc">综合就业排名第一</p>
        </a>
        <a href="//class.imooc.com/sale/python?mc_marking=b098f828d4a7229958cf4ad9c4a7cac5&amp;mc_channel=L5" target="_blank" data-track="ljtj-1-5">
          <Icon type="smile" theme="twoTone" /><p className="tit">Python攻城狮</p>
          <p className="desc">应用领域最为广泛</p>
        </a>
        <a href="//class.imooc.com/sale/newandroid?mc_marking=7e464a4870e13dc90f4b8d534a20efe0&amp;mc_channel=L3" target="_blank" data-track="ljtj-1-4">
          <Icon type="smile" theme="twoTone" /><p className="tit">Android攻城狮</p>
          <p className="desc">移动市场份额第一</p>
        </a>
        <a href="//class.imooc.com/sale/php?mc_marking=c03f3d2ee3d0598c6fa775ff2b4c27d0&amp;mc_channel=L4" target="_blank" data-track="ljtj-1-2">
          <Icon type="smile" theme="twoTone" /><p className="tit">PHP攻城狮</p>
          <p className="desc">Web开发首选语言</p>
        </a>
      </div>
    </div>
  )
}