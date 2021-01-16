import React from "react"
import { graphql, Link } from "gatsby"
import Img from 'gatsby-image'

import { Container, FlexContainer, Heading, BannerContainer, PageWrapper, Filters, Results } from "../components/globals"
import SEO from "../components/seo"
import Layout from '../components/layout'
import Product from "../components/product"

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
      <SEO title={data.title}/>
      <PageWrapper withBg>
        <Container>
          <FlexContainer alignTop>
            <Filters>
              <div className="filters-container">
                <header className="filters-container__header">
                  <h3>Filtrar por:</h3>
                </header>
                <div className="filters-container__content">
                  <h4>Categorias</h4>
                  <ul className="categories">
                    <li className="categories__item">
                      <Link to="/">Cachorro</Link>
                    </li>
                    <li className="categories__item">
                      <Link to="/">Adulto</Link>
                    </li>
                    <li className="categories__item">
                      <Link to="/">Adulto Mayor</Link>
                    </li>
                    <li className="categories__item">
                      <Link to="/">Libre de Granos</Link>
                    </li>
                    <li className="categories__item">
                      <Link to="/">Necesidades Especificas</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </Filters>
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
          </FlexContainer>
        </Container>
      </PageWrapper>
    </Layout>
  )
}

export default ProductsDogPage

export const query = graphql`
  query Collection($collectionId: ID!) {
    takeshape {
      getCollection(_id: $collectionId) {
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

// {
//   takeshape {
//     getProductList(
//       where: {
//         specie: {name: {eq: "Dog"}}, 
//         category: {name: {eq: "Food"}}
//       }, 
//       sort: {
//         field: "vendor", order: "ASC"
//       }
//     ) {
//       items {
//         name
//         vendor {
//           name
//         }
//       }
//     }
//   }
// }
