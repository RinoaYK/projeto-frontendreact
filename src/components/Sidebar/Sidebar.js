import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
// import icons
import { IoMdArrowForward } from 'react-icons/io'
import { FiTrash2 } from 'react-icons/fi'
import { SlPresent } from 'react-icons/sl'
//import components
import CartItem from '../CartItem/CartItem'
//import context
import { SidebarContext } from '../../contexts/SidebarContext'
import { CartContext } from '../../contexts/CartContext'
import { SearchContext } from '../../contexts/SearchContext'
//import styled component
import {
  SidebarStyled,
  TopSidebar,
  MidSidebar,
  BottomSidebar,
  CloseArrow,
  TotalClear,
  TrashIcon,
  CupomInput,
  ConfirmCupom,
  Checkout
} from './SidebarStyle'

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext)
  const { cart, clearCart, total, itemAmount, checkoutAlert } =
    useContext(CartContext)
  const { resetFilters, resetFilterType } = useContext(SearchContext)

  //função de checkout
  const checkout = () => {
    handleClose()
    clearCart()
    checkoutAlert()
    resetFilters()
    resetFilterType()
  }

  return (
    <SidebarStyled isOpen={isOpen} >
      <TopSidebar>
        <h1>Meu carrinho ({itemAmount})</h1>
        {/* icon */}
        <CloseArrow onClick={handleClose}>
          <IoMdArrowForward />
        </CloseArrow>
      </TopSidebar>

      <MidSidebar>
        {cart.map(item => {
          return <CartItem item={item} key={item.id} />
        })}
      </MidSidebar>

      <BottomSidebar>
        <TotalClear>
          {/* total */}
          <h1>Total: R$ {parseFloat(total).toFixed(2)}</h1>
          {/* clear cart icon */}
          <TrashIcon onClick={clearCart}>
            <FiTrash2 />
          </TrashIcon>
        </TotalClear>

        {/* <Link
          to={'/'} >
            </Link> */}

        <CupomInput>
          <ConfirmCupom>
            <SlPresent />
            <input type='text' placeholder='Insira seu cupom' />
          </ConfirmCupom>

          <button>confirmar cupom</button>
        </CupomInput>

        <Link to={'/'}>
          <Checkout onClick={checkout}>Finalizar a compra</Checkout>
        </Link>
      </BottomSidebar>
    </SidebarStyled>
  )
}

export default Sidebar
