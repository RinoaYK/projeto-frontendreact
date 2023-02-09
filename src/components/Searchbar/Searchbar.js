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
  SliderRange1,
  SliderRange2,
  Progress,
  ResetButtonFilters,
  NameSearchStyle,
  ResetNameButton,
  NameInput,
  SelectInput,
  SliderRg1,
  SliderRg2,
  SliderRgContainer
} from './SearchbarStyle'

const Searchbar = () => {
  const {
    order,
    setOrder,
    nameSearch,
    setNameSearch,
    minPrice,
    setMinPrice,
    maxPrice,
    setMaxPrice,
    resetFilters,
    resetName
  } = useContext(SearchContext)

  //valores  min e max dos inputs
  const minPriceValorMin = 1
  const maxPriceValorMin = 99

  const minPriceValorMax = 2
  const maxPriceValorMax = 100

  //setando valores
  const handleMinPrice = event => {
    setMinPrice(event.target.value)
  }
  const handleMaxPrice = event => {
    setMaxPrice(event.target.value)
  }

  return (
    <SearchbarContainer>
      <SearchbarItems>
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
          <NumberInputStyle
            type='number'
            value={minPrice}
            onChange={handleMinPrice}
            min={minPriceValorMin}
            max={maxPriceValorMin}
            placeholder='R$ mín'
          />

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

            {/* <SliderRange1            
              type='range'
              value={minPrice}
              onChange={handleMinPrice}
              min={minPriceValorMin}
              max={maxPriceValorMin}
            /> */}
            {/* <Progress   type='range'/> */}

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
            {/* <SliderRange2           
            type='range'
            value={maxPrice}
            onChange={handleMaxPrice}
            min={minPriceValorMax}
            max={maxPriceValorMax}
          /> */}
          </SliderRgContainer>

          <NumberInputStyle
            type='number'
            value={maxPrice}
            onChange={handleMaxPrice}
            min={minPriceValorMax}
            max={maxPriceValorMax}
            placeholder='R$ max'
          />
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
