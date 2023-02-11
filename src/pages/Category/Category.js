import React, { useContext } from 'react'
//import context
import { ProductContext } from '../../contexts/ProductContext'
import { SearchContext } from '../../contexts/SearchContext'
//import component
import Product from '../../components/Product/Product'
import SearchbarLeft from '../../components/SearchbarLeft/SearchbarLeft'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
// import styled component
import { Section, Container, Items, Background } from './CategoryStyle'
//import bg
import background from '../../img/backgroundCategory.png'

const Category = () => {
  const { products, scrollBarsNo } = useContext(ProductContext)
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
      <Header />
      <Section>
        <SearchbarLeft />
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
                return (
                  <Product
                    product={product}
                    key={product.id}
                    scrollBarsNo={scrollBarsNo}
                  />
                )
              })}
          </Items>
        </Container>
      </Section>
      <Footer />
    </Background>
  )
}

export default Category
