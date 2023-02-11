import styled from 'styled-components'

export const Section = styled.section`
  padding-top: 8rem;
  padding-bottom: 3rem;
  display: flex;
  min-height: 91.8vh;
  @media (max-width: 1500px) {
    padding-top: 10rem;
  }
  @media (max-width: 1024px) {
    flex-direction: column;
    padding-top: 8rem;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 768px) {
    padding-top: 10rem;
  }
  @media (max-width: 600px) {
  }
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top: 2px solid #f47e20;
  margin-top: 2em;
  background-color: rgba(255, 255, 255, 0.3);
  padding-right: 2em;
  padding-left: 2em;
  margin-left: 0;
  margin-right: auto;
  padding-top: 1em;
  padding-bottom: 1em;
  width: 65%;
  min-width: 20em;
  @media (min-width: 1970px) {
    width: 60%;
  }
  @media (max-width: 1024px) {
    margin-left: auto;
    border-top: none;
    padding-top: 3em;
    margin-top: 0;
  }
`
export const Items = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 30px;
  max-width: 20rem;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    max-width: 40rem;
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    max-width: 65rem;
  }
  @media (min-width: 1440px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    max-width: 90rem;
  }
  @media (min-width: 1970px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    max-width: 90rem;
  }
  @media (min-width: 2200px) {
    grid-template-columns: repeat(5, minmax(0, 1fr));
    max-width: 90rem;
  }
`
export const Background = styled.div`
  background-image: url(${props => props.background});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  min-height: 100vh;
`
