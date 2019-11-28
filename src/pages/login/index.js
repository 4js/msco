import React from 'react';
import { Row, Col } from 'antd';
import Form from './form';

import './login.scss';

export default function Login(){
  return (
    <Row type="flex" justify="space-around" align="middle" style={{ height: '100%', minWidth: '1000px'}}>
      <Col span={12}>col-12</Col>
      <Col span={12} style={{ padding: "0 100px"}}>
        <Form />
      </Col>
    </Row>
  )
}

