import { FC } from 'react'
import { List } from 'antd'
import { Book, BookSkeleton } from '@/components'
import { IBook } from '@/types'

interface BookListProps {
  books: IBook[]
  loading: boolean
}

const fakeArray = Array.from({ length: 8 }).map((_, i) => ({ name: i.toString() } as IBook))

export const BookList: FC<BookListProps> = ({ books, loading }) => {
  return (
    <List 
      className='book-list'
      grid={{ gutter: 10, xxl: 4, xl: 4, lg: 3, md: 3, sm: 2, xs: 2 }}
      pagination={{
        pageSize: 12
      }}
      dataSource={(!books.length && loading) ? fakeArray : books}
      locale={{ emptyText: 'Книг нет' }}
      renderItem={book => 
        <List.Item>
          {loading ? <BookSkeleton /> : <Book book={book} />}
        </List.Item>
      }
    />
  )
}