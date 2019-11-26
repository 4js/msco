import axios from 'axios';
import qs from 'qs';
import { Promise } from 'q';

let http = {
  get: '',
  post: ''
};

axios.defaults.baseURL = 'http://localhost:7001';


http.post = function(api, data){
  let params = qs.stringify(data);
  return new Promise((resolve, reject) => {
    axios.post(api, params).then(res => {
      resolve(res.data);
    })
  })
}

http.get = function(api, data){
  let params = qs.stringify(data);
  return new Promise((resolve, reject) => {
    axios.get(api, { params }).then(res => {
      resolve(res.data);
    })
  })
}

export default http;