import React, { PureComponent } from 'react'
import { Table } from 'antd'
import moment from 'moment'
import PropTypes from 'prop-types'

class List extends PureComponent{
  render () {
    const { dataSource, pagination, ...tableProps } = this.props

    const columns = [
      {
        title: '订单号',
        dataIndex: 'orderID',
        key: 'orderID'
      },
      {
        title: '用户名',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: '手机号',
        dataIndex: 'mobile',
        key: 'mobile'
      },
      {
        title: '下单时间',
        dataIndex: 'createTime',
        key: 'createTime',
        render: (text, record) => (<span>{moment(text).format('YYYY-MM-DD HH:mm:ss')}</span>)
      }
    ]

    return (
      <Table
        {...tableProps}
        rowKey="orderID"
        columns={columns}
        dataSource={dataSource}
        pagination={pagination}
      />
    )
  }
}

// List.PropTypes = {

// }

export default List