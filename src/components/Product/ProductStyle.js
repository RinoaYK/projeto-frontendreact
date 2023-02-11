import styled from 'styled-components'

export const PEachItemBg = styled.div`
  position: relative;
  background-color: white;
  border-radius: 1em;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
  :hover {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
      rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  }
  height: 25em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-top: 1.5em;
  padding-bottom: 1em;
  min-width: 15em;
`
export const PEachItemBgImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`
export const PImageAlign = styled.div`
  cursor: pointer;
  img {
    max-height: 160px;
    transition: transform 300ms;
    :hover {
      transform: scale(1.1);
    }
  }
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
export const DivLine = styled.div`
  display: flex;
  width: 100%;
  justify-content: start;
  flex-direction: column;
  padding-right: 1em;
  padding-left: 1em;
`
export const PDescription = styled.div`
  border-top: 1px solid #f7e3d8;
  font-size: 0.875rem;
  line-height: 1.25rem;
  text-transform: capitalize;
  color: rgb(107 114 128);
  padding-top: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    color: #f47e20;
  }
`
export const PIconEyesTamanho = styled.div`
  border-radius: 0.5em;
  font-size: 1.5rem;
  line-height: 2rem;
  height: 3rem;
  width: 3rem;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  position: absolute;
  top: 0.5em;
  right: 1em;
  color: #f47e20;
  border: 1px solid #f47e20;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  :hover {
    cursor: pointer;
    color: white;
    background-color: #f47e20;
    border: none;
  }
`
export const PIconEyesTamanhoHover = styled.div``
export const PTitulo = styled.div`
  h2 {
    font-weight: 800;
    font-size: 1.2rem;
    line-height: 1.4rem;
    margin-bottom: 0.5rem;
    margin-top: 0.7rem;
    text-transform: capitalize;
    :hover {
      color: #f47e20;
      text-decoration: underline;
      text-underline-position: under;
      cursor: pointer;
    }
  }
`
export const PPrice = styled.div`
  font-weight: 500;
`
export const BsCartPlusStyle = styled.div`
  font-size: 1.4rem;
`
export const Modal = styled.div``
export const ProductModal = styled.div`
  width: 100%;
  max-width: 60rem;
  display: flex;
  align-items: center;
  justify-content: center;
  max-height: 100em;
  padding-left: 3em;
  padding-right: 3em;
  @media (max-width: 1024px) {
    margin-left: 2em;
    margin-right: 2em;
    height: 50em;
  }
  @media (max-width: 768px) {
    margin-left: 1em;
    margin-right: 1em;
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
export const CimaBaixo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
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
export const Stars = styled.div`
  align-self: flex-end;
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
