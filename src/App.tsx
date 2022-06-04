import { FC } from 'react'
import { Wrapper } from '@/components'
import { AppContextProvider } from './contexts/AppContext'
import { CartContextProvider } from './contexts/CartContext'

const App: FC = () => {
  return (
    <CartContextProvider>
      <AppContextProvider>
        <Wrapper />
      </AppContextProvider>
    </CartContextProvider>
  )
}

export default App