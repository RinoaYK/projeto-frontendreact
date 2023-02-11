import styled from 'styled-components'

export const FooterStyle = styled.footer`
  background-color: #323b3f;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 2em;
  padding-right: 2em;
  padding-top: 1em;
  padding-bottom: 0.5em;
  @media (max-width: 1440px) {
    width: 100%;
    max-width: 1440px;
    padding-left: 1em;
    padding-right: 1em;
  }
  @media (max-width: 640px) {
    width: 100%;
    max-width: 640px;
    padding-left: 1em;
    padding-right: 0.5em;
  }
  div > p {
    color: white;
    text-align: center;
    @media (max-width: 1440px) {
      font-size: 0.8em;
      text-align: left;
    }
    @media (max-width: 640px) {
      font-size: smaller;
      text-align: left;
    }
  }
`
export const Copyright = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1em;
  @media (max-width: 1440px) {
    flex-direction: column;
    min-width: 6em;
    gap: 0em;
  }
`
export const RedesSociais = styled.div`
  display: flex;
  gap: 1.5em;
  @media (max-width: 640px) {
    gap: 1em;
  }
  @media (max-width: 460px) {
    gap: 0.5em;
    flex-wrap: wrap;
  }
`
export const Linkedin = styled.div`
  color: white;
  font-size: 3rem;
  line-height: 1rem;
  transition: all 0.1s ease;
  :hover {
    cursor: pointer;
  }
  @media (max-width: 1440px) {
    font-size: 2.6rem;
    line-height: 0rem;
  }
  @media (max-width: 640px) {
    font-size: 2rem;
    line-height: 0rem;
  }
`
export const GitHub = styled.div`
  color: white;
  font-size: 3rem;
  line-height: 1rem;
  transition: all 0.1s ease;
  > div:hover {
    cursor: pointer;
  }
  @media (max-width: 1440px) {
    font-size: 2.6rem;
    line-height: 0rem;
  }
  @media (max-width: 640px) {
    font-size: 2rem;
    line-height: 0rem;
  }
`
export const Inta = styled.div`
  color: white;
  font-size: 3rem;
  line-height: 1rem;
  transition: all 0.1s ease;
  :hover {
    cursor: pointer;
  }
  @media (max-width: 1440px) {
    font-size: 2.6rem;
    line-height: 0rem;
  }
  @media (max-width: 640px) {
    font-size: 2rem;
    line-height: 0rem;
  }
`
export const YouTube = styled.div`
  color: white;
  font-size: 3rem;
  line-height: 1rem;
  transition: all 0.1s ease;
  :hover {
    cursor: pointer;
  }
  @media (max-width: 1440px) {
    font-size: 2.6rem;
    line-height: 0rem;
  }
  @media (max-width: 640px) {
    font-size: 2rem;
    line-height: 0rem;
  }
`
export const DeviantArt = styled.div`
  color: white;
  font-size: 3rem;
  line-height: 1rem;
  transition: all 0.1s ease;
  :hover {
    cursor: pointer;
  }
  @media (max-width: 1440px) {
    font-size: 2.6rem;
    line-height: 0rem;
  }
  @media (max-width: 640px) {
    font-size: 2rem;
    line-height: 0rem;
  }
`
