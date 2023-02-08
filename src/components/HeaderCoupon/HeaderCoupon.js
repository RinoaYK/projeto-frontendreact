import React, { useContext } from 'react'
// import context
import { DiscountContext } from '../../contexts/DiscountContext'
// import styled components
import {
  Coupon,
  ContourCoupon,
  Conway,
  Arrow,
  SlPresentDiv,
  Desconto,
  Timer
} from './HeaderCouponStyle'
//import icons
import { SlPresent } from 'react-icons/sl'
import { MdPlayArrow } from 'react-icons/md'

const HeaderCoupon = () => {
  const { hours, minutes, seconds, randomNumber } = useContext(DiscountContext)

  return (
    <ContourCoupon>
      <p>Utilize o cupon:</p>
      <Coupon>
        <div>
          <Conway>
            <p>conway</p>
          </Conway>
        </div>
        <div>
          <Arrow>
            <MdPlayArrow />
          </Arrow>
          <SlPresentDiv>
            <SlPresent />
          </SlPresentDiv>
          <Desconto>{randomNumber}% OFF!!</Desconto>
        </div>
      </Coupon>
      <Timer>
        <p>
          {hours} H {minutes} M {seconds} S
        </p>
      </Timer>
    </ContourCoupon>
  )
}

export default HeaderCoupon
