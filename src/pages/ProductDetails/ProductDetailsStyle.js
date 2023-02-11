import styled from 'styled-components'

export const PDetails = styled.div`
  width: 100vw;
  height: 100vh;
  @media (max-width: 1024px) {
    height: 100%;
  }
`
export const ProductNotFind = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const ItemDetailsStyled = styled.section`
  background-image: url(${props => props.background});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  width: 100%;
  height: 92%;
  display: flex;
  justify-content: center;
`
export const ItemContainer = styled.div`
  width: 100%;
  background-color: white;
  border-radius: 1em;
  height: 78%;
  margin-top: 8.5em;
  position: relative;
  padding: 2em;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 1em;
  margin-right: 1em;
  @media (min-width: 640px) {
    max-width: 1400px;
  }
  @media (max-width: 1024px) {
    margin-bottom: 2em;
  }
`
export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 5em;
  }
`
export const ArrowBack = styled.div`
  color: white;
  font-size: 3rem;
  line-height: 2rem;
  position: absolute;
  left: 7.5em;
  top: 3em;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  p {
    display: none;
    font-size: 1.5rem;
    font-weight: 500;
  }
  :hover {
    left: 7em;
    color: #f47e20;
    p {
      display: block;
    }
  }
`
export const Cima = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  h2 {
    font-size: 1.5rem;
  }
  @media (max-width: 1024px) {
    justify-content: center;
  }
`
export const Baixo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3em;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
  @media (max-width: 550px) {
    max-width: 27em;
  }
  @media (max-width: 500px) {
    max-width: 18em;
  }
`
export const PTitulo = styled.div`
  h2 {
    font-weight: 800;
    font-size: 1.8rem;
    line-height: 1.4rem;
    margin-bottom: 0.5rem;
    margin-top: 0.7rem;
    text-transform: capitalize;
    @media (max-width: 1024px) {
      margin-bottom: 2rem;
      margin-top: 5rem;
    }
    @media (max-width: 560px) {
      margin-top: 10rem;
    }
    :hover {
      color: #f47e20;
      text-decoration: underline;
      text-underline-position: under;
      cursor: pointer;
    }
  }
`
export const LadoEsq = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1em;
  width: 30em;
  img {
    width: 100%;
    @media (max-width: 1024px) {
      max-width: 60%;
    }
  }
`
export const LadoDir = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  width: 100%;
`
export const Stars = styled.div`
  align-self: flex-end;
`
export const PDescription = styled.div`
  border-top: 1px solid #f7e3d8;
  font-size: 0.875rem;
  line-height: 1.25rem;
  text-transform: capitalize;
  color: rgb(107 114 128);
  padding-top: 0.5rem;
  display: flex;
  width: 100%;
  justify-content: space-between;
  p {
    color: #f47e20;
  }
  div > div {
    display: flex;
    gap: 0.5em;
  }
`
export const PPriceModal = styled.div`
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: x-large;
  height: 3em;
  padding-left: 1em;
  background-color: #f9eee8;
  color: #f47e20;
`
export const ComprarFav = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
`
export const Heart = styled.div`
  font-size: 2rem;
  line-height: 1.75rem;
  color: #f47e20;
  cursor: pointer;
`
export const PIconPlus = styled.div`
  border-radius: 0.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #f47e20;
  height: 3rem;
  border: 1px solid #f47e20;
  width: 14rem;
  font-weight: 600;
  gap: 0.3em;
  :hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    color: white;
    background-color: #f47e20;
  }
`
export const BsCartPlusStyle = styled.div`
  font-size: 1.4rem;
`
