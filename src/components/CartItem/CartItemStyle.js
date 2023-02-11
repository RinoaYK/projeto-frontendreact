import styled from 'styled-components'

export const Card = styled.div`
  display: flex;
  column-gap: 1rem;
  padding-top: 0rem;
  padding-bottom: 0rem;
  @media (min-width: 1024px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  border-bottom-width: 1px;
  width: 100%;
  font-weight: 300;
  border-color: rgb(229 231 235);
  color: rgb(107 114 128);
`
export const CardItems = styled.div`
  width: 100%;
  min-height: 150px;
  display: flex;
  align-items: center;
  column-gap: 2rem;
`
export const ImgItem = styled.div`
  img {
    max-width: 100px;
  }
`
export const InfosItems = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`
export const ItemsCol1 = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`
export const ItemTitle = styled.div`
  font-size: 0.875rem;
  line-height: 1.25rem;
  text-transform: uppercase;
  font-weight: 500;
  max-width: 240px;
  color: rgb(34 34 34);
  :hover {
    text-decoration-line: underline;
  }
`
export const XRemove = styled.div`
  font-size: 1.25rem;
  line-height: 1.75rem;
  cursor: pointer;
`
export const XRemoveIcon = styled.div`
  color: rgb(107 114 128);
  :hover {
    color: #f47e20;
  }
`
export const ItemsCol2 = styled.div`
  display: flex;
  column-gap: 0.5rem;
  height: 36px;
  font-size: 0.875rem;
  line-height: 1.25rem;
`
export const QStyle = styled.div`
  display: flex;
  flex: 1 1 0%;
  max-width: 100px;
  align-items: center;
  height: 100%;
  border-width: 1px;
  color: rgb(34 34 34);
  font-weight: 500;
`
export const MinusIcon = styled.div`
  flex: 1 1 0%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  :hover {
    color: #f47e20;
  }
`
export const AmountCartStyle = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
`
export const PlusIcon = styled.div`
  flex: 1 1 0%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  :hover {
    color: #f47e20;
  }
`
export const ItemPrice = styled.div`
  display: flex;
  flex: 1 1 0%;
  justify-content: space-around;
  align-items: center;
`
export const FinalPrice = styled.div`
  display: flex;
  flex: 1 1 0%;
  justify-content: end;
  align-items: center;
  color: rgb(34 34 34);
  font-weight: 500;
`
