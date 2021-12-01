import axios from 'axios'
import env from 'react-dotenv'

const { URL_BACKEND = 'http://localhost:9000' } = env

export const client = axios.create({
  baseURL: URL_BACKEND
})
