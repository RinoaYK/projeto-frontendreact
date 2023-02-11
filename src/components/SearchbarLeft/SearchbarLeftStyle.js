import styled from 'styled-components'

export const SearchbarContainer = styled.div`
  height: 20em;
  width: 24em;
  @media (max-width: 1024px) {
    width: 70%;
  }
  @media (max-width: 750px) {
    width: 80%;
  }
  @media (max-width: 620px) {
    width: 85%;
  }
  @media (max-width: 540px) {
    width: 100%;
  }
`
export const NameSearchStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
  position: relative;
  background-color: white;
  color: #f47e20;
  font-size: 1.1rem;
  padding-left: 0.5em;
  &:focus {
    border: none;
    outline: none;
  }
`
export const ResetNameButton = styled.button`
  color: #f7e3d8;
  position: absolute;
  right: 0.2em;
  font-size: 1.3rem;
  :hover {
    color: #f47e20;
  }
`
export const SearchbarItems = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background-color: #f47e20;
  height: 100%;
  margin-left: -1em;
  padding-left: 3em;
  padding-right: 1.5em;
  padding-top: 1em;
  color: white;
  gap: 2em;
  border-radius: 1em;
  min-width: 20em;
  flex-direction: column;
  width: 100%;
  h1 {
    font-size: 1.5rem;
    margin-bottom: -0.7em;

    @media (max-width: 1024px) {
      grid-column: span 2;
      margin-bottom: -2em;
      justify-self: start;
    }
    @media (max-width: 550px) {
      margin-bottom: -1em;
    }
  }
  @media (max-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    min-width: 30em;
    margin-left: 0em;
    align-content: space-around;
    justify-items: center;
  }
  @media (max-width: 550px) {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 0em;
    padding-left: 1em;
    padding-right: 1em;
  }
`
export const NameInput = styled.input`
  background-color: white;
  color: #f47e20;
  font-size: 1.1rem;
  padding-left: 0.5em;
  &:focus {
    border: none;
    outline: none;
  }
  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #f6b057;
    text-align: left;
    font-size: 0.8rem;
    opacity: 1; /* Firefox */
  }
  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    text-align: left;
    font-size: 0.8rem;
    color: #f6b057;
  }
  ::-ms-input-placeholder {
    /* Microsoft Edge */
    text-align: left;
    font-size: 0.8rem;
    color: #f6b057;
  }
`
export const NumberInputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1em;
  flex-direction: column;
  @media (max-width: 1024px) {
    grid-column: span 2;
    margin-top: -1em;
  }
`
export const NumberStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  p {
    margin-bottom: -0.5em;
    margin-top: -1em;
  }
`
export const SelectInput = styled.select`
  background-color: white;
  color: white;
  font-size: 1.1rem;
  padding-left: 0.5em;
  &:focus {
    outline: none;
  }
  border: white solid 1px;
  background-color: transparent;
  cursor: pointer;
  option {
    color: #f47e20;
  }
  @media (max-width: 550px) {
    margin-bottom: 1em;
  }
`
export const NumberInputStyle = styled.input`
  appearance: textfield;
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  min-width: 70px;
  background-color: white;
  color: #f47e20;
  font-size: 1.1rem;
  padding-left: 0.5em;
  &:focus {
    border: none;
    outline: none;
  }
  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #f6b057;
    text-align: left;
    font-size: 0.8rem;
    opacity: 1; /* Firefox */
  }
  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    text-align: left;
    font-size: 0.8rem;
    color: #f6b057;
  }
  ::-ms-input-placeholder {
    /* Microsoft Edge */
    text-align: left;
    font-size: 0.8rem;
    color: #f6b057;
  }
`
///////////////////////////
export const SliderRg1 = styled.div`
  position: relative;
`

export const SliderRg2 = styled.div``
export const SliderRgContainer = styled.div`
  max-width: 260px;
  display: flex;
  cursor: pointer;
`
//////////////////////////////
export const ResetButtonFilters = styled.button`
  color: #f6b057;
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  justify-content: end;
  width: 100%;
  gap: 0.2em;
  margin-top: -1em;
  p {
    font-size: 0.8rem;
  }
  :hover {
    color: white;
  }
  @media (max-width: 1024px) {
    grid-column: span 2;
    justify-self: end;
  }
`