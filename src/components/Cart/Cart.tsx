import { FC } from 'react'
import { useCartContext } from '@/contexts/CartContext'
import { CartItem } from './CartItem'
import { CartCheckout } from './CartCheckout'
import cartIcon from '@/assets/cart.svg'

export const Cart: FC = () => {

  const { books } = useCartContext()

  return (
    <div className='cart'>

      <div className='cart-header'>
        <h3 className='cart__title'>Корзина <img src={cartIcon} alt='' /></h3>
      </div>

      <div className='cart-books'>
        {books.length 
          ? books.map(book => 
              <CartItem key={book.name} book={book} />
            )
          : <div className='cart-books__noresults'>
              <p>Нет добавленных книг</p>
            </div>
        }
      </div>

      <CartCheckout />

    </div>
  )
}