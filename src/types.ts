export interface IBook {
  name: string
  authorName: string
  price: number
  coverUrl: string
  categoryId: number
}


export interface ICategory {
  id: number
  name: string
}

export interface IFilters {
  search?: string
  sortPrice?: string
  categoryId?: number
}

export interface ICart {
  books: ICartBook[]
  total: number
  count: number
}

export interface ICartBook extends IBook {
  count: number
}
