import React from "react"
import { graphql } from "gatsby"
import Img from 'gatsby-image'
import styled from 'styled-components'

import SEO from "../components/seo"
import Layout from '../components/layout'
import { Container, FlexContainer, Heading } from "../components/globals"
import Product from "../components/product"
import Pagination from "../components/pagination"

const ProdctsPageWrapper = styled.div`
  margin-top: 3rem;
`

const BannerContainer = styled.div`
  width: 100%;
  height: auto;
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

  const sources = [
    {
      ...data.bannerSmall.childImageSharp.fluid,
      media: "(max-width: 520px)"
    },
    {
      ...data.bannerMedium.childImageSharp.fluid,
      media: "(max-width: 768px)",
    },
    {
      ...data.bannerLarge.childImageSharp.fluid,
      media: "(min-width: 769px)",
    },
  ]

  return (  
    <Layout>
      <SEO 
        title={"Alimento — Página " + currentPage + " de " + catNumPages}
        description={"Alimento para Gatos " + currentPage + " de " + catNumPages }
      />
      <ProdctsPageWrapper>
        <Container>
          <Heading>Alimento para Gatos</Heading>
          <BannerContainer>
            <Img fluid={sources} alt="Alimento para Gatos Pets Club" />
          </BannerContainer>
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

export const CatProductListQuery = graphql`
  query catProductListQuery($size: Int!, $from: Int!) {
    bannerSmall: file(relativePath: { eq: "cat-food-banner-small.png" }) {
      childImageSharp {
        fluid(maxWidth: 520) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    bannerMedium: file(relativePath: { eq: "cat-food-banner-medium.png" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    bannerLarge: file(relativePath: { eq: "cat-food-banner.png" }) {
      childImageSharp {
        fluid(maxWidth: 1280) {
          ...GatsbyImageSharpFluid
        }
      }
    }
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