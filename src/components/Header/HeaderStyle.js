import styled from 'styled-components'

export const HeaderLayout = styled.header`

${props =>
    props.isActive
      ? `background-color: white;
      padding-top: 1rem;
    padding-bottom: 1rem;    
       box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);`
      : `background-color: transparent;
      padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    margin-top: 2.5rem;`}

  position: fixed;
  width: 100%;
  z-index: 10;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 100ms;



  > div {
    padding-right: 30px;
    padding-left: 30px;
    margin-left: auto;
    margin-right: auto;
    
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;

    @media (max-width: 640px) {
      margin-left: -1em;
    }
    @media (max-width: 768px) {
      margin-left: -1em;
    }
    @media (max-width: 1024px) {
      margin-left: -1em;
    }
    @media (max-width: 1440pxpx) {
      margin-left: -1em;
    }
  }
  div > img {
    width: 50px;
  }
`;

//Logo
export const LabEcommerce = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8em;
  gap: 0.2em;
  color: #f47e20;
  font-weight: 600;
`;
// category
export const SearchCategoryStyle = styled.div`
align-self: center;
display: flex;
align-items: center;
justify-content: center;
gap: 1em;
color: #f47e20;
margin-left: -16em;
padding-left: 1em;
padding-right: 1em;
border-radius: .5em;
button{
:hover{
  padding: 0em;
  font-size: 1.1rem;
  font-weight: 700;  
}}
select{
  border: none;
  background-color: transparent;  
  cursor: pointer;
  :hover{
    font-size: 1.1rem;
  font-weight: 700;
  }
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
`;
export const HeaderCart = styled.div`
  margin-right: 1em;
  cursor: pointer;
  position: relative;
  max-width: 50px;

  @media (max-width: 640px) {
    margin-right: 0em;
  }
  @media (max-width: 768px) {
    margin-right: 0.5em;
  }
  @media (max-width: 1024px) {
    margin-right: 0.5em;
  }
`;
export const IconCartStyle = styled.div`
  font-size: 1.5rem;
  line-height: 2rem;
`;
