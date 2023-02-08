import React, { createContext, useState, useEffect } from 'react'
// alert
import Swal from 'sweetalert2'

export const CartContext = createContext()
// alert do Swal
const Swals = require('sweetalert2')

const checkoutAlert = () => {
  Swals.mixin({
    toast: true,
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: toast => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
    .fire({
      icon: 'success',
      title: 'Finalizando a compra...'
    })
    .then(() => {
      Swals.fire({
        title: 'Compra finalizada com sucesso!',
        //   text: "LabEcommerce agradece!",
        icon: 'success',
        html: '<b>LabEcommerce</b>' + ' agradece!',
        confirmButtonColor: '#F47E20',

        showCloseButton: true,
        focusConfirm: false,
        inputAutoFocus: false,
        returnFocus: false,
        confirmButtonText:
          '<i class="fa fa-thumbs-up">Compre conosco novamente!</i>'
      })
    })
}

const CartProvider = ({ children }) => {
  // localStorage.removeItem("newCart");
  //pega os valores no local storage se existirem

  // cart state
  const [cart, setCart] = useState(
    localStorage.getItem('cart') !== null
      ? JSON.parse(localStorage.getItem('cart'))
      : []
  )
  //item amount state
  const [itemAmount, setItemAmount] = useState(
    localStorage.getItem('itemAmount') !== null
      ? JSON.parse(localStorage.getItem('itemAmount'))
      : 0
  )
  // total price state
  const [total, setTotal] = useState(
    localStorage.getItem('total') !== null
      ? JSON.parse(localStorage.getItem('total'))
      : 0
  )

  //seta com os valores salvos no local Storage
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
    localStorage.setItem('itemAmount', JSON.stringify(itemAmount))
    localStorage.setItem('total', JSON.stringify(total))
  }, [cart, itemAmount, total])

  useEffect(() => {
    const total = cart.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.price * currentItem.amount
    }, 0)
    setTotal(total)
  }, [cart])

  //update item amount
  useEffect(() => {
    if (cart) {
      const amount = cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.amount
      }, 0)
      setItemAmount(amount)
    }
  }, [cart])

  //add to cart
  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 }
    console.log(`${product.title} added to the cart`)
    const cartItem = cart.find(item => {
      return item.id === id
    })
    if (cartItem) {
      const newCart = [...cart].map(item => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 }
        } else {
          return item
        }
      })
      setCart(newCart)
    } else {
      setCart([...cart, newItem])
    }
  }

  //remove from cart
  const removeFromCart = id => {
    const newCart = cart.filter(item => {
      return item.id !== id
    })
    setCart(newCart)
  }

  //clear cart
  const clearCart = () => {
    setCart([])
  }

  //increase amount
  const increaseAmount = id => {
    const cartItem = cart.find(item => item.id === id)
    addToCart(cartItem, id)
  }

  //decrease amount
  const decreaseAmount = id => {
    const cartItem = cart.find(item => {
      return item.id === id
    })
    if (cartItem) {
      const newCart = cart.map(item => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount - 1 }
        } else {
          return item
        }
      })
      setCart(newCart)
    }
    if (cartItem.amount < 2) {
      removeFromCart(id)
    }
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        increaseAmount,
        decreaseAmount,
        itemAmount,
        total,
        checkoutAlert
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
