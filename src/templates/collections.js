import React from "react"
import { graphql, Link } from "gatsby"
import Img from 'gatsby-image'

import { Container, FlexContainer, Heading, BannerContainer, PageWrapper, Results } from "../components/globals"
import SEO from "../components/seo"
import Layout from '../components/layout'
import Product from "../components/product"
import NewsLetter from '../components/newsletter'

const ProductsDogPage = ({data}) => {

  const sources = [
    {
      ...data.takeshape.getCollection.imageSm.fluid,
      media: "(max-width: 520px)"
    },
    {
      ...data.takeshape.getCollection.imageMd.fluid,
      media: "(max-width: 768px)",
    },
    {
      ...data.takeshape.getCollection.image.fluid,
      media: "(min-width: 769px)",
    },
  ]

  return (  
    <Layout>
      <SEO title={data.takeshape.getCollection.title}/>
      <PageWrapper withBg>
        <Container>
          <Results>
            <div className="results-content">
              <Heading>{data.takeshape.getCollection.title}</Heading>
              <BannerContainer>
                <Img fluid={sources} alt="Alimento para Perros Pets Club" />
              </BannerContainer>
              <FlexContainer alignTop flexWrap isRow>
              {data.takeshape.getCollection.products.map(product => (
                <Product key={product.id} {...product}/>
              ))}
              </FlexContainer>
            </div>
          </Results>
        </Container>
      </PageWrapper>
      <NewsLetter />
    </Layout>
  )
}

export default ProductsDogPage

export const query = graphql`
  query Collection($id: ID!) {
    takeshape {
      getCollection(_id: $id) {
        _id
        title
        image {
          path
          fluid(maxWidth: 1100, quality: 100) {
            ...GatsbyTakeShapeImageFluid
          }
        }
        imageMd {
          path
          fluid(maxWidth: 700, quality: 100) {
            ...GatsbyTakeShapeImageFluid
          }
        }
        imageSm {
          path
          fluid(maxWidth: 420, quality: 100) {
            ...GatsbyTakeShapeImageFluid
          }
        }
        products {
          _id
          name
          newProduct
          lifeStage{
            name
          }
          vendor {
            name
          }
          image{
            path
            fluid(maxWidth: 190, quality: 100) {
              ...GatsbyTakeShapeImageFluid
            }
          }
          imageSmall{
            path
            fluid(maxWidth: 110, quality: 100) {
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
