import React, { Component } from 'react'
import { withRouter } from 'umi'
import { ConfigProvider } from 'antd'
import BaseLayout from './BaseLayout'
import zhCN from 'antd/lib/locale/zh_CN'

@withRouter
class Layout extends Component {
  state = {

  }

  componentDidMount() {
  }

  render() {
    const { children } = this.props
  

    return (
      <ConfigProvider locale={zhCN}>
        <BaseLayout>{children}</BaseLayout>
      </ConfigProvider>
    )
  }
}

export default Layout
