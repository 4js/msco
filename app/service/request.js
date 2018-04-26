/**
 *Created by macfeng on 17/12/20.
 *
 * ajax全局配置
 *
 */
import axios from 'axios'
import { baseURL } from 'utils/config'

//import qs from 'qs' 查询字符串解析和stringifying库添加了一些安全，查询字符串解析器支持嵌套数组,深度的限制
// axios 配置
axios.defaults.timeout = 5000; //响应时间
// axios.defaults.headers.common['Authorization'] =token;   //用户token
axios.defaults.headers.post['Content-Type'] = 'application/json'; //配置请求头
axios.defaults.headers.post['X-App-Id'] = 'h5:1.0'; //标识客户端版本
axios.defaults.headers.get['Content-Type'] = 'application/json'; //配置请求头
axios.defaults.headers.get['X-App-Id'] = 'h5:1.0'; //标识客户端版本
axios.defaults.headers.delete['Content-Type'] = 'application/json'; //配置请求头
axios.defaults.headers.delete['X-App-Id'] = 'h5:1.0'; //标识客户端版本
axios.defaults.headers.put['Content-Type'] = 'application/json'; //配置请求头
axios.defaults.headers.put['X-App-Id'] = 'h5:1.0'; //标识客户端版本

// 当实例创建时设置默认配置
axios.defaults.baseURL = baseURL;
let instance = axios.create({
  baseURL,
});


// // 实例创建后默认设置改变
// instance.defaults.headers.common['X-Access-Token'] = token;
//POST传参序列化
// var token = window.localStorage.getItem('token');

//http request 拦截器
axios.interceptors.request.use((config) => {
    // if (config.method === 'post'){
    //     config.data.type = 'html';
    //     config.data = JSON.stringify(config.data);
    // }

  //劫持所有Ajax请求，如果这里有一个token在本地存储里面,它将会附加到一个名为x-access-token的Header里面
  if (localStorage.token) {  //判断是否存在token，如果存在的话，则每个http header都加上token
      config.headers.common['token'] = JSON.parse(window.localStorage.getItem('token')).access_token;
  }

  return config;
}, (error) => {
  console.log('请求超时')
  return Promise.reject(error);
});

//http response 拦截器:返回状态判断（添加响应拦截器）
axios.interceptors.response.use(
  response => {
    // 响应成功关闭loading
    // loadinginstace.close()
    if (response.data.code === 300 || response.data.code === 301 || response.data.code === 302 || response.data.code === 303) {
      // 302 说明 token 验证失败
      // 可以直接跳转到登录页面，重新登录获取 token
      window.localStorage.removeItem('token')
      window.setTimeout(()=>{
        window.location.reload()
      },500)
      return {
        code:12000,
        message:"登录过时,退出请重新登录"
      };
    }
    if (response.status === 200) {
      return response.data;
    }
  },
	error => {
		if (error.response) {
			if (error.response.data.code === 500) {
				// 920 说明 token 验证失败
				// 可以直接跳转到登录页面，重新登录获取 token
				location.href = '/login'
      }
    }
		return Promise.reject(error.response.data) // 返回接口返回的错误信息
	}
);


export default axios;
