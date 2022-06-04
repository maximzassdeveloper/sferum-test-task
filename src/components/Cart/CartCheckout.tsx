import { FC } from 'react'
import { Button, Modal } from 'antd'
import { useCartContext } from '@/contexts/CartContext'
import { useAppContext } from '@/contexts/AppContext'

export const CartCheckout: FC = () => {

  const { books, total, count } = useCartContext()
  const { checkout } = useAppContext()

  const success = () => {
    Modal.success({
      title: 'Покупка прошла успешно'
    })
  }
  
  const error = () => {
    Modal.error({
      title: 'Недостаточно денег для заказа',
    })
  }

  const checkoutHandler = () => {
    const isSuccess = checkout()
    isSuccess ? success() : error()
  }

  return (
    <div className='cart-checkout'>
      <div>
        <span>{count} шт.</span>
        <span>{total} руб.</span>
      </div>
      <Button 
        className='cart-checkout__button'
        disabled={!books.length}
        onClick={checkoutHandler}
      >
        Купить
      </Button>
    </div>
  )
}