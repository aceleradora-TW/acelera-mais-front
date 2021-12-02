import axios from 'axios'
import env from 'react-dotenv'

const getURLBackend = () => {
  return env ? env.URL_BACKEND : 'https://stage-acelera-mais-api.herokuapp.com/'
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
