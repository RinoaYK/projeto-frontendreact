import styled from 'styled-components'

export const BannerStyled = styled.section`
  display: flex;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
  :hover {
    filter: drop-shadow(2px 5px 5px rgba(0, 0, 0, 0.1));
  }
`;
export const BannerImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: none;
  position: relative;
  width: 100vw;
  /* display: none;
 @media (min-width: 1024px) { 
        display: block;    
} */
  img {
    width: 50%;
    margin-top: 6em;
    cursor: pointer;
  }
`;
export const BannerImageStyled = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-around;
  gap: 10em;
  transform: translate(0, -50%);
  left: 1.25rem;
  right: 1.25rem;
  top: 55%;
`;
export const BannerIcons = styled.section`
  color: white;
  font-size: 3rem;
  line-height: 1rem;
  cursor: pointer;
  filter: drop-shadow(1px 1px 5px rgba(0, 0, 0, 0.2));
  :hover {
    filter: drop-shadow(1px 1px 5px rgba(0, 0, 0, 0.4));
  }
`;
