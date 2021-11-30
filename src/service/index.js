import axios from 'axios'

const { URL_BACKEND } = process.env

export const client = axios.create({
  baseURL: URL_BACKEND || 'http://localhost:9000',
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
