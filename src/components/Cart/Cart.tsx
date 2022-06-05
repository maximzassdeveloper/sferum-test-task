import { FC } from 'react'
import { List } from 'antd'
import { useCartContext } from '@/contexts/CartContext'
import { CartItem } from './CartItem'
import { CartItemSkeleton } from './CartItemSkeleton'
import { CartCheckout } from './CartCheckout'

import cartIcon from '@/assets/cart.svg'
import './cart.scss'

export const Cart: FC = () => {

  const { books, loading } = useCartContext()

  return (
    <div className='cart'>

      <div className='cart-header'>
        <h3 className='cart__title'>Корзина <img src={cartIcon} alt='' /></h3>
      </div>

      <List 
        className='cart-books'
        dataSource={books}
        locale={{ emptyText: 'Нет добавленных книг' }}
        renderItem={book => 
          loading ? <CartItemSkeleton /> : <CartItem book={book} />
        }
      />

      <CartCheckout />

    </div>
  )
}