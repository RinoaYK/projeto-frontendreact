import React, { createContext, useState, useEffect } from 'react'

export const SearchContext = createContext()

const SearchProvider = ({ children }) => {
  const [typeFilter, setTypeFilter] = useState(
    localStorage.getItem('typeFilter') || ''
  )
  const [marcaFilter, setMarcaFilter] = useState(
    localStorage.getItem('marcaFilter') || ''
  )
  const [nameSearch, setNameSearch] = useState(
    localStorage.getItem('nameSearch') || ''
  )
  const [minPrice, setMinPrice] = useState(
    localStorage.getItem('minPrice') || ''
  )
  const [maxPrice, setMaxPrice] = useState(
    localStorage.getItem('maxPrice') || ''
  )
  const [order, setOrder] = useState(localStorage.getItem('order') || '')

  useEffect(() => {
    localStorage.setItem('typeFilter', typeFilter)
    localStorage.setItem('marcaFilter', marcaFilter)
    localStorage.setItem('nameSearch', nameSearch)
    localStorage.setItem('minPrice', minPrice)
    localStorage.setItem('maxPrice', maxPrice)
    localStorage.setItem('order', order)
  }, [typeFilter, marcaFilter, nameSearch, minPrice, maxPrice, order])

  //busca pelo type:
  const filterByType = products => {
    return typeFilter === '' || products.category.includes(typeFilter)
  }

  // busca por marca:
  const filterByMarca = products => {
    return marcaFilter === '' || products.marca === marcaFilter
  }

  // Busca pelo nome:
  const nameSearchIncludes = product => {
    return product.title.toLowerCase().includes(nameSearch.toLowerCase())
  }

  //  busca pelo preço:
  const filterByPrice = product => {
    if (minPrice !== '' && maxPrice !== '') {
      return product.price >= minPrice && product.price <= maxPrice
    }
    return true
  }

  // ordem:
  function sortItens (order) {
    return (a, b) => {
      if (order === 'crescente') {
        return a.price - b.price
      }
      if (order === 'decrescente') {
        return b.price - a.price
      }
    }
  }

  // função reset
  const resetFilters = () => {
    setNameSearch('')
    setMinPrice('')
    setMaxPrice('')
    setOrder('')
    localStorage.removeItem('nameSearch')
    localStorage.removeItem('minPrice')
    localStorage.removeItem('maxPrice')
    localStorage.removeItem('order')
  }

  const resetFilterType = () => {
    setTypeFilter('')
    setMarcaFilter('')
    localStorage.removeItem('typeFilter')
    localStorage.removeItem('marcaFilter')
  }

  const resetName = () => {
    setNameSearch('')
    localStorage.removeItem('nameSearch')
  }
  //setando valores
  const handleMinPrice = event => {
    setMinPrice(event.target.value)
  }
  const handleMaxPrice = event => {
    setMaxPrice(event.target.value)
  }
  //valores  min e max dos inputs
  const minPriceValorMin = 1
  const maxPriceValorMin = 99

  const minPriceValorMax = 2
  const maxPriceValorMax = 100

  return (
    <SearchContext.Provider
      value={{
        typeFilter,
        setTypeFilter,
        filterByType,
        filterByMarca,
        setMarcaFilter,
        nameSearch,
        setNameSearch,
        nameSearchIncludes,
        minPrice,
        setMinPrice,
        maxPrice,
        setMaxPrice,
        filterByPrice,
        order,
        setOrder,
        sortItens,
        resetFilters,
        resetFilterType,
        resetName,
        handleMinPrice,
        handleMaxPrice,
        minPriceValorMin,
        maxPriceValorMin,
        minPriceValorMax,
        maxPriceValorMax
      }}
    >
      {children}
    </SearchContext.Provider>
  )
}

export default SearchProvider
