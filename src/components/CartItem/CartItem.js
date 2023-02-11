import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
// import icons
import { IoMdClose, IoMdRemove, IoMdAdd } from 'react-icons/io'
// import context
import { CartContext } from '../../contexts/CartContext'
// import styled components
import {
  Card,
  CardItems,
  ImgItem,
  InfosItems,
  ItemsCol1,
  ItemTitle,
  XRemove,
  XRemoveIcon,
  ItemsCol2,
  QStyle,
  MinusIcon,
  AmountCartStyle,
  PlusIcon,
  ItemPrice,
  FinalPrice
} from './CartItemStyle'

const CartItem = ({ item }) => {
  const { removeFromCart, increaseAmount, decreaseAmount } =
    useContext(CartContext)
  const { id, title, price, amount } = item

  return (
    <Card>
      <CardItems>
        {/* image */}
        <Link to={`/product/${id}`}>
          <ImgItem>
            <img
              src={`https://raw.githubusercontent.com/RinoaYK/projeto-frontendreact/main/src/img/items/img${id}.png`}
              alt={title}
            />{' '}
          </ImgItem>
        </Link>

        <InfosItems>
          {/* title & remove icon */}
          <ItemsCol1>
            {/* title */}
            <Link to={`/product/${id}`}>
              <ItemTitle>{title}</ItemTitle>
            </Link>
            {/* remove icon */}
            <XRemove onClick={() => removeFromCart(id)}>
              <XRemoveIcon>
                <IoMdClose />
              </XRemoveIcon>
            </XRemove>
          </ItemsCol1>

          <ItemsCol2>
            {/* qt */}
            <QStyle>
              {/* Menos Icon */}
              <MinusIcon onClick={() => decreaseAmount(id)}>
                <IoMdRemove />
              </MinusIcon>
              {/* amount */}
              <AmountCartStyle>{amount}</AmountCartStyle>
              {/* plus icon */}
              <PlusIcon onClick={() => increaseAmount(id)}>
                <IoMdAdd />
              </PlusIcon>
            </QStyle>
            {/* item price */}
            <ItemPrice>R$ {price}</ItemPrice>
            {/* final price */}
            <FinalPrice>{`R$ ${parseFloat(price * amount).toFixed(
              2
            )}`}</FinalPrice>
          </ItemsCol2>
        </InfosItems>
      </CardItems>
    </Card>
  )
}

export default CartItem
