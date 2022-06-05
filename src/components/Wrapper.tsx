import { FC } from 'react'
import { Col, Row, Layout } from 'antd'
import { Header, Catalog, Cart } from '.'

export const Wrapper: FC = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header />
      <div className='container'>
        <Row className='main-row' wrap={false}>
          <Col className='catalog-col'>
            <Catalog />
          </Col>
          <Col className='cart-col'>
            <Cart />
          </Col>
        </Row>
      </div>
    </Layout>
  )
}