import { FC, useEffect, useState } from 'react'
import { bookService } from '@/services/bookService'
import { IBook, IFilters } from '@/types'
import { useDebounce } from '@/hooks/useDebounce'
import { Filters } from './Filters'
import { BookList } from './BookList'

export const Catalog: FC = () => {

  const [books, setBooks] = useState<IBook[]>([])
  const [filters, setFilters] = useState<IFilters>({})

  const filterHandler = (name: keyof IFilters, value: string | number | null) => {
    const newFilters = { ...filters, [name]: value }
    if (!value) delete newFilters[name]
    
    setFilters(newFilters)
    debounsedFetchBooks(newFilters)
  }

  const onClearFilters = () => {
    setFilters({})
    fetchBooks({})
  }

  const fetchBooks = (actualFilters?: IFilters) => {
    bookService.getBooks(actualFilters ?? filters)
      .then(resp => setBooks(resp.data))
      .catch(e => console.log(e))
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
      <BookList books={books} />
    </div>
  )
}