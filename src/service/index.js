import axios from 'axios'

const { URL_BACKEND } = process.env

export const client = axios.create({
  baseURL: URL_BACKEND
})
