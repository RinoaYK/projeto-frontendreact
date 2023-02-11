import React, { useContext, useState } from 'react'
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

// alert
import Swal from 'sweetalert2'
// alert do Swal
const Swals = require('sweetalert2')

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext)
  const { cart, setCart, clearCart, total, itemAmount, checkoutAlert } =
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

  //verificação do cupom
  const [cupom, setCupom] = useState('') 
  
  const handleApplyCoupon = () => {   
    const todayCupom = new Date().toDateString()    
    localStorage.setItem('todayCupom', todayCupom);    
    
    if (cupom !== 'conway') {
      return Swals.fire({
        icon: 'error',
        title: 'Cupom inválido!!',        
      })      
    }if (localStorage.getItem('couponUsed') === 'true' && localStorage.getItem('randomNumberDate') === todayCupom) {       
      return Swal.fire({        
        title: 'Acho que esse cupom já foi utilizado hoje!',
        icon: 'question',}
      )      
    }else {
      Swal.fire({        
        icon: 'success',
        title: 'Cupom adicionado com sucesso!',
        showConfirmButton: false,
        timer: 3000,
      })      
      localStorage.setItem('couponUsed', 'true');       
      const discount = Number(localStorage.getItem('randomNumber'));
      const cartFromStorage = JSON.parse(localStorage.getItem('cart'));
      const updatedCart = cartFromStorage.map(item => {
        item.price = (item.price - (item.price * discount) / 100).toFixed(2);       
        return item;
      })
      
      setCart(updatedCart);
      setCupom("");
    }
  }
  
  return (
    <SidebarStyled isOpen={isOpen}>
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

        <CupomInput>
          <ConfirmCupom>
            <SlPresent />
            <input
              value={cupom}
              onChange={e => setCupom(e.target.value)}
              type='text'
              placeholder='Insira seu cupom'
            />
          </ConfirmCupom>

          <button onClick={handleApplyCoupon}>aplicar cupom</button>
        </CupomInput>

        <Link to={'/'}>
          <Checkout onClick={checkout}>Finalizar a compra</Checkout>
        </Link>
      </BottomSidebar>
    </SidebarStyled>
  )
}

export default Sidebar
