import { FC } from 'react'
import { List } from 'antd'
import { useCartContext } from '@/contexts/CartContext'
import { CartItem } from './CartItem'
import { CartCheckout } from './CartCheckout'

import cartIcon from '@/assets/cart.svg'
import closeIcon from '@/assets/close.svg'
import './cart.scss'

export const Cart: FC = () => {

  const { books, isMobileShow, setIsMobileShow } = useCartContext()

  const classes = ['cart']
  if (isMobileShow) classes.push('show')

  return <>
    <div className={classes.join(' ')}>

      <div className='cart-header'>
        <h3 className='cart__title'>Корзина <img src={cartIcon} alt='' /></h3>
        <div className='cart__close' onClick={() => setIsMobileShow(false)}>
          <img src={closeIcon} alt='Закрыть' />
        </div>
      </div>

      <List 
        className='cart-books'
        dataSource={books}
        locale={{ emptyText: 'Нет добавленных книг' }}
        renderItem={book => 
          <CartItem book={book} />
        }
      />

      <CartCheckout />

    </div>
    <div className='cart__mobile-bg' />
  </>
}