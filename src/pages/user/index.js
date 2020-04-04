import React from 'react';
import { Route } from "react-router-dom";
import OtherHeader from '../../layout/otherHeader';

import Order from './order/index';

import './user.scss';

export default class User extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  render(){
    return (
      <div className="main-content-box">
        <OtherHeader />
        <Route to="/order" component={Order} />
        {this.state.num}
      </div>
    )
  }

}
