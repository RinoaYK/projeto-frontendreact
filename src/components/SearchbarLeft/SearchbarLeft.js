import React, { useContext } from 'react'
//import context
import { SearchContext } from '../../contexts/SearchContext'
//import icon
import { FaSearch, FaWindowClose } from 'react-icons/fa'
import { RxReset } from 'react-icons/rx'
// import styled component
import {
  SearchbarContainer,
  SearchbarItems,
  NumberInputContainer,
  NumberInputStyle,
  ResetButtonFilters,
  NameSearchStyle,
  ResetNameButton,
  NameInput,
  SelectInput,
  SliderRg1,
  SliderRg2,
  SliderRgContainer,
  NumberStyle
} from './SearchbarLeftStyle'

const Searchbar = () => {
  const {
    order,
    setOrder,
    nameSearch,
    setNameSearch,
    minPrice,
    maxPrice,
    resetFilters,
    resetName,
    handleMinPrice,
    handleMaxPrice,
    minPriceValorMin,
    maxPriceValorMin,
    minPriceValorMax,
    maxPriceValorMax
  } = useContext(SearchContext)

  return (
    <SearchbarContainer>
      <SearchbarItems>
        <h1>Filtros:</h1>
        <NameSearchStyle>
          <FaSearch />
          <NameInput
            value={nameSearch}
            onChange={e => setNameSearch(e.target.value)}
            type='text'
            placeholder='Digite um nome'
          />
          <ResetNameButton onClick={resetName}>
            <FaWindowClose />
          </ResetNameButton>
        </NameSearchStyle>

        <SelectInput value={order} onChange={e => setOrder(e.target.value)}>
          <option value=''>Preço</option>
          <option value='crescente'>Crescente</option>
          <option value='decrescente'>Decrescente</option>
        </SelectInput>

        {/* min range */}
        <NumberInputContainer>
          <NumberStyle>
            <p>Mínimo : </p>
            <p>Máximo :</p>
          </NumberStyle>
          <NumberStyle>
            <NumberInputStyle
              type='number'
              value={minPrice}
              onChange={handleMinPrice}
              min={minPriceValorMin}
              max={maxPriceValorMin}
              placeholder='R$ mín'
            />
            <NumberInputStyle
              type='number'
              value={maxPrice}
              onChange={handleMaxPrice}
              min={minPriceValorMax}
              max={maxPriceValorMax}
              placeholder='R$ max'
            />
          </NumberStyle>

          <SliderRgContainer>
            <SliderRg1>
              <input
                type='range'
                value={minPrice}
                onChange={handleMinPrice}
                min={minPriceValorMin}
                max={maxPriceValorMin}
                className='range range-warning'
              />
            </SliderRg1>

            {/* max range */}
            <SliderRg2>
              <input
                type='range'
                value={maxPrice}
                onChange={handleMaxPrice}
                min={minPriceValorMax}
                max={maxPriceValorMax}
                className='range range-warning'
              />
            </SliderRg2>
          </SliderRgContainer>
        </NumberInputContainer>

        <ResetButtonFilters onClick={resetFilters}>
          <p>Resetar filtros</p>
          <RxReset />
        </ResetButtonFilters>
      </SearchbarItems>
    </SearchbarContainer>
  )
}

export default Searchbar
