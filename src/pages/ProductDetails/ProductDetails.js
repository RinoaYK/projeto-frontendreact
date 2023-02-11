import React, { useContext } from 'react'
import { useParams, Link } from 'react-router-dom'
//import context
import { CartContext } from '../../contexts/CartContext'
import { ProductContext } from '../../contexts/ProductContext'
import { HeartContext } from '../../contexts/HeartContext'
//import icon
import { IoArrowBack } from 'react-icons/io5'
import { BsCartPlus } from 'react-icons/bs'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
//import styled components
import {
  PDetails,
  ProductNotFind,
  ItemDetailsStyled,
  ItemContainer,
  ImageWrapper,
  ArrowBack,
  Cima,
  Baixo,
  PTitulo,
  LadoEsq,
  LadoDir,
  Stars,
  PDescription,
  PPriceModal,
  ComprarFav,
  PIconPlus,
  Heart,
  BsCartPlusStyle
} from './ProductDetailsStyle'
//import background
import background from '../../img/backgroundProduct.png'
//import components
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

const ProductDetails = () => {
  const { id } = useParams()
  const { handleIconHeart, heartState } = useContext(HeartContext)
  const { products } = useContext(ProductContext)
  const { addToCart } = useContext(CartContext)

  const product = products.find(item => {
    return item.id === parseInt(id)
  })
  const {
    title,
    price,
    description,
    marca,
    category,
    rating,
    numReviews,
    estoque
  } = product

  //if product in not found
  if (!product) {
    return <ProductNotFind>Loading...</ProductNotFind>
  }

  return (
    <PDetails>
      <Header />

      <ItemDetailsStyled background={background}>
        <div>
          <Link to={'/'}>
            <ArrowBack>
              <IoArrowBack />
              <p>Voltar</p>
            </ArrowBack>
          </Link>
        </div>

        <ItemContainer>
          {/* image & text wrapper */}
          <ImageWrapper>
            <Baixo>
              <LadoEsq>
                {/* image */}
                <img
                  src={`https://raw.githubusercontent.com/RinoaYK/projeto-frontendreact/main/src/img/items/img${id}.png`}
                  alt={title}
                />
              </LadoEsq>
              {/* category & title & price*/}
              <LadoDir>
                <Cima>
                  <Link to={`/product/${id}`}>
                    <PTitulo>
                      <h2>{title}</h2>
                    </PTitulo>
                  </Link>
                </Cima>

                <Stars className='rating rating-md rating-half'>
                  <input
                    type='radio'
                    name='rating-10'
                    className='rating-hidden'
                    value='0'
                    checked={rating >= 0}
                    readOnly
                  />

                  <input
                    type='radio'
                    name='rating-10'
                    className='bg-orange-300 mask mask-star-2 mask-half-1'
                    value='0.5'
                    checked={rating >= 0.5}
                    readOnly
                  />

                  <input
                    type='radio'
                    name='rating-10'
                    className='bg-orange-300 mask mask-star-2 mask-half-2'
                    value='1'
                    checked={rating >= 1}
                    readOnly
                  />

                  <input
                    type='radio'
                    name='rating-10'
                    className='bg-orange-300 mask mask-star-2 mask-half-1'
                    value='1.5'
                    checked={rating >= 1.5}
                    readOnly
                  />

                  <input
                    type='radio'
                    name='rating-10'
                    className='bg-orange-300 mask mask-star-2 mask-half-2'
                    value='2'
                    checked={rating >= 2}
                    readOnly
                  />

                  <input
                    type='radio'
                    name='rating-10'
                    className='bg-orange-300 mask mask-star-2 mask-half-1'
                    value='2.5'
                    checked={rating >= 2.5}
                    readOnly
                  />

                  <input
                    type='radio'
                    name='rating-10'
                    className='bg-orange-300 mask mask-star-2 mask-half-2'
                    value='3'
                    checked={rating >= 3}
                    readOnly
                  />

                  <input
                    type='radio'
                    name='rating-10'
                    className='bg-orange-300 mask mask-star-2 mask-half-1'
                    value='3.5'
                    checked={rating >= 3.5}
                    readOnly
                  />

                  <input
                    type='radio'
                    name='rating-10'
                    className='bg-orange-300 mask mask-star-2 mask-half-2'
                    value='4'
                    checked={rating >= 4}
                    readOnly
                  />

                  <input
                    type='radio'
                    name='rating-10'
                    className='bg-orange-300 mask mask-star-2 mask-half-1'
                    value='4.5'
                    checked={rating >= 4.5}
                    readOnly
                  />

                  <input
                    type='radio'
                    name='rating-10'
                    className='bg-orange-300 mask mask-star-2 mask-half-2'
                    value='5'
                    checked={rating === 5}
                    readOnly
                  />
                </Stars>

                <PDescription>
                  <div>
                    <div>
                      {' '}
                      Marca: <p> {marca} </p>
                    </div>
                    <div>
                      {' '}
                      Categoria: <p>{category}</p>{' '}
                    </div>
                  </div>

                  <div>
                    <div>
                      {' '}
                      Reviews: <p>{numReviews}</p>{' '}
                    </div>
                    <div>
                      {' '}
                      Estoque: <p>{estoque}</p>{' '}
                    </div>
                  </div>
                </PDescription>
                <div>
                  Descrição:
                  <p>{description}</p>
                </div>

                <PPriceModal>R$ {price}</PPriceModal>

                <div>
                  <ComprarFav>
                    <button onClick={() => addToCart(product, id)}>
                      <PIconPlus>
                        <BsCartPlusStyle>
                          <BsCartPlus />
                        </BsCartPlusStyle>
                        <p>Adicionar ao Carrinho</p>
                      </PIconPlus>
                    </button>

                    <Heart onClick={() => handleIconHeart(id)}>
                      {heartState[id] === 'full' ? (
                        <AiFillHeart />
                      ) : (
                        <AiOutlineHeart />
                      )}
                    </Heart>
                  </ComprarFav>
                </div>
              </LadoDir>
            </Baixo>
          </ImageWrapper>
        </ItemContainer>
      </ItemDetailsStyled>
      <Footer />
    </PDetails>
  )
}

export default ProductDetails
