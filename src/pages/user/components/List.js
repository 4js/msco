import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Table, Modal, Badge } from 'antd'
import { DropOption } from 'components'
import { Link } from 'umi'
import moment from 'moment'
import styles from './List.less'

const { confirm } = Modal

const tMap = {
  error: '失败',
  success: '成功',
  processing: '执行中'
}

class List extends PureComponent {
  handleMenuClick = (record, e) => {
    const { onShowItem } = this.props

    if (e.key === '1') {
      onShowItem(record)
    } else if (e.key === '2') {
      confirm({
        title: '您确定要删除该用户信息吗？',
        onOk() {
          onDeleteItem(record.id)
        },
      })
    }
  }

  render() {
    const { onDeleteItem, onShowItem, ...tableProps } = this.props

    const columns = [
      {
        title: <span>用户名称</span>,
        dataIndex: 'name',
        key: 'name',
        render: (text, record) => <Link to={`user/${record.id}`}>{text}</Link>,
      },
      {
        title: <span>创建时间</span>,
        dataIndex: 'createTime',
        key: 'createTime',
        render: (text, record) => <span>{moment(text).format('YYYY-MM-DD HH:mm:ss')}</span>
      },
      {
        title: <span>结束时间</span>,
        dataIndex: 'endTime',
        key: 'endTime',
        render: (text, record) => <span>{moment(text).format('YYYY-MM-DD HH:mm:ss')}</span>
      },
      {
        title: <span>手机号码</span>,
        dataIndex: 'mobile',
        key: 'mobile',
      },
      {
        title: <span>状态</span>,
        dataIndex: 'status',
        key: 'status',
        render: (text, record) => <Badge status={text} text={tMap[text]} />
      },
      {
        title: <span>操作</span>,
        key: 'operation',
        // fixed: 'right',
        render: (text, record) => {
          return (
            <DropOption
              onMenuClick={e => this.handleMenuClick(record, e)}
              menuOptions={[
                { key: '1', name: '编辑' },
                { key: '2', name: '删除' }
              ]}
            />
          )
        },
      },
    ]

    return (
      <Table
        {...tableProps}
        pagination={{
          ...tableProps.pagination,
          showTotal: total => `总共 ${total} 条数据`,
        }}
        className={styles.table}
        bordered
        // scroll={{ x: 1200 }}
        columns={columns}
        simple
        rowKey={record => record.id}
      />
    )
  }
}

List.propTypes = {
  onShowItem: PropTypes.func,
  location: PropTypes.object,
}

export default List
