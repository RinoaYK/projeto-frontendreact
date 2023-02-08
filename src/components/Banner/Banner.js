import React from 'react'
import { Link } from 'react-router-dom'
// import images
// import WomanImg from '../../img/woman_hero.png';
import Banner1 from '../../img/banner_01.png'
import Banner2 from '../../img/banner_02.png'
import Banner3 from '../../img/banner_03.png'

// import icons
import { BsFillCaretLeftFill } from 'react-icons/bs'
import { BsFillCaretRightFill } from 'react-icons/bs'
//import Styled Components
import {
  BannerStyled,
  BannerIcons,
  BannerImage,
  BannerImageStyled
} from './BannerStyle'

const Banner = () => {
  return (
    <BannerStyled>
      <BannerImage id='slide1'>
        <img src={Banner1} alt='' />
        <BannerImageStyled>
          <a href='#slide3'><BannerIcons><BsFillCaretLeftFill/></BannerIcons>            
          </a>
          <a href='#slide2'>
          <BannerIcons>< BsFillCaretRightFill/></BannerIcons>
          </a>
        </BannerImageStyled>
      </BannerImage>

      <BannerImage id='slide2'>
        <img src={Banner2} alt='' />
        <BannerImageStyled>
          <a href='#slide1'>
          <BannerIcons><BsFillCaretLeftFill/></BannerIcons>
          </a>
          <a href='#slide3'>
          <BannerIcons>< BsFillCaretRightFill/></BannerIcons>
          </a>
        </BannerImageStyled>
      </BannerImage>
      <BannerImage id='slide3'>
        <img src={Banner3} alt='' />
        <BannerImageStyled>
          <a href='#slide2'>
          <BannerIcons><BsFillCaretLeftFill/></BannerIcons>
          </a>
          <a href='#slide1'>
          <BannerIcons>< BsFillCaretRightFill/></BannerIcons>
          </a>
        </BannerImageStyled>
      </BannerImage>







      {/* <BannerImage id='slide4'>
        <img src={Banner1} alt='' />
        <BannerImageStyled>
          <a href='#slide3'>
          <BannerIcons><BsFillCaretLeftFill/></BannerIcons>
          </a>
          <a href='#slide1'>
          <BannerIcons>< BsFillCaretRightFill/></BannerIcons>
          </a>
        </BannerImageStyled>
      </BannerImage> */}

      
    </BannerStyled>
  )
}
export default Banner
