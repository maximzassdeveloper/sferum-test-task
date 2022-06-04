import { FC, useEffect, useState } from 'react'
import { Row, Col } from 'antd'
import { bookService } from '@/services/bookService'
import { IBook, IFilters } from '@/types'
import { Book } from './Book'

interface CatalogProps {
  
}

export const Catalog: FC<CatalogProps> = () => {

  const [books, setBooks] = useState<IBook[]>([])
  const [filters, setFilters] = useState<IFilters>({})

  const getBooks = async () => {
    try {
      const resp = await bookService.getBooks(filters)
      setBooks(resp.data)
    } catch(e) {
      console.log(e)
    }
  }

  useEffect(() =>{
    getBooks()
  }, [])

  return (
    <Row className='book-list' gutter={10}>
      {books.map(book => 
        <Col key={book.name+book.price} span={6}>
          <Book book={book} />
        </Col>
      )}
    </Row>
  )
}