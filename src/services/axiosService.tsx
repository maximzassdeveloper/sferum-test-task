import axios from 'axios'
import { SERVER_URL } from '@/utils/config'

export const BASE_URL = `${SERVER_URL}/bookstore-api`

const defaultAxios = axios.create({
  baseURL: BASE_URL,
})

export default defaultAxios