import styled from 'styled-components'

export const ProductNotFind = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ItemDetailsStyled = styled.section`
  padding-top: 8rem;
  padding-bottom: 3rem;
  @media (min-width: 1024px) {
    padding-top: 8rem /* 128px */;
    padding-bottom: 8rem /* 128px */;
  }
  height: 100vh;
  display: flex;
  align-items: center;
`;
export const ItemContainer = styled.div`
  width: 100%;
  padding-right: 30px;
  padding-left: 30px;
  margin-left: auto;
  margin-right: auto;
  background-color: white;
  padding: 2em;
  @media (min-width: 640px) {
    max-width: 640px;
  }
`;
export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;
export const ImagePD = styled.div`
  display: flex;
  flex: 1 1 0%;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem /* 32px */;
  @media (min-width: 1024px) {
    margin-bottom: 0px;
  }
  img {
    max-width: 200px;
    @media (min-width: 1024px) {
      max-width: 24rem /* 384px */;
    }
  }
`;
export const DetailsPD = styled.div`
  flex: 1 1 0%;
  text-align: center;
  @media (min-width: 1024px) {
    text-align: left;
  }
  h1 {
    font-size: 26px;
    font-weight: 500;
    margin-bottom: 0.5rem /* 8px */;
    max-width: 450px;
    margin-left: auto;
    margin-right: auto;
    @media (min-width: 1024px) {
      margin-left: 0px;
      margin-right: 0px;
    }
  }
`;
export const PricePD = styled.div`
  font-size: 1.25rem /* 20px */;
  line-height: 1.75rem /* 28px */;
  color: rgb(239 68 68);
  font-weight: 500;
  margin-bottom: 1.5rem /* 24px */;
`;
export const DetailItemsPD = styled.p`
  margin-bottom: 2rem /* 32px */;
`;
export const ButtonPD = styled.div`
  background-color: rgb(34 34 34);
  padding: 1rem /* 16px */;

  color: white;
  display: flex;
  align-items: center;
  justify-content: space-around;

  cursor: pointer;
  :hover {
    background-color: #323b3f;
  }
`;
export const CartPlus = styled.div`
  font-size: 1.5rem /* 24px */;
  line-height: 2rem /* 32px */;
`;
export const ArrowBack = styled.div`
  color: #f47e20;
  font-size: 3.5rem /* 24px */;
  line-height: 2rem /* 32px */;
`;

// :hover{
//
//     background-color: #323B3F;
//   }
