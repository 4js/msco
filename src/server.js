import axios from 'axios';
import qs from 'qs';
import { Promise } from 'q';


let messageCode = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
}


let http = {
  get: '',
  post: ''
};

axios.defaults.baseURL = 'http://localhost:7001';

const service = axios.create({
  // baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  baseURL: 'http://localhost:7001',
  timeout: 5000
});

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['X-Token'] = token;
    }
    return config;
  },
  error => {
    // do something with request error
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => {
    const { status } = response;
    if (status >= 200 && status <= 300) {
      return response;
    }
    return Promise.reject(new Error(response.message || 'Error'))
  },
  error => {
    const response = error.response;
    if (response) {
      const { status } = response;
      if (status >= 200 && status <= 300) {
        return error;
      }

      // 非200处理错误
      let message = messageCode[status];
      if (response.data) {
        message = JSON.stringify(response.data);
      }
      throw message;
    }
    throw JSON.stringify('network error');
  }
)



http.post = function(api, data){
  let params = qs.stringify(data);
  return new Promise((resolve, reject) => {
    service.post(api, params).then(res => {
      resolve(res.data);
    })
  })
}

http.get = function(api, data){
  let params = qs.stringify(data);
  return new Promise((resolve, reject) => {
    service.get(api, { params }).then(res => {
      resolve(res.data);
    })
  })
}

export default http;