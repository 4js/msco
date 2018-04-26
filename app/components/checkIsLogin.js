/**
 * Created by macfeng on 17/12/20.
 *
 * 路由拦截
 *
 */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) =>
  <Route {...rest} render={props =>
    window.localStorage.token ? 
        <Component {...props}/>
       : 
        <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }}/>
  }
  />

module.exports = {
  PrivateRoute,
}
