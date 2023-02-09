import styled from 'styled-components'

export const SearchbarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3em;
  margin-top: 1em;

    @media (max-width: 1024px) {      
    flex-direction: column;    
    height: 12em;
    
    }

`;
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


`;
export const ResetNameButton = styled.button`
  color: #f7e3d8;
  position: absolute;
  right: 0.2em;
  font-size: 1.3rem;
  :hover {
    color: #f47e20;
  }
`;
export const SearchbarItems = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f47e20;
  height: 100%;
  padding-left: 1em;
  padding-right: 1em;
  color: white;
  gap: 1em;
  border-radius: 1em;  
  min-width: 17em;

    @media (max-width: 1024px) {      
    flex-direction: column;    
    justify-content: center;
    width: 70vw;
    
    }
    


`;
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
  @media (max-width: 768px) {    
     display: none;
    }
`

export const SliderRg2 = styled.div`   
  @media (max-width: 768px) {    
     display: none;}

`
export const SliderRgContainer = styled.div` 
  max-width: 260px;
  display: flex;
  cursor: pointer;  


`











//////////////////////////////
export const SliderRange1 = styled.input`
  max-height: .4em;  
  min-width: 50px;
  cursor: pointer;  
  position: relative;

`
export const SliderRange2 = styled.input`
  max-height: .4em;  
  min-width: 50px;
  cursor: pointer;  
`


export const Progress = styled.input`
min-width: 50px;
  max-height: .4em;  

  
  left: 25%;
  right: 25%;
  position: absolute;
  border-radius: 5px;
  color: red;
  z-index: 1;
`
////////////////////
export const ResetButtonFilters = styled.button`
  color: #f6b057;
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.2em;
  p {
    font-size: 0.8rem;
  }
  :hover {
    color: white;
  }
`;
