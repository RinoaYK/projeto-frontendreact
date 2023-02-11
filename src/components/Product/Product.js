import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
// import icons
import { BsCartPlus } from 'react-icons/bs'
import { RxEyeClosed, RxEyeOpen } from 'react-icons/rx'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
// import context
import { CartContext } from '../../contexts/CartContext'
import { HeartContext } from '../../contexts/HeartContext'
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
  BsCartPlusStyle,
  ProductModal,
  LadoEsq,
  LadoDir,
  CimaBaixo,
  Baixo,
  Cima,
  PPriceModal,
  Stars,
  ComprarFav,
  Heart,
  Modal
} from './ProductStyle'

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext)
  const { id, category, title, price, marca, description, rating } = product

  const { handleIconHeart, heartState } = useContext(HeartContext)
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

  ///hover imagem
  const PImg = ''
  //id  pro modal
  const modalId = `item-modal-${id}`
  const [showModal, setShowModal] = useState(false)
  const handleShowModal = () => {
    setShowModal(true)
    document.getElementById(modalId).click()
  }
  const handleShowModalOFF = () => {
    setShowModal(false)
  }

  const PImgHover = (
    <PIconEyesTamanho
      onClick={handleShowModal}
      onMouseEnter={handleIconEyeEnter}
      onMouseLeave={handleIconEyeLeave}      
    >
      {iconEye}
    </PIconEyesTamanho>
  )
  const [mouseOver, setMouseOver] = useState(false)
  const handlePImgEnter = () => {
    setMouseOver(true)
  }
  const handlePImgLeave = () => {
    setMouseOver(false)
  }
  //checkbox

  return (
    <PEachItemBg>
      {/* Modal */}
      <input
        type='checkbox'
        id={modalId}
        className='modal-toggle'
        checked={showModal}
        readOnly
      />

      <Modal className='modal'>
        <ProductModal className='modal-box'>
          <CimaBaixo>
            <Cima>
              <Link to={`/product/${id}`}>
                <PTitulo>
                  <h2>{title}</h2>
                </PTitulo>
              </Link>
            </Cima>

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
                    {' '}
                    Marca: <p>- {marca} -</p>
                  </div>
                  <div>
                    Categoria:
                    <p>{category}</p>
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

                  <div className='modal-action'>
                    <button
                      type='button'
                      className='btn'
                      onClick={handleShowModalOFF}
                    >
                      Fechar
                    </button>
                  </div>
                </div>
              </LadoDir>
            </Baixo>
          </CimaBaixo>
        </ProductModal>
      </Modal>
      {/* ------------------------------------------------------- */}
      {/* Cards */}
      <PEachItemBgImg
        onMouseEnter={handlePImgEnter}
        onMouseLeave={handlePImgLeave}
      >
        {/* image */}

        <PImageAlign>
          <PIconEyesTamanhoHover>
            {mouseOver ? PImgHover : PImg}{' '}
          </PIconEyesTamanhoHover>
          <img
            src={`https://raw.githubusercontent.com/RinoaYK/projeto-frontendreact/main/src/img/items/img${id}.png`}
            alt={title}
          />
        </PImageAlign>
      </PEachItemBgImg>
      

      {/* category & title & price*/}
      <DivLine>
        <PDescription>
          {category}
          <p>- {marca} -</p>
        </PDescription>
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
