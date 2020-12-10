import React from "react"
import { graphql } from "gatsby"
import styled from 'styled-components'

import SEO from "../components/seo"
import Layout from '../components/layout'
import { Container, FlexContainer, Heading } from "../components/globals"
import Product from "../components/product"
import Pagination from "../components/pagination"
import Banner from "../components/banner"

const ProdctsPageWrapper = styled.div`
  margin-top: 3rem;
  .header{
    font-size: 1.5rem;
    font-weight: normal;
    text-transform: uppercase;
  }
`

export const CatProductListQuery = graphql`
  query catProductListQuery($size: Int!, $from: Int!) {
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

const ProductsCatPage = (props) => {
  const { data } = props
  const { currentPage, catNumPages } = props.pageContext
  const productSlug = '/alimento-para-gatos/' 
  const isFirst = currentPage === 1
  const isLast = currentPage === catNumPages
  const prevPage = currentPage - 1 === 1 ? productSlug : productSlug + (currentPage - 1).toString()
  const nextPage = productSlug + (currentPage + 1).toString()

  let paginationProps = {
    isFirst,
    prevPage,
    numPages: catNumPages,
    productSlug,
    currentPage,
    isLast,
    nextPage
  }

  console.log(data.takeshape.getProductList.items.filter(product => product.specie.name === "Cat"))

  return (  
    <Layout>
      <SEO 
        title={"Alimento — Página " + currentPage + " de " + catNumPages}
        description={"Alimento para Gatos " + currentPage + " de " + catNumPages }
      />
      <ProdctsPageWrapper>
        <Banner />
        <Container>
          <Heading>Alimento para Gatos</Heading>
          <FlexContainer alignTop flexWrap isRow>
            {data.takeshape.getProductList.items.map(product => (
              <Product key={product.id} {...product}/>
            ))}
          </FlexContainer>
          {catNumPages > 1 ? (
            <Pagination {...paginationProps}/>
          ) : null}
      </Container>
      </ProdctsPageWrapper>
    </Layout>
  )
}

export default ProductsCatPage