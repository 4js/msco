/**
 * Created by macfeng on 17/12/20.
 *
 * 入口文件
 *
 */

import 'es5-shim';
import 'es5-shim/es5-sham';
import 'console-polyfill';
import 'fetch-ie8';

import "babel-polyfill";
import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Bundle from './bundle.js';
import Index from './pages/index/index'
import Info from './pages/info/info'
import NoPage from './pages/NoPage/NoPage'
import "./style/base.less"
import "./style/theme.less"
import "./style/iconfont.css"
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');





// import "antd-mobile/dist/antd-mobile.css"
// import "antd/dist/antd.css"

import PublicFooter from 'components/footer/footer.js'//尾部组件


// PrivateRoute 配置该路由需要登录才能进入

const APP = (
	<Router>
		<div className="body_main_box">
			<Switch>
				<Route path="/" exact render={() => (<Redirect to="/index"/>)}/>
				<Route path="/index" component={Index}/>
				<Route path="/info" component={Info}/>
				{/* <PrivateRoute path="/info" component={Info}/> */}
				<Route component={NoPage}/>
			</Switch>
			<PublicFooter/>
		</div>
	</Router>
)

ReactDOM.render(APP,document.getElementById('root'));


