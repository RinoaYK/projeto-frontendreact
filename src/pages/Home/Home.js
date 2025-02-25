import React, { useContext } from 'react'
//import context
import { ProductContext } from '../../contexts/ProductContext'
import { SearchContext } from '../../contexts/SearchContext'
//import component
import Product from '../../components/Product/Product'
import Banner from '../../components/Banner/Banner'
import HeaderCoupon from '../../components/HeaderCoupon/HeaderCoupon'
import Searchbar from '../../components/Searchbar/Searchbar'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
// import styled component
import { Section, Container, Items, Background } from './HomeStyle'
//import bg
import background from '../../img/background.png'

const Home = () => {
  const { products } = useContext(ProductContext)
  const {
    filterByType,
    filterByMarca,
    nameSearchIncludes,
    filterByPrice,
    order,
    sortItens
  } = useContext(SearchContext)
  return (
    <Background background={background}>
      <HeaderCoupon />
      <Header />
      <Banner />
      <Searchbar />
      <Section>
        <Container>
          <Items>
            {products
              .filter(nameSearchIncludes)
              .filter(filterByPrice)
              .filter(filterByType)
              .filter(filterByMarca)
              .sort(() => Math.random() - 0.5)
              .sort(sortItens(order))
              .map(product => {
                return <Product product={product} key={product.id} />
              })}
          </Items>
        </Container>
      </Section>
      <Footer />
    </Background>
  )
}

export default Home
