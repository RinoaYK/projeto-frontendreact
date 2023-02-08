import styled from 'styled-components'

export const Coupon = styled.nav`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: #f47e20;
  height: 2.2rem;
  background-color: white;
  border-radius: 0.3em;
  width: 18rem;
  font-weight: 800;
  font-size: 1.5rem /* 24px */;
  line-height: 2rem /* 32px */;
  > div {
    display: flex;
    gap: 0.5rem;
    margin-top: 0.2em;
    margin-right: 0.5rem;
  }
`;
export const Desconto = styled.p`
  margin-top: -0.1em;
  margin-right: 0.1em;
`;
export const Arrow = styled.p`
  color: #f6b057;
  font-size: 3rem;
  font-size: 2.25rem;
  position: absolute;
  top: -0.04em;
  left: 2.3em;
`;
export const Conway = styled.div`
  height: 2.2rem;
  width: 6rem;
  color: white;
  font-size: 1rem;
  background-color: #f6b057;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -0.3em;
  display: flex;
`;
export const ContourCoupon = styled.div`
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f47e20;
  gap: 1rem;
  color: white;

  @media (max-width: 640px) {
    height: 3.5rem;
  }
  @media (max-width: 768px) {
    height: 3.3rem;
    > p {
      display: none;
    }
  }
  @media (max-width: 1024px) {
    height: 3.1rem;
    > p {
      margin-left: 1.5em;
    }
  }
  @media (max-width: 1440pxpx) {
    > p {
      margin-left: 0em;
    }
  }
`;
export const SlPresentDiv = styled.div`
  font-size: 1.875rem;
  line-height: 2.25rem;
  margin-top: -0.1em;
`;
export const Timer = styled.div`
  position: absolute;
  right: 2em;

  @media (max-width: 640px) {
    display: none;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
