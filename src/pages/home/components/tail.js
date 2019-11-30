import React, { useState, useEffect } from 'react';
import { Tabs } from 'antd';
import http from '../../../server';

const { TabPane } = Tabs;

function TailItem(props){

  const { list, type } = props;

  return list.filter(item => item.tail_type === Number(type)).map((item, index) => {
    return (
      <div className="tail-path-container" key={index}>
        <a className="tail-path-link" href="//coding.imooc.com/learningpath/route?mc_marking=e1d9f7b53647cb62eaf73388bb97f0f4&amp;mc_channel=syxxlx&amp;pathId=31" target="_blank">
          <div className="tail-banner">
            <img alt="" src={item.tail_img}/>
            {/* <div class="img-up" style="background-image: url(//img2.mukewang.com/szimg/5da9a00d09eeecba01400140-140-140.png);"></div>
            <div class="img-mid" style="background-image: url(//img2.mukewang.com/szimg/5da9a00d09eeecba01400140-140-140.png);"></div>
            <div class="img-down" style="background-image: url(//img2.mukewang.com/szimg/5da9a00d09eeecba01400140-140-140.png);"></div> */}
          </div>
          <h4>{item.tail_name}</h4>
          <p>{item.tail_desc}</p>
          <div className="tail-path-info">
            <span>{item.tail_steps}步骤 · {item.tail_course}门课</span>
            <span><i className="imv2-star2"></i>{item.tail_collect}人收藏</span>
          </div>
        </a>
      </div>
    )
  })
}

export default function Tail(){

  const [list, setList] = useState([]);

  useEffect(() => {
    http.get('/tail').then(res => {
      setList(res);
    })
  }, [])

  return (
    <div className="container container-recommend container-tail">
      <h3 className="types-title">
        <span>学习路线</span>
      </h3>
      <div className="tail-list clearfix">
        <Tabs defaultActiveKey="1" animated={false}>
          <TabPane tab="前端" key="1">
            <TailItem list={list} type="1" />
          </TabPane>
          <TabPane tab="后端" key="2">
            <TailItem list={list} type="2"/>
          </TabPane>
          <TabPane tab="移动端" key="3">
            <TailItem list={list} type="3" />
          </TabPane>
          <TabPane tab="大数据" key="4">
            <TailItem list={list} type="4" />
          </TabPane>
          <TabPane tab="区块链" key="5">
            <TailItem list={list} type="5" />
          </TabPane>
        </Tabs>
      </div>
    </div>
  )
}