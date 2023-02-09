import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// import contexts
import { SidebarContext } from '../../contexts/SidebarContext'
import { CartContext } from '../../contexts/CartContext'
import { ProductContext } from '../../contexts/ProductContext'
import { SearchContext } from '../../contexts/SearchContext'
// import icons
import { IoCartOutline, IoCartSharp } from 'react-icons/io5'
// import image
import Logo from '../../img/labenu.png'
// import styled components
import {
  HeaderLayout,
  HeaderIcon,
  HeaderCart,
  LabEcommerce,
  LabEcommerceGrid,
  IconCartStyle,
  SearchCategoryStyle,
  SearchCategoryStyle1024
} from './HeaderStyle'

const Header = () => {
  const [isActive, setIsActive] = useState(false)
  const { isOpen, setIsOpen } = useContext(SidebarContext)
  const { itemAmount } = useContext(CartContext)
  const { setTypeFilter, resetFilterType, setMarcaFilter } =
    useContext(SearchContext)
  const { products } = useContext(ProductContext)

  const categories = [...new Set(products.map(product => product.category))]
  categories.sort()

  const marcas = [...new Set(products.map(product => product.marca))]
  marcas.sort()

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 30 ? setIsActive(true) : setIsActive(false)
    })
  })

  const cartIcon = () => {
    if (itemAmount === 0) {
      return (
        <IconCartStyle>
          <IoCartOutline />
        </IconCartStyle>
      )
    } else {
      return (
        <IconCartStyle>
          <IoCartSharp />
        </IconCartStyle>
      )
    }
  }

  return (
    <HeaderLayout isActive={isActive}>
      <div>
        {/* logo */}
        <LabEcommerceGrid>
          <Link to={'/'}>
            <LabEcommerce>
              <img src={Logo} alt='Labenu logo' />
              <h1>LabEcommerce</h1>
            </LabEcommerce>
          </Link>
        </LabEcommerceGrid>

        {/* categorias */}
        <SearchCategoryStyle>
          <button onClick={resetFilterType}>Todos</button>
          {categories.map(category => {
            return (
              <button key={category} onClick={() => setTypeFilter(category)}>
                {`|  \u00A0 ${category}`}
              </button>
            )
          })}

          <select onChange={e => setMarcaFilter(e.target.value)}>
            <option value=''> {`|  \u00A0 Marcas `}</option>
            {marcas.map(marca => (
              <option key={marca} value={marca}>
                {marca}
              </option>
            ))}
          </select>
        </SearchCategoryStyle>

        {/* search tela 1024 menores */}
        <SearchCategoryStyle1024>
          <select onChange={e => setTypeFilter(e.target.value)}>
            <option value=''>Categorias</option>
            {categories.map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>

          <select onChange={e => setMarcaFilter(e.target.value)}>
            <option value=''> {`|  \u00A0 Marcas `}</option>
            {marcas.map(marca => (
              <option key={marca} value={marca}>
                {marca}
              </option>
            ))}
          </select>
        </SearchCategoryStyle1024>

        {/* cart */}
        <HeaderCart onClick={() => setIsOpen(!isOpen)}>
          {cartIcon()}
          <HeaderIcon>{itemAmount}</HeaderIcon>
        </HeaderCart>
      </div>
    </HeaderLayout>
  )
}

export default Header
