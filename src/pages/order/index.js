import React, { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect, history } from 'umi'
import { Page } from 'components'
import { Tabs } from 'antd'
import List from './components/List'
import config from 'utils/config'

import styles from './index.less'
import { stringify } from 'qs'

const { TabPane } = Tabs;

@connect(({ loading, order, dispatch }) => ({ loading, order, dispatch }))
class Order extends PureComponent {

  handleTabsChange = key => {
    console.log(key)
    const { pathname } = history
    history.push({
      pathname,
      search: stringify({ status: key })
    })
  }

  get listProps () {
    const { order } = this.props
    const { list, pagination } = order
    return {
      pagination,
      dataSource: list,
      onChange: (page) => {
        console.log(page)
      }
    }
  }

  render() {
    const { dispatch, loading } = this.props

    return (
      <Page>
        <div className={styles.loginBg}>
        <Tabs defaultActiveKey="1" onChange={this.handleTabsChange}>
          <TabPane tab="待发货" key="1">
            <List {...this.listProps}/>
          </TabPane>
          <TabPane tab="待收货" key="2">
            <p>23863</p>
          </TabPane>
        </Tabs>
        </div>
      </Page>
    )
  }
}

Order.propTypes = {
  order: PropTypes.object,
  location: PropTypes.object,
  dispatch: PropTypes.func,
  loading: PropTypes.object,
}

export default Order
