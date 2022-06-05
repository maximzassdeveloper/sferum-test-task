import { createContext, FC, PropsWithChildren, useContext, useEffect, useState } from 'react'
import { useCartContext } from './CartContext'

interface IAppContext {
  balance: number
  checkout: () => boolean
}

export const AppContext = createContext({} as IAppContext)
export const useAppContext = () => useContext(AppContext)


export const AppContextProvider: FC<PropsWithChildren<{}>> = ({ children }) => {

  const { total, clearCart } = useCartContext()
  const [balance, setBalance] = useState(10000)

  function checkout () {
    if (total > balance) return false

    const newBalance = balance - total
    setBalance(newBalance)
    clearCart()
    localStorage.setItem('balance', String(newBalance))

    return true
  }

  useEffect(() => {
    const savedBalance = localStorage.getItem('balance')
    if (savedBalance) setBalance(+savedBalance)
  }, [])

  const defaultContext: IAppContext = {
    balance,
    checkout
  }

  return (
    <AppContext.Provider value={defaultContext}>
      {children}
    </AppContext.Provider>
  )
}