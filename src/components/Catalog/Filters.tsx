import { FC, useEffect, useState } from 'react'
import { Input, Row, Select } from 'antd'
import { ICategory, IFilters } from '@/types'
import { bookService } from '@/services/bookService'

interface FiltersProps {
  filters: IFilters
  onChange: (name: keyof IFilters, value: string | number | null) => void
  onClear: () => void
}

export const Filters: FC<FiltersProps> = ({ filters, onChange, onClear }) => {

  const [cats, setCats] = useState<ICategory[]>([])

  const fetchCats = () => {
    bookService.getCategories()
      .then(resp => setCats(resp.data))
      .catch(e => console.log(e))
  }

  useEffect(() => {
    fetchCats()
  }, [])

  return (
    <div className='filters'>

      <Row className='filters__row'>
        
        <Select 
          className='filters__select'
          placeholder='Сортировать по цене'
          allowClear
          onClear={() => onChange('sortPrice', null)}
          onSelect={(v: string) => onChange('sortPrice', v)} 
          value={filters.sortPrice}
        >
          <Select.Option value='ASC'>По возрастанию цены</Select.Option>
          <Select.Option value='DESC'>По убыванию цены</Select.Option>
        </Select>

        <Select 
          className='filters__select'
          placeholder='Категория'
          allowClear
          onClear={() => onChange('categoryId', null)}
          onSelect={(v: number) => onChange('categoryId', v)} 
          value={filters.categoryId}
        >
          {cats.map(cat => (
            <Select.Option key={cat.id} value={cat.id}>
              {cat.name}
            </Select.Option>
          ))}
        </Select>

        {!!Object.keys(filters).length && (
          <span className='filters__clear' onClick={onClear}>Очистить фильтры</span>
        )}
        
      </Row>

      <Input.Search 
        className='filters__input'
        placeholder='Введите название книги'
        value={filters.search}
        allowClear 
        onChange={e => onChange('search', e.target.value)}
      />

    </div>
  )
}