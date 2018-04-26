/**
 * Created by macfeng on 17/12/20.
 *
 * 404
 *
 */
import React, { Component } from 'react'
import './noPage.less';
import PublicHeader from 'components/header/header.js'//头部组件

export default class NoPage extends Component {
    // 初始化页面常量 绑定事件方法
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    // 组件已经加载到dom中
    componentDidMount() {

    }

    render() {
        const {history,match} = this.props
        return (
            <div>
                <PublicHeader history={history} match={match}></PublicHeader> 
                <div className="no-page-box">
                    <p className="no-page-text">对不起，您访问的页面出错了...</p>
                </div>
            </div>
        )
    }
}
