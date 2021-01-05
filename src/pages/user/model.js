import modelExtend from 'dva-model-extend'
const { pathToRegexp } = require("path-to-regexp")
import api from 'api'
import store from 'store'
import { pageModel } from 'utils/model'

const userListApiData = {
  data: [
    {
      id: 1608867279649,
      name: '赵四光',
      createTime: 1608867224253,
      endTime: 1608867279652,
      mobile: '13556256537',
      status: 'success'
    },
    {
      id: 1608867279650,
      name: '王五周',
      createTime: 1608857224253,
      endTime: 1608867279652,
      mobile: '13556256537',
      status: 'processing'
    },
    {
      id: 1608867279651,
      name: '李四光',
      createTime: 1608857264253,
      endTime: 1608867279652,
      mobile: '13556256537',
      status: 'error'
    },
    {
      id: 1608867279652,
      name: '陈月光',
      createTime: 1608850264253,
      endTime: 1608867279652,
      mobile: '13556256537',
      status: 'success'
    },
    {
      id: 1608867279653,
      name: '阿玛尼',
      createTime: 1608857264253,
      endTime: 1608867279652,
      mobile: '13556256537',
      status: 'error'
    },
    {
      id: 1608867279654,
      name: '王三运',
      createTime: 1608857264253,
      endTime: 1608867279652,
      mobile: '13556256537',
      status: 'error'
    },
    {
      id: 1608867279655,
      name: '周思齐',
      createTime: 1608857224253,
      endTime: 1608867279652,
      mobile: '13556256537',
      status: 'processing'
    },
    {
      id: 1608867279656,
      name: '陈明忠',
      createTime: 1608857224253,
      endTime: 1608867279652,
      mobile: '13556256537',
      status: 'processing'
    }
  ],  
  total: 21
}

const {
  queryUserList,
  createUser,
  removeUser,
  updateUser,
  removeUserList,
} = api

export default modelExtend(pageModel, {
  namespace: 'user',

  state: {
    currentItem: {},
    modalVisible: false,
    modalType: 'create'
  },

  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(location => {
        if (pathToRegexp('/user').exec(location.pathname)) {
          const payload = location.query || { page: 1, pageSize: 10 }
          dispatch({
            type: 'query',
            payload,
          })
        }
      })
    },
  },

  effects: {
    *query({ payload = {} }, { call, put }) {
      // const data = yield call(queryUserList, payload)
      const data = userListApiData
      const isLogin = store.get('isLogin') || false
      console.log('isLogin', isLogin)
      if (isLogin) {
        yield put({
          type: 'querySuccess',
          payload: {
            list: data.data,
            pagination: {
              current: Number(payload.page) || 1,
              pageSize: Number(payload.pageSize) || 10,
              total: data.total,
            },
          },
        })
      }
    },

    // *create({ payload }, { call, put }) {
    //   const data = yield call(createUser, payload)
    //   if (data.success) {
    //     yield put({ type: 'hideModal' })
    //   } else {
    //     throw data
    //   }
    // },

    // *update({ payload }, { select, call, put }) {
    //   const id = yield select(({ user }) => user.currentItem.id)
    //   const newUser = { ...payload, id }
    //   const data = yield call(updateUser, newUser)
    //   if (data.success) {
    //     yield put({ type: 'hideModal' })
    //   } else {
    //     throw data
    //   }
    // },

    *hide({ payload }, { select, call, put }) {
      yield put({ type: 'hideModal' })
    }
  },

  reducers: {
    showModal(state, { payload }) {
      return { ...state, ...payload, modalVisible: true }
    },

    hideModal(state) {
      return { ...state, modalVisible: false }
    },
  },
})
