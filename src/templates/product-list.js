import React from "react"
import { graphql } from "gatsby"
import styled from 'styled-components'

import SEO from "../components/seo"
import Layout from '../components/layout'
import { Container, FlexContainer, Heading } from "../components/globals"
import Product from "../components/product"
import Pagination from "../components/pagination"

const ProdctsPageWrapper = styled.div`
  margin-top: 3rem;
  .header{
    font-size: 1.5rem;
    font-weight: normal;
    text-transform: uppercase;
  }
`

export const productListQuery = graphql`
  query productListQuery($size: Int!, $from: Int!) {
    takeshape {
      getProductList(size: $size, from: $from) {
        items {
          _id
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

const ProductsPage = (props) => {
  console.log(props)
  const { data } = props
  const { currentPage, numPages } = props.pageContext
  const productSlug = '/productos/' 
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? productSlug : productSlug + (currentPage - 1).toString()
  const nextPage = productSlug + (currentPage + 1).toString()

  let paginationProps = {
    isFirst,
    prevPage,
    numPages,
    productSlug,
    currentPage,
    isLast,
    nextPage
  }

  return (
    <Layout>
      <SEO 
        title={"Productos — Página " + currentPage + " de " + numPages}
        description={"Página de Productos " + currentPage + " de " + numPages }
      />
      <ProdctsPageWrapper>
        <Container>
          <Heading>Los Más Vendidos</Heading>
          <FlexContainer alignTop flexWrap isRow>
            {data.takeshape.getProductList.items.map(product => (
              <Product key={product.id} {...product}/>
            ))}
          </FlexContainer>
          <Pagination {...paginationProps}/>
      </Container>
      </ProdctsPageWrapper>
    </Layout>
  )
}

export default ProductsPage
