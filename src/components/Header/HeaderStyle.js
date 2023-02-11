import styled from 'styled-components'

export const HeaderLayout = styled.header`
  ${props =>
    props.isActive
      ? `background-color: white;
      padding-top: 1rem;
    padding-bottom: 1rem;
    top: 0;
       box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);`
      : `background-color: transparent;
      padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    top: 10;`}

  position: fixed;
  width: 100%;
  z-index: 10;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 100ms;
  > div {
    margin-left: auto;
    margin-right: auto;
    display: grid;
    grid-template-columns: 2.1fr 10fr 0.1fr;
    justify-items: center;
    align-items: center;
    height: 100%;
    @media (max-width: 1500px) {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 0.5fr;
      grid-row-gap: 0.5em;
    }
    @media (max-width: 1024px) {
      grid-template-rows: 1fr;
      grid-template-columns: 1fr 2fr 0.1fr;
    }
    @media (max-width: 768px) {
      grid-template-rows: 1fr 0.5fr;
      grid-template-columns: 1fr 1fr;
    }
  }
  div > img {
    width: 50px;
  }
`
//Logo
export const LabEcommerce = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8em;
  gap: 0.2em;
  color: #f47e20;
  font-weight: 600;
`
export const LabEcommerceGrid = styled.div`
  justify-self: start;
  margin-left: 0.5em;
  @media (max-width: 1700px) {
    margin-left: 2em;
  }
  @media (max-width: 1500px) {
    margin-left: 1em;
  }
  @media (max-width: 1024px) {
    margin-left: 2.5em;
  }
  @media (max-width: 768px) {
    margin-left: 1em;
  }
  @media (max-width: 600px) {
    margin-left: 2em;
  }
`
// category
export const SearchCategoryStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1em;
  color: #f47e20;
  margin-left: -20em;
  padding-left: 1em;
  padding-right: 1em;
  border-radius: 0.5em;
  button {
    :hover {
      padding: 0em;
      font-size: 1.1rem;
      font-weight: 700;
    }
  }
  select {
    border: none;
    background-color: transparent;
    cursor: pointer;
    :hover {
      font-size: 1.1rem;
      font-weight: 700;
    }
  }
  @media (max-width: 1970px) {
    margin-left: -17em;
  }
  @media (max-width: 1790px) {
    margin-left: -15em;
  }
  @media (max-width: 1650px) {
    margin-left: 0em;
  }
  @media (max-width: 1500px) {
    grid-row: 2;
    grid-column: 1 / span 2;
  }
  @media (max-width: 1024px) {
    display: none;
  }
`
export const SearchCategoryStyle1024 = styled.div`
  display: none;
  gap: 1em;
  color: #f47e20;
  padding-left: 1em;
  padding-right: 1em;
  border-radius: 0.5em;
  button {
    :hover {
      padding: 0em;
      font-size: 1.1rem;
      font-weight: 700;
    }
  }
  select {
    border: none;
    background-color: transparent;
    cursor: pointer;
    :hover {
      font-size: 1.1rem;
      font-weight: 700;
    }
  }
  @media (max-width: 1024px) {
    grid-row: 1;
    grid-column: 2;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 768px) {
    grid-row: 2;
    grid-column: span 2;
  }
`
//cart
export const HeaderIcon = styled.div`
  background-color: rgb(239 68 68);
  position: absolute;
  right: -0.5rem;
  bottom: -0.5rem;
  font-size: 12px;
  width: 18px;
  height: 18px;
  color: rgb(255 255 255);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const HeaderCart = styled.div`
  margin-right: 2em;
  cursor: pointer;
  position: relative;
  max-width: 50px;
  @media (max-width: 1500px) {
    justify-self: end;
    grid-column: 2;
  }
  @media (max-width: 1024px) {
    grid-row: 1;
    grid-column: 3;
  }
  @media (max-width: 768px) {
    grid-column: 2;
  }
`
export const IconCartStyle = styled.div`
  font-size: 1.5rem;
  line-height: 2rem;
`
