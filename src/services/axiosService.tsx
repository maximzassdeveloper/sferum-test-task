import axios from 'axios'

export const BASE_URL = `http://45.8.249.57/bookstore-api`

const defaultAxios = axios.create({
  baseURL: BASE_URL,
})

export default defaultAxios