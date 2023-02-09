import React, { useContext, useState } from 'react'
import { ProductContext } from '../../contexts/ProductContext'

const Modal = () => {
  const { products } = useContext(ProductContext)

  products.map(product => {
    const { id, category, title, price, marca } = product;
    return (
      <div key={id}>
        <p>Categoria: {category}</p>
        <p>Título: {title}</p>
        <p>Preço: {price}</p>
        <p>Marca: {marca}</p>
      </div>
    );
  });

  return (
    <>

   

    </>
  )
}

export default Modal
