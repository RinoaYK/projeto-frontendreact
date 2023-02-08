import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
// import icons
import { BsCartPlus } from 'react-icons/bs'
import { RxEyeClosed, RxEyeOpen } from 'react-icons/rx'
// import context
import { CartContext } from '../../contexts/CartContext'
// import styled components
import {
  PEachItemBg,
  PEachItemBgImg,
  PImageAlign,  
  PIconPlus,
  PDescription,
  PTitulo,
  PPrice,
  PIconEyesTamanho,
  PIconEyesTamanhoHover,
  DivLine,
  BsCartPlusStyle
} from './ProductStyle'

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext)
  const { image, id, category, title, price, marca } = product


  
  //hover icone olho
  const eyeClosed = <RxEyeClosed />
  const eyeOpen = <RxEyeOpen />

  const [iconEye, setIconIconEye] = useState(eyeClosed)
  const handleIconEyeEnter = () => {
    setIconIconEye(eyeOpen)
  }
  const handleIconEyeLeave = () => {
    setIconIconEye(eyeClosed)
  }

  //hover imagem
  const PImg = ''
  const PImgHover = (
    <Link to={`/product/${id}`}>
      <PIconEyesTamanho
        onMouseEnter={handleIconEyeEnter}
        onMouseLeave={handleIconEyeLeave}
      >
        {iconEye}
      </PIconEyesTamanho>
    </Link>
  )

  const [mouseOver, setMouseOver] = useState(false)
  const handlePImgEnter = () => {
    setMouseOver(true)
  }
  const handlePImgLeave = () => {
    setMouseOver(false)
  }

  return (
    <PEachItemBg >
      <PEachItemBgImg    onMouseEnter={handlePImgEnter}
    onMouseLeave={handlePImgLeave}
      >
        {/* image */}
        <PImageAlign
      
        >
          <PIconEyesTamanhoHover>
            {mouseOver ? PImgHover : PImg}{' '}
          </PIconEyesTamanhoHover>
          
          <img src={image} alt={title} />
        </PImageAlign>
      </PEachItemBgImg>

      {/* category & title & price*/}
      <DivLine>
        <PDescription>{category}<p>- {marca} -</p></PDescription>
        <Link to={`/product/${id}`}>
          <PTitulo>
            <h2>{title}</h2>
          </PTitulo>
        </Link>
        <PPrice>R$ {price}</PPrice>
      </DivLine>

      <button onClick={() => addToCart(product, id)}>
        <PIconPlus>
          <BsCartPlusStyle>
            <BsCartPlus />
          </BsCartPlusStyle>
          <p>Adicionar ao Carrinho</p>
        </PIconPlus>
      </button>
    </PEachItemBg>
  )
}

export default Product
