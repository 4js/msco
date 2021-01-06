import { history } from 'umi'
const { pathToRegexp } = require("path-to-regexp")
import modelExtend from 'dva-model-extend'
import api from 'api'
import store from 'store'
import { pageModel } from 'utils/model'

const { loginUser } = api

const orderListApiData = {
  data: [
    {
      orderID: 1608867279649,
      name: '赵四光',
      createTime: 1608867224253,
      endTime: 1608867279652,
      mobile: '13556256537',
      status: 'success'
    },
    {
      orderID: 1608867279650,
      name: '王五周',
      createTime: 1608857224253,
      endTime: 1608867279652,
      mobile: '13556256537',
      status: 'processing'
    },
    {
      orderID: 1608867279651,
      name: '李四光',
      createTime: 1608857264253,
      endTime: 1608867279652,
      mobile: '13556256537',
      status: 'error'
    },
    {
      orderID: 1608867279652,
      name: '陈月光',
      createTime: 1608850264253,
      endTime: 1608867279652,
      mobile: '13556256537',
      status: 'success'
    },
    {
      orderID: 1608867279653,
      name: '阿玛尼',
      createTime: 1608857264253,
      endTime: 1608867279652,
      mobile: '13556256537',
      status: 'error'
    },
    {
      orderID: 1608867279654,
      name: '王三运',
      createTime: 1608857264253,
      endTime: 1608867279652,
      mobile: '13556256537',
      status: 'error'
    },
    {
      orderID: 1608867279655,
      name: '周思齐',
      createTime: 1608857224253,
      endTime: 1608867279652,
      mobile: '13556256537',
      status: 'processing'
    },
    {
      orderID: 1608867279656,
      name: '陈明忠',
      createTime: 1608857224253,
      endTime: 1608867279652,
      mobile: '13556256537',
      status: 'processing'
    }
  ],
  success: true,
  total: 21
}

export default modelExtend(pageModel, {
  namespace: 'order',

  state: {},
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(location => {
        if (pathToRegexp('/order').exec(location.pathname)) {
          dispatch({
            type: 'query',
            payload: {
              status: 2,
              ...location.query,
            }
          })
        }
      })
    },
  },
  effects: {
    *query({ payload }, { put, call, select }) {
      const { status } = payload
      const data = orderListApiData
      // const data = yield call(loginUser, payload)
      // const data = { success: true, message: '登录成功' }
      // store.set('isLogin', true)
      // const { locationQuery } = yield select(_ => _.app)
      if (data.success) {
        yield put({
          type: 'querySuccess',
          payload: {
            list: data.data,
            pagination: {
              current: Number(payload.page) || 1,
              pageSize: Number(payload.pageSize) || 10,
              total: data.total
            }
          }
        })
      } else {
        throw data
      }
    },
  },
})
