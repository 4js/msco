/**
 * Created by macfeng on 18/03/21.
 *
 * index
 *
 */
import React, { Component } from 'react'
import { Row, Col,Layout,Button,Carousel,Select, Spin,Input } from 'antd';
import './index.less';
import PublicHeader from 'components/header/header.js'//头部组件
import Img from 'images/view.png'
import { Link} from 'react-router-dom';
import axios from 'service/request'

export default class Index extends Component {
    // 初始化页面常量 绑定事件方法
    constructor(props) {
        super(props)
        this.state = {
            text:"首页"
        }
    }
    // 组件已经加载到dom中
    componentDidMount() {
        
    }
    //组件将被卸载  
    componentWillUnmount(){  
    }  

    render() {
        return (
            <div>
                <PublicHeader></PublicHeader> 
                <p>这是首页</p>
                <img src={Img}></img>
                <div><Link to={"/info"}>点我</Link></div>
            </div>
        )
    }
}
