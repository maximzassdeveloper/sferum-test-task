import { SERVER_URL } from './config'

export const imgPath = (url: string) => {
  return SERVER_URL + url
}