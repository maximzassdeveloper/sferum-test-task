import { FC } from 'react'
import { Layout, Row } from 'antd'
import { useAppContext } from '@/contexts/AppContext'
import logoIcon from '@/assets/logo.svg'

export const Header: FC = () => {

  const { balance } = useAppContext()

  return (
    <Layout.Header className='header'>
      <div className="container">
        <Row justify='space-between'>

          <div className='logo'>
            <img src={logoIcon} alt='Логотип' />
            Магазин книг
          </div>

          <div className='balance'>
            Баланс {balance} руб.
          </div>

        </Row>
      </div>
    </Layout.Header>
  )
}