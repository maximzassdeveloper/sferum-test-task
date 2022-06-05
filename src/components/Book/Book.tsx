import { FC } from 'react'
import { Button } from 'antd'
import { IBook } from '@/types'
import { imgPath } from '@/utils/helper'
import { useCartContext } from '@/contexts/CartContext'
import { Price } from '@/components'

interface BookProps {
  book: IBook
}

export const Book: FC<BookProps> = ({ book }) => {

  const { addBook } = useCartContext()

  const clickHandler = () => {
    addBook(book)
  }

  return (
    <div className='book'>
      <div className="book__image">
        <img src={imgPath(book.coverUrl)} alt={book.name} />
      </div>
      <div className="book__content">
        <h3 className='book__title'>{book.name}</h3>
        <Price className='book__price' price={book.price} />
        <Button onClick={clickHandler}>В корзину</Button>
      </div>
    </div>
  )
}