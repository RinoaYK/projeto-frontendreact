import styled from 'styled-components'

export const SidebarStyled = styled.div`
  ${(props) => (props.isOpen ? 'right: 0;' : 'right: -100%;')}
  width: 100%;
  height: 100%;
  background-color: white;
  position: fixed;
  top: 0;
  box-shadow: 0 25px 25px rgba(0, 0, 0, 0.15);
  transition: all cubic-bezier(0.4, 0, 0.2, 1) 300ms;
  z-index: 20;
  padding-left: 1rem;
  padding-right: 1rem; 
  @media (min-width: 768px) {
    width: 35vw;
  }
  @media (min-width: 1440px) {
    max-width: 30vw;
  }
  @media (min-width: 1024px) {
    padding-left: 35px;
    padding-right: 35px;
  }
`;
//top
export const TopSidebar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom-width: 1px;
  h1 {
    text-transform: uppercase;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 600;
  }
`;
export const CloseArrow = styled.div`
  cursor: pointer;
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  line-height: 2rem;
  :hover {
    color: #f47e20;
  }
`;
//mid
export const MidSidebar = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
  height: 55vh;
  overflow-y: auto;
  overflow-x: hidden;
  border-bottom-width: 1px;
  @media (min-width: 1024px) {
    height: 60vh;
  }
`;
//bottom
export const BottomSidebar = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.75rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  margin-top: 1rem;
`;
export const TotalClear = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  h1 {
    text-transform: uppercase;
    font-weight: 600;
    margin-right: 0.5rem;
  }
`;
export const TrashIcon = styled.div`
  cursor: pointer;
  background-color: red;
  color: white;
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  line-height: 1.75rem;
  :hover{
    background-color: #9e0000;
  }
`;
export const ConfirmCupom = styled.div`
  background-color: white;
  border: 1px solid #f6b057;
  display: flex;
  padding: 0.7rem;
  justify-content: center;
  align-items: center;
  color: #f6b057;  
  font-size: 1.7rem;
  font-weight: 500;
 width: 100%;
  input {
    background-color: white;
    color: #f47e20;    
    width: 80%;
    font-size: 1.1rem;
    text-align: center;
    &:focus {
      border: none;
      outline: none;
    }
    ::placeholder {
      /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: #f6b057;
      text-align: center;
      opacity: 1; /* Firefox */
    }
    :-ms-input-placeholder {
      /* Internet Explorer 10-11 */
      text-align: center;
      color: #f6b057;
    }
    ::-ms-input-placeholder {
      /* Microsoft Edge */
      text-align: center;
      color: #f6b057;
    }
  }
`;
export const CupomInput = styled.div`
  display: flex;  
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 1em
  ;
  button{
  background-color: white;
  border: 1px solid #f6b057;   
  color: #f6b057;
  line-height: 1em;
  padding: .5em;
  :hover{
    color: white;
    background-color: #f47e20;
  }};
`;
export const Checkout = styled.div`
  font-size: 1.1rem;
  background-color: rgb(34 34 34);
  display: flex;
  padding: 1rem;
  align-items: center;
  justify-content: center;
  color: white;
  width: 100%;
  font-weight: 500;
  :hover{        
    background-color: #323B3F;
  }
`;
