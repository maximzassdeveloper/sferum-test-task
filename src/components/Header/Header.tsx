import { FC } from 'react'
import { Layout, Row } from 'antd'
import { useAppContext } from '@/contexts/AppContext'
import { useCartContext } from '@/contexts/CartContext'
import { Price } from '@/components'

import logoIcon from '@/assets/logo.svg'
import cartIcon from '@/assets/cart.svg'
import './header.scss'

export const Header: FC = () => {

  const { balance } = useAppContext()
  const { setIsMobileShow } = useCartContext()

  return (
    <Layout.Header className='header'>
      <div className='container'>
        <Row>

          <div className='logo'>
            <img src={logoIcon} alt='Логотип' />
            Магазин книг
          </div>

          <div className='balance'>
            Баланс <Price price={balance} />
          </div>

          <div className='header__cart' onClick={() => setIsMobileShow(prev => !prev)}>
            <img src={cartIcon} alt='Корзина' />
          </div>

        </Row>
      </div>
    </Layout.Header>
  )
}