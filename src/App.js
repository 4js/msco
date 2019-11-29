import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from "react-router-dom";

import Register from './pages/register';
import Login from './pages/login/index';
import Order from './pages/order/index';
import Nofound from './pages/404';

import { Layout, Menu } from 'antd';
import User from './components/user';

import './App.scss';

const { Header, Content, Footer } = Layout;

function App(props) {
  return (
    <Layout className="layout" style={{ height: '100vh' }}>
      <Router>
        <Header>
          <div className="logo">Logo</div>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
          <User />
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Route path="/register" component={Register}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/order" component={Order}></Route>
          <Route path="/404" component={Nofound}></Route>
          <Redirect to="/404" />
        </Content>
        <Footer style={{ textAlign: 'center', color: '#93999F', fontSize: '12px' }}>
          <p>
            &copy;&nbsp;2019&nbsp;hcxs.com&nbsp;&nbsp;粤ICP备 12003892号-11 <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802030151" style={{ color: '#93999F' }}><i className="beian"></i>京公网安备11010802030151号</a> 成都皓诚文化传媒有限公司 <a href="/license" target="_blank" style={{ color: '#93999F' }}>营业执照</a>
          </p>
        </Footer>
      </Router>
    </Layout>
  );
}

export default App;
