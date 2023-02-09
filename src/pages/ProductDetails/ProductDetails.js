import React, { useContext } from 'react'
import { useParams, Link } from 'react-router-dom'
//import context
import { CartContext } from '../../contexts/CartContext'
import { ProductContext } from '../../contexts/ProductContext'
//import icon
import { IoArrowBack } from 'react-icons/io5'
import { BsCartPlus } from 'react-icons/bs'
//import styled components
import {
  ProductNotFind,
  ItemDetailsStyled,
  ItemContainer,
  ImageWrapper,
  ImagePD,
  DetailsPD,
  PricePD,
  DetailItemsPD,
  ButtonPD,
  CartPlus,
  ArrowBack
} from './ProductDetailsStyle'

const ProductDetails = () => {
  const { id } = useParams()
  const { products } = useContext(ProductContext)
  const { addToCart } = useContext(CartContext)

  const product = products.find(item => {
    return item.id === parseInt(id)
  })
  const { title, price, description, category, marca } = product

  //if product in not found
  if (!product) {
    return <ProductNotFind>Loading...</ProductNotFind>
  }

  return (
    <ItemDetailsStyled>
      <Link to={'/'}>
        <ArrowBack>
          <IoArrowBack />
        </ArrowBack>
      </Link>
      <ItemContainer>
        {/* image & text wrapper */}
        <ImageWrapper>
          {/* image */}
          <ImagePD>
            <img src={`https://raw.githubusercontent.com/RinoaYK/projeto-frontendreact/main/src/img/items/img${id}.png`} alt={title} />
          </ImagePD>

          {/* text */}
          <DetailsPD>
            <p>{category}</p>
            <h1>{title}</h1>
            <PricePD>R$ {price}</PricePD>
            <DetailItemsPD>
              <p>{description}</p>
              <p>Marca: {marca}</p>
            </DetailItemsPD>
            <ButtonPD onClick={() => addToCart(product, product.id)}>
              <CartPlus>
                <BsCartPlus />
              </CartPlus>
              Adicionar ao carrinho
            </ButtonPD>
          </DetailsPD>
        </ImageWrapper>
      </ItemContainer>
    </ItemDetailsStyled>
  )
}

export default ProductDetails
