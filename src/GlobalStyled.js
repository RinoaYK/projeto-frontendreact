import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;      
    
  }

  @font-face {
    font-family: 'Majoris-Regular';
    src:url('Majoris-Regular.ttf.woff') format('woff'),
        url('Majoris-Regular.ttf.svg#Majoris-Regular') format('svg'),
        url('Majoris-Regular.ttf.eot'),
        url('Majoris-Regular.ttf.eot?#iefix') format('embedded-opentype'); 
    font-weight: normal;
    font-style: normal;
}
background-image: image();
`;


