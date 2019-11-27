import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import Register from './pages/register';
import Login from './pages/login';
import Order from './pages/order';

// import http from './server';
import './App.css';

function App(props) {

  // const goRegister = async () => {
  //   const res = await http.get('/users');
  //   console.log(res);
  // }

  return (
    <div className="App">
      <Router>
        <Route path="/register" component={Register}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/order" component={Order}></Route>
      </Router>
    </div>
  );
}

export default App;
