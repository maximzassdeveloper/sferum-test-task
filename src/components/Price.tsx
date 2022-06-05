import { FC } from 'react'

interface PriceProps {
  price: number
  className?: string
}

export const Price: FC<PriceProps> = ({ price, className }) => {

  const formatPrice = (amount: number) => amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")

  return (
    <span className={className}>
      {formatPrice(price)} руб.
    </span>
  )
}