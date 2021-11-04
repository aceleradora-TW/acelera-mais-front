import axios from 'axios'

const { URL_BACKEND } = process.env

export const client = axios.create({
  baseUrl: URL_BACKEND
})
