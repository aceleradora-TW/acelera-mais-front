import axios from 'axios'
import env from 'react-dotenv'

const getURLBackend = () => {
  return env ? env.URL_BACKEND : 'http://localhost:9000'
}

export const client = axios.create({
  baseURL: getURLBackend()
})
