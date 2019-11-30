import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

import Home from './pages/home';
import Register from './pages/register';
import Login from './pages/login/index';
import Order from './pages/order/index';
import Product from './pages/product/index';
import Nofound from './pages/404';

import { Layout } from 'antd';
import Footer from './layout/foot';

import './App.scss';

// const { Content } = Layout;

function App(props) {
  return (
    <Layout className="layout" style={{ height: '100vh' }}>
      <Router>
        <Route path="/" exact component={Home}></Route>
        <Route path="/register" component={Register}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/order" component={Order}></Route>
        <Route path="/product" component={Product}></Route>
        <Route path="/404" component={Nofound}></Route>
        <Route to="/404" />
        <Footer />
      </Router>
    </Layout>
  );
}

export default App;
