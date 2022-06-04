import { FC } from 'react'
import { ICartBook } from '@/types'
import { imgPath } from '@/utils/helper'
import { useCartContext } from '@/contexts/CartContext'
import deleteIcon from '@/assets/close.svg'

interface CartItemProps {
  book: ICartBook
}

export const CartItem: FC<CartItemProps> = ({ book }) => {

  const { removeBook } = useCartContext()

  return (
    <div className='cart-item'>

      <div className='cart-item__image'>
        <img src={imgPath(book.coverUrl)} alt='' />
      </div>

      <div className='cart-item__content'>
        <h4 className='cart-item__name'>{book.name}</h4>
        <span className='cart-item__count'>{book.count} шт.</span>
        <span className='cart-item__price'>{book.price * book.count} руб.</span>
      </div>

      <div className='cart-item__delete' onClick={() => removeBook(book.name)}>
        <img src={deleteIcon} alt='Удалить' />
      </div>

    </div>
  )
}