import { FC } from 'react'
import { Col, List, Row } from 'antd'
import { Book, BookSkeleton } from '@/components'
import { IBook } from '@/types'

interface BookListProps {
  books: IBook[]
  loading: boolean
}

export const BookList: FC<BookListProps> = ({ books, loading }) => {
  return (
    <List 
      className='book-list'
      grid={{ gutter: 10, column: 4 }}
      pagination={{
        pageSize: 12
      }}
      dataSource={books}
      locale={{ emptyText: 'Книг нет' }}
      renderItem={book => 
        <List.Item>
          {loading ? <BookSkeleton /> : <Book book={book} />}
        </List.Item>
      }
    />
  )
}