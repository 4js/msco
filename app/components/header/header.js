import React, { Component } from 'react';
import './header.less';
import { Row, Col, Button, Modal, Input } from 'antd';
import axios from 'axios'

export default class PublicHeader extends Component {
    constructor(props, context) {
        super(props)
        this.state = {
        }
    }

    componentDidMount() {
    }
    render() {
        const {match} = this.props
        return (
            <header className="header-container">
                <p>这是头部</p>
            </header>
        );
    }
}
