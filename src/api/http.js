import axios from 'axios'
import qs from 'qs'

const setRequestUrl = (axios) => {
  let baseUrl
  const env = process.env.NODE_ENV
  switch (env) {
    case 'production':
      baseUrl = 'https://production:port'
      break
    case 'test':
      baseUrl = 'http://test:port'
      break
    default:
      baseUrl = 'http://localhost:3000'
    // baseUrl = 'http://107.12.133.3/api/v1'
  }
  axios.defaults.baseURL = baseUrl
}

const setRequestInterceptor = (axios) => {
  axios.interceptors.request.use(
    (config) => {
      let token = localStorage.getItem('token')
      token && (config.headers['Authorization'] = 'Bearer ' + token)
      return config
    },
    (err) => Promise.reject(err)
  )
}

const handleResponseErrorByStatus = (response) => {
  // set status, if status from response not exists, set it to 500
  const status = response.status || 500
  const message = (response.data && response.data.message) || 'Server error'
  // console.log('axios: response  = ', response)
  switch (status) {
    case 400:
      break
    case 401: // 权限问题，未登录/需要验证
      // localStorage.removeItem('token')
      // push('/login', 500)
      break
    case 403: //服务器拒绝执行：token/Credential过期
      localStorage.removeItem('token')
      // push('/login', 500)
      break
    case 404: // 找不到页面
      // push('/home', 500)
      alert('not found')
      break
    default:
    // push('/serverError')
  }
  return {
    status,
    message,
  }
}

const handleResponseError = (err) => {
  // 具体的响应字段需要根据api的设置，如果存在响应，
  // 只是说明发送请求成功，但是可能是参数或者其他原因
  // 导致服务器不能正确返回结果
  const response = err.response
  let status = 400
  let message = err

  if (response) {
    // 具体字段需要根据api设置
    ;({ message, status } = handleResponseErrorByStatus(response))
  } else {
    // 客户端断网，导致没能获取到服务器的请求
    if (!window.navigator.onLine) {
      message = 'off line'
    }
  }
  return Promise.reject({
    message,
    status,
  })
}

const setResponseInterceptor = (axios) => {
  axios.interceptors.response.use(
    (response) => response.data,
    (err) => handleResponseError(err)
  )
}

const setInterceptor = (axios) => {
  setRequestInterceptor(axios)
  setResponseInterceptor(axios)
}

const setRequestDataType = (axios, type) => {
  let contentType
  switch (type) {
    case 'urlencoded':
      contentType = 'application/x-www-form-urlencoded'
      axios.defaults.transformRequest = (data) => qs.stringify(data)
      break
    default:
      contentType = 'application/json;charset=utf-8'
      axios.defaults.transformRequest = (data) => JSON.stringify(data)
  }
  axios.defaults.headers['Content-Type'] = contentType
}

const setOthers = (axios) => {
  axios.defaults.timeout = 10000
  // axios.defaults.withCredentials = true
}

setRequestUrl(axios)
setInterceptor(axios)
setRequestDataType(axios)
setOthers(axios)

export default axios
