import axios from "axios";
const service=axios.create({
  baseURL:'http://localhost:8080/service/',
  timeout:10000,
  method:'post',
  responseType:'json'
})

service.interceptors.request.use(
  config => {
  console.log(config);
    return config
  },
  error => {
    // Do something with request error
    console.log(error) // for debug
       return Promise.reject(error)

  }
)

// response 拦截器
/**
 * respone拦截器
 * 一般用于对相应进行封装，已经对错误的统一封装
 */
service.interceptors.response.use(
  response => {
    const res = response.data
    if (response.status === 200) { // 错误码拦截
      return res
    } else {
      // Message({
      //   message: res.message,
      //   type: 'error',
      //   duration: 3 * 1000
      // })
      Promise.reject('error')
    }
  },
  error => {
    // Message({
    //   message: error.response.data.message,
    //   type: 'error',
    //   duration: 3 * 1000
    // })
    return Promise.reject(error)
  }
)
export default service