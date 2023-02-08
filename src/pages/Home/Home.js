import React, { useContext } from 'react'
//import context
import { ProductContext } from '../../contexts/ProductContext'
import { SearchContext } from '../../contexts/SearchContext'
//import component
import Product from '../../components/Product/Product'
import Banner from '../../components/Banner/Banner'
import HeaderCoupon from '../../components/HeaderCoupon/HeaderCoupon'
import Searchbar from '../../components/Searchbar/Searchbar'
// import styled component
import { Section, Container, Items } from './HomeStyle'

const Home = () => {
  const { products } = useContext(ProductContext)
  const { filterByType, filterByMarca, nameSearchIncludes, filterByPrice, order, sortItens } =
  useContext(SearchContext)   

  return (
    <>
      <HeaderCoupon />
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
              .sort(sortItens(order))
              .map(product => {
                return <Product product={product} key={product.id} />
              })}
          </Items>
        </Container>
      </Section>
    </>
  )
}

export default Home
