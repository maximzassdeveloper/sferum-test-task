import { FC } from 'react'
import { ICartBook } from '@/types'
import { useCartContext } from '@/contexts/CartContext'
import { Price } from '@/components'
import { CountInput } from './CountInput'
import deleteIcon from '@/assets/close.svg'

interface CartItemProps {
  book: ICartBook
}

export const CartItem: FC<CartItemProps> = ({ book }) => {

  const { removeBook, updateBook } = useCartContext()

  return (
    <div className='cart-item'>

      <div className='cart-item__image'>
        <img src={book.coverUrl} alt='' />
      </div>

      <div className='cart-item__content'>
        <h4 className='cart-item__name'>{book.name}</h4>
        <div className='cart-item__bottom'>
          <CountInput 
            value={book.count}
            onChange={val => updateBook(book.name, val)}
          />
          <Price className='cart-item__price' price={book.price * book.count} />
        </div>
      </div>

      <div className='cart-item__delete' onClick={() => removeBook(book.name)}>
        <img src={deleteIcon} alt='Удалить' />
      </div>

    </div>
  )
}