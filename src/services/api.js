import axios from 'axios'

const api = axios.create({
  baseURL: 'https://prod-acelera-mais-api.herokuapp.com'
})

export default api
