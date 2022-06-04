import { IBook, ICategory, IFilters } from '@/types'
import defaultAxios from './axiosService'

export const bookService = {
  getBooks(filters: IFilters = {}) {
    return defaultAxios.post<IBook[]>('/books', filters)
  },
  getCategories() {
    return defaultAxios.get<ICategory[]>('/books/categories')
  }
}