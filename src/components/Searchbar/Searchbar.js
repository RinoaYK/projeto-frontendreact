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

} from './SearchbarStyle'

const Searchbar = () => {
  const { order,
    setOrder,
    nameSearch,
    setNameSearch,
    minPrice,
    setMinPrice,
    maxPrice,
    setMaxPrice,
    resetFilters,
    resetName } = useContext(SearchContext)

  //valores  min e max dos inputs
  const minPriceValorMin = 1
  const maxPriceValorMin = 50

  const minPriceValorMax = 50
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
        <ResetNameButton onClick={resetName}         
        ><FaWindowClose/></ResetNameButton>
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
          
          <div>
            <SliderRange1            
              type='range'
              value={minPrice}
              onChange={handleMinPrice}
              min={minPriceValorMin}
              max={maxPriceValorMin}
            />
          {/* <Progress   type='range'/> */}

          {/* max range */}
          <SliderRange2           
            type='range'
            value={maxPrice}
            onChange={handleMaxPrice}
            min={minPriceValorMax}
            max={maxPriceValorMax}
          />
          </div>
          
            <NumberInputStyle
              type='number'
              value={maxPrice}
              onChange={handleMaxPrice}
              min={minPriceValorMax}
              max={maxPriceValorMax}
              placeholder='R$ max'
            />
        </NumberInputContainer>


        


        <ResetButtonFilters onClick={resetFilters} >
        <p>Resetar filtros</p>
        <RxReset /></ResetButtonFilters>
      </SearchbarItems>

      

    </SearchbarContainer>
  )
}

export default Searchbar
