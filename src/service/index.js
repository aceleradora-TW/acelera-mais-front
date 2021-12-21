import axios from 'axios'
import env from 'react-dotenv'

const getURLBackend = () => {
  if (env) {
    const { URL_BACKEND } = env
    localStorage.setItem('service', URL_BACKEND)
    return URL_BACKEND
  }
  const service = localStorage.getItem('service')
  return service && service !== '' ? service : 'http://localhost:9000'
}

export const client = axios.create({
  baseURL: getURLBackend(),
  headers: {
    common: {
      Authorization: `Bearer ${localStorage.getItem('token') || ''}`
    }
  }
})

export const setTokenInHeaders = (token = '') => {
  client.defaults.headers.common = {
    ...client.defaults.headers.common,
    Authorization: `Bearer ${localStorage.getItem('token') || token}`
  }
}
