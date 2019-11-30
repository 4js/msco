import React, { useState, useEffect } from 'react';
import http from '../../../server';

export default function Course(){
  const [list, setList] = useState([]);

  useEffect(() => {
    http.get('/product').then(res => {
      setList(res);
    })
  }, [])

  return (
    <div className="wrapper-course">
      <div className="container container-recommend container-course">
        <h3 className="types-title">
          <span>新上好课</span>
        </h3>
        <div className="course-list clearfix">
          {
            list.map(item => {
              return (
                <div className="index-card-container course-card-container" key={item.product_id}>
                  <a className="course-card" href="//coding.imooc.com/class/389.html?mc_marking=b587280c0c1c0e76c1092aa21406565a&amp;mc_channel=syb6" data-track="sztj-1-1">
                    <div className="course-card-top hashadow">
                      <img className="course-banner" alt="" src={item.product_img} />
                      <div className="course-label">
                        <label>JavaScript</label>
                        <label>Vue.js</label>
                      </div>
                    </div>
                    <div className="course-card-content">
                      <h3 className="course-card-name">{item.product_name}</h3>
                      <div className="clearfix course-card-bottom">
                        <div className="course-card-info">
                          <span className="course-card-price">￥{item.product_price}</span>
                          <span className="r js-hover-evaluation">22人评价</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}