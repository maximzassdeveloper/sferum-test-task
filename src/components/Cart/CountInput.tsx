import { InputNumber } from 'antd'
import { FC } from 'react'

interface CountInputProps {
  value: number
  onChange: (value: number) => void  
}

export const CountInput: FC<CountInputProps> = ({ value, onChange }) => {

  const minusHandler = () => {
    if (value <= 1) return
    onChange(value-1)
  }

  const plusHandler = () => {
    onChange(value+1)
  }

  return (
    <div className='count-input'>
      <div onClick={minusHandler} className="count-input__button minus">-</div>
      <InputNumber 
        className='count-input__input'
        value={value}
        onChange={onChange}
        controls={false}
      />  
      <div onClick={plusHandler} className="count-input__button plus">+</div>
    </div>
  )
}