import React from 'react';
import HomeHeader from '../../layout/homeHeader';
import Employ from './components/employ';
import Course from './components/course';
import Tail from './components/tail';

import './home.scss';

export default class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render(){
    return (
      <div className="main-content-box">
        <HomeHeader />
        <Employ />
        <Course />
        <Tail />
      </div>
    )
  }

}
