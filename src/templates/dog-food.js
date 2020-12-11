import React from "react"
import { graphql } from "gatsby"
import Img from 'gatsby-image'
import styled from 'styled-components'

import SEO from "../components/seo"
import Layout from '../components/layout'
import { Container, FlexContainer, Heading } from "../components/globals"
import Product from "../components/product"
import Pagination from "../components/pagination"

const PaginatedPage = styled.div`
  margin-top: 3rem;
`

const BannerContainer = styled.div`
  width: 100%;
  height: auto;
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
        title={"Alimento — Página " + currentPage + " de " + dogNumPages}
        description={"Alimento para Perros " + currentPage + " de " + dogNumPages }
      />
      <PaginatedPage>
        <Container>
          <Heading>Alimento para Perros</Heading>
          <BannerContainer>
            <Img fluid={sources} alt="Alimento para Perros Pets Club" />
          </BannerContainer>
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

export const DogProductListQuery = graphql`
  query dogProductListQuery($size: Int!, $from: Int!) {
    bannerSmall: file(relativePath: { eq: "dog-food-banner-small.png" }) {
      childImageSharp {
        fluid(maxWidth: 520) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    bannerMedium: file(relativePath: { eq: "dog-food-banner-medium.png" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    bannerLarge: file(relativePath: { eq: "dog-food-banner.png" }) {
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