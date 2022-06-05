import { createContext, FC, PropsWithChildren, useContext, useEffect, useRef, useState } from 'react'
import { IBook, ICartBook } from '@/types'

interface ICartContext {
  books: ICartBook[]
  loading: boolean
  total: number
  count: number

  addBook: (book: IBook) => void
  removeBook: (name: string) => void
  updateBook: (name: string, count: number) => void
  clearCart: () => void
}

export const CartContext = createContext({} as ICartContext)
export const useCartContext = () => useContext(CartContext)


export const CartContextProvider: FC<PropsWithChildren<{}>> = ({ children }) => {

  const [books, setBooks] = useState<ICartBook[]>([])
  const [loading, setLoading] = useState(true)
  const [total, setTotal] = useState(0)
  const [count, setCount] = useState(0)
  const firstLoadContent = useRef(false)

  // Cart action functions
  function addBook (book: IBook) {
    const foundedBook = books.find(i => i.name === book.name)
    
    if (foundedBook) {
      updateBook(book.name, foundedBook.count+1)
    } else {
      setBooks([
        { ...book, count: 1 },
        ...books
      ])
    }
  }

  function removeBook (name: string) {
    setBooks(oldBooks => oldBooks.filter(i => i.name !== name))
  }

  function updateBook (name: string, count: number) {
    const newBooks = [...books]
    const bookIndex = newBooks.findIndex(i => i.name === name)
    newBooks[bookIndex] = { ...newBooks[bookIndex], count }
    setBooks(newBooks)
  }

  function clearCart () {
    setBooks([])
  }

  function saveCart() {
    localStorage.setItem('cart-books', JSON.stringify(books))
  }

  // Update count and total
  useEffect(() => {
    let total = 0
    let count = 0

    books.forEach(book => {
      total += book.price * book.count
      count += book.count
    })

    setCount(count)
    setTotal(total)
    if (firstLoadContent.current) saveCart()
  }, [books])
  

  // Get saved books from localStorage
  useEffect(() => {
    setLoading(true)
    firstLoadContent.current = true
    const savedBooks = localStorage.getItem('cart-books')
    if (savedBooks) setBooks(JSON.parse(savedBooks))
    setLoading(false)
  }, [])


  const defaultContext: ICartContext = {
    books,
    total,
    count,
    loading,

    addBook,
    removeBook,
    updateBook,
    clearCart
  }

  return (
    <CartContext.Provider value={defaultContext}>
      {children}
    </CartContext.Provider>
  )
}