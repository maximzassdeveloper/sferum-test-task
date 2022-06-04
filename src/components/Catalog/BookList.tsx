import { FC } from 'react'
import { Col, Row } from 'antd'
import { Book } from '@/components/Book'
import { IBook } from '@/types'

interface BookListProps {
  books: IBook[]
}

export const BookList: FC<BookListProps> = ({ books }) => {
  return (
    <Row className='book-list' gutter={10}>
      {books.length 
        ? books.map(book => 
            <Col key={book.name} span={6}>
              <Book book={book} />
            </Col>
          )
        : <Col span={24}><p>Нет книг</p></Col>
      }
    </Row>
  )
}