import axios from 'axios'

const { URL_BACKEND = 'http://localhost:9000' } = process.env

export const client = axios.create({
  baseURL: URL_BACKEND
})
