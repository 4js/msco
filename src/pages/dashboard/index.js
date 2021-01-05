import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'umi'
import { Page } from 'components'
import { Input, Button, Tabs } from 'antd'
import styles from './index.less'

const { Search } = Input
const { TabPane } = Tabs

const bodyStyle = {
  bodyStyle: {
    height: 432,
    background: '#fff',
  },
}

@connect(({ dispatch, dashboard, loading }) => ({
  dashboard,
  dispatch,
  loading,
}))
class Dashboard extends PureComponent {

  constructor(props){
    super(props)
    this.state = {

    }
  }

  render() {

    return (
      <Page
        loading={false}
        className={styles.dashboard}
      >
        <div className={styles.first}>
          <p>dashboard</p>
        </div>
      </Page>
    )
  }
}

Dashboard.propTypes = {
  dashboard: PropTypes.object,
  loading: PropTypes.object,
}

export default Dashboard
