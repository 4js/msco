import React, { Component } from 'react'
import { Layout,Modal} from 'antd';
import './info.less'
import { Link} from 'react-router-dom';
import PublicHeader from 'components/header/header.js'//头部组件



export default class info extends Component {
	// 初始化页面常量 绑定事件方法
	constructor(props, context) {
		super(props)
		this.state = {
			modal1Visible: false
		}
	}
	render() {
		const {match} = this.props
		return (
			<div>
				<PublicHeader history={this.props.history} match={this.props.match}></PublicHeader> 
				<p>个人中心</p>
			</div>
		)
	}
}