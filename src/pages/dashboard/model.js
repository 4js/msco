import modelExtend from 'dva-model-extend'
import { model } from 'utils/model'
import api from 'api'

const {
  queryVague,
  queryTopic
} = api

const { pathToRegexp } = require("path-to-regexp")

export default modelExtend(model, {
  namespace: 'dashboard',
  state: {
    vagueList: [],
    topicList: [],
    storeModelVisible: false
  },
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(location => {
        if (pathToRegexp('/dashboard').exec(location.pathname)) {
        }
      })
    },
  },
  effects: {
    *queryTopicList({ payload = {} }, { call, put }) {
      const data = yield call(queryTopic, payload)
      if (data.success && data) {
        yield put({
          type: 'updateState',
          payload: {
            topicList: data.data
          }
        })
      }
    }
  },
})
