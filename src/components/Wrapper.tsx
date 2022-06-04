import { FC } from 'react'
import { Col, Row, Layout } from 'antd'
import { Header, Catalog, Cart } from '.'

export const Wrapper: FC = () => {
  return (
    <Layout>
      <Header />
      <div className="container">
        <Row>
          <Col span={16}>
            <Catalog />
          </Col>
          <Col span={7} offset={1}>
            <Cart />
          </Col>
        </Row>
      </div>
    </Layout>
  )
}