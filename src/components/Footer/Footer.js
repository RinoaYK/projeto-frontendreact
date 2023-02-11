import React, { useState } from 'react'
//import styled components
import {
  FooterStyle,
  Copyright,
  RedesSociais,
  Linkedin,
  GitHub,
  Inta,
  YouTube,
  DeviantArt
} from './FooterStyle'

//import icons
import { AiFillLinkedin } from 'react-icons/ai'
import { AiOutlineLinkedin } from 'react-icons/ai'

import { VscGithubInverted } from 'react-icons/vsc'
import { TbBrandGithub } from 'react-icons/tb'

import { RiInstagramFill } from 'react-icons/ri'
import { RiInstagramLine } from 'react-icons/ri'

import { RiYoutubeFill } from 'react-icons/ri'
import { RiYoutubeLine } from 'react-icons/ri'

import { IoLogoDeviantart } from 'react-icons/io5'
import { TbBrandDeviantart } from 'react-icons/tb'

const Footer = () => {
  //Linkedin
  const linkedin = <AiFillLinkedin />
  const linkedinHover = <AiOutlineLinkedin />
  const [iconLinkedin, setIconLinkedin] = useState(linkedin)
  const handleLinkedinEnter = () => {
    setIconLinkedin(linkedinHover)
  }
  const handleLinkedinLeave = () => {
    setIconLinkedin(linkedin)
  }
  //GitHub
  const gitHub = <VscGithubInverted />
  const gitHubHover = <TbBrandGithub />
  const [iconGitHub, setIconGitHub] = useState(gitHub)
  const handleGitHubEnter = () => {
    setIconGitHub(gitHubHover)
  }
  const handleGitHubLeave = () => {
    setIconGitHub(gitHub)
  }
  //Inta
  const inta = <RiInstagramFill />
  const intaHover = <RiInstagramLine />
  const [iconInta, setIconInta] = useState(inta)
  const handleIntaEnter = () => {
    setIconInta(intaHover)
  }
  const handleIntaLeave = () => {
    setIconInta(inta)
  }
  //Youtube
  const youtube = <RiYoutubeFill />
  const youtubeHover = <RiYoutubeLine />
  const [iconYoutube, setIconYoutube] = useState(youtube)
  const handleYoutubeEnter = () => {
    setIconYoutube(youtubeHover)
  }
  const handleYoutubeLeave = () => {
    setIconYoutube(youtube)
  }
  //DeviantArt
  const deviantArt = <IoLogoDeviantart />
  const deviantArtHover = <TbBrandDeviantart />
  const [iconDeviantArt, setIconDeviantArt] = useState(deviantArt)
  const handleDeviantArtEnter = () => {
    setIconDeviantArt(deviantArtHover)
  }
  const handleDeviantArtLeave = () => {
    setIconDeviantArt(deviantArt)
  }

  return (
    <FooterStyle className=''>
      <Copyright>
        <p>Copyright &copy; Lidia Yamamura - LabEcommerce 2023. </p>
        <p>Todos os direitos reservados.</p>
      </Copyright>
      <RedesSociais>
        <Linkedin
          href='https://www.linkedin.com/in/lidia-yamamura-88b606119/'
          target='_blank'
          onMouseEnter={handleLinkedinEnter}
          onMouseLeave={handleLinkedinLeave}
        >
          {iconLinkedin}
        </Linkedin>

        <GitHub
          href='https://github.com/RinoaYK'
          target='_blank'
          onMouseEnter={handleGitHubEnter}
          onMouseLeave={handleGitHubLeave}
        >
          <div>{iconGitHub}</div>
        </GitHub>

        <Inta
          href='https://www.instagram.com/rinoayk/'
          target='_blank'
          onMouseEnter={handleIntaEnter}
          onMouseLeave={handleIntaLeave}
        >
          <div>{iconInta}</div>
        </Inta>

        <YouTube
          href='https://youtu.be/bn5Eq5p3-5g'
          target='_blank'
          onMouseEnter={handleYoutubeEnter}
          onMouseLeave={handleYoutubeLeave}
        >
          <div>{iconYoutube}</div>
        </YouTube>

        <DeviantArt
          href='https://www.deviantart.com/rinoayk'
          target='_blank'
          onMouseEnter={handleDeviantArtEnter}
          onMouseLeave={handleDeviantArtLeave}
        >
          <div>{iconDeviantArt}</div>
        </DeviantArt>
      </RedesSociais>
    </FooterStyle>
  )
}

export default Footer
