import axios from 'axios'

const getClientConfiguration = () => {
  return {
    baseURL: process.env.REACT_APP_BASEURL,
    headers: {
      common: {
        Authorization: `Bearer ${localStorage.getItem('token') || ''}`
      }
    }
  }
}

export const client = axios.create(getClientConfiguration())

export const setTokenInHeaders = (token = '') => {
  client.defaults.headers.common = {
    ...client.defaults.headers.common,
    Authorization: `Bearer ${localStorage.getItem('token') || token}`
  }
}
