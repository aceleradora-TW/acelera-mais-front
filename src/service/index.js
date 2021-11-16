import axios from 'axios'

const { URL_BACKEND = 'https://test-acelera-mais-api.herokuapp.com/' } = process.env

export const client = axios.create({
  baseURL: URL_BACKEND
})
