import { FC, useEffect, useState } from 'react'
import { bookService } from '@/services/bookService'
import { IBook, IFilters } from '@/types'
import { useDebounce } from '@/hooks/useDebounce'
import { Filters } from './Filters'
import { BookList } from './BookList'
import './catalog.scss'

export const Catalog: FC = () => {

  const [books, setBooks] = useState<IBook[]>([])
  const [loading, setLoading] = useState(true)
  const [filters, setFilters] = useState<IFilters>({})

  const filterHandler = (name: keyof IFilters, value: string | number | null) => {
    const newFilters = { ...filters, [name]: value }
    if (!value) delete newFilters[name]
    
    setFilters(newFilters)
    setLoading(true)
    debounsedFetchBooks(newFilters)
  }

  const onClearFilters = () => {
    setFilters({})
    setLoading(true)
    fetchBooks({})
  }

  const fetchBooks = (actualFilters?: IFilters) => {
    bookService.getBooks(actualFilters ?? filters)
      .then(resp => setBooks(resp.data))
      .catch(e => console.log(e))
      .finally(() => setLoading(false))
  }

  const debounsedFetchBooks = useDebounce((f: IFilters) => fetchBooks(f), 500)

  useEffect(() => {
    fetchBooks()
  }, [])

  return (
    <div className='catalog'>
      <Filters 
        onChange={filterHandler} 
        filters={filters} 
        onClear={onClearFilters}
      />
      <BookList 
        books={books} 
        loading={loading}
      />
    </div>
  )
}