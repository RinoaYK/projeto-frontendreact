import styled from "styled-components";


export const Section = styled.section`
  padding-top: 4rem; /* 64px */
  padding-bottom: 4rem; /* 64px */
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  width: 100vw;  
  padding-right: 30px;
  padding-left: 30px;
  margin-left: -0.5em;
  margin-right: auto;
  
`;

export const Items = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 30px;
  max-width: 20rem /* 384px */;
  margin-left: auto;
  margin-right: auto;
  

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    max-width: 40rem;
    
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    max-width: 65rem;
  }
  @media (min-width: 1440px) {
    grid-template-columns: repeat(5, minmax(0, 1fr));
    max-width: 90rem;
       
  }
`;
