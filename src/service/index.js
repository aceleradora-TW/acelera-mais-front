import axios from 'axios'
import env from 'react-dotenv'

const getURLBackend = () => {
  return env ? env.URL_BACKEND : 'https://inglyd-acelera-mais-api-teste.herokuapp.com'
}

export const client = axios.create({
  baseURL: getURLBackend()
})
