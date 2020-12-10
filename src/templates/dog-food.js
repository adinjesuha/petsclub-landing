import React from "react"
import { graphql } from "gatsby"
import styled from 'styled-components'

import SEO from "../components/seo"
import Layout from '../components/layout'
import { Container, FlexContainer, Heading } from "../components/globals"
import Product from "../components/product"
import Pagination from "../components/pagination"
import Banner from "../components/banner"

const PaginatedPage = styled.div`
  margin-top: 3rem;
`

export const DogProductListQuery = graphql`
  query dogProductListQuery($size: Int!, $from: Int!) {
    takeshape {
      getProductList(
        size: $size, 
        from: $from,
      ) {
        items {
          _id
          specie{
            name
          }
          newProduct
          vendor {
            searchSummary
          }
          name
          image{
            path
            fluid(maxWidth: 225, maxHeight: 400) {
              ...GatsbyTakeShapeImageFluid
            }
          }
          imageSmall{
            path
            fluid(maxWidth: 225, maxHeight: 400) {
              ...GatsbyTakeShapeImageFluid
            }
          }
          variants{
            sku
            name
            price
            salePrice
            deal
          }
        }
      }
    }
  }
`

const ProductsDogPage = (props) => {
  const { data } = props
  const { currentPage, dogNumPages } = props.pageContext
  const productSlug = '/alimento-para-perros/' 
  const isFirst = currentPage === 1
  const isLast = currentPage === dogNumPages
  const prevPage = currentPage - 1 === 1 ? productSlug : productSlug + (currentPage - 1).toString()
  const nextPage = productSlug + (currentPage + 1).toString()

  let paginationProps = {
    isFirst,
    prevPage,
    numPages: dogNumPages,
    productSlug,
    currentPage,
    isLast,
    nextPage
  }

  console.log('props:', props)

  return (  
    <Layout>
      <SEO 
        title={"Alimento — Página " + currentPage + " de " + dogNumPages}
        description={"Alimento para Perros " + currentPage + " de " + dogNumPages }
      />
      <PaginatedPage>
        <Banner />
        <Container>
          <Heading>Los Más Vendidos</Heading>
          <FlexContainer alignTop flexWrap isRow>
          {data.takeshape.getProductList.items.map(product => (
            <Product key={product.id} {...product}/>
          ))}
          </FlexContainer>
          {dogNumPages > 1 ? (
            <Pagination {...paginationProps}/>
          ) : null}
        </Container>
      </PaginatedPage>
    </Layout>
  )
}

export default ProductsDogPage