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
  IconCartStyle,
  SearchCategoryStyle
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
        <Link to={'/'}>
          <LabEcommerce>
            <img src={Logo} alt='Labenu logo' />
            <h1>LabEcommerce</h1>
          </LabEcommerce>
        </Link>

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
