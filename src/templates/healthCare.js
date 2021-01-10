import React from "react"
import { graphql, Link } from "gatsby"
import Img from 'gatsby-image'

import SEO from "../components/seo"
import Layout from '../components/layout'
import { Container, FlexContainer, Heading, PageWrapper, BannerContainer, Filters, Results } from "../components/globals"
import Product from "../components/product"
import Pagination from "../components/pagination"

const ProductsCatPage = (props) => {
  const { data } = props
  const { currentPage, healthCareNumPages } = props.pageContext
  const productSlug = '/farmacia/' 
  const isFirst = currentPage === 1
  const isLast = currentPage === healthCareNumPages
  const prevPage = currentPage - 1 === 1 ? productSlug : productSlug + (currentPage - 1).toString()
  const nextPage = productSlug + (currentPage + 1).toString()

  let paginationProps = {
    isFirst,
    prevPage,
    numPages: healthCareNumPages,
    productSlug,
    currentPage,
    isLast,
    nextPage
  }

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
      <SEO 
        title={"Contra Pulgas y Garrapatas - Página " + currentPage + " de " + healthCareNumPages}
        description={"Contra Pulgas y Garrapatas - Página " + currentPage + " de " + healthCareNumPages}
      />
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
                <Heading capitalize medium>{data.takeshape.getCollection.title}</Heading>
                <BannerContainer>
                  <Img fluid={sources} alt="Alimento para Gatos Pets Club" />
                </BannerContainer>
                <FlexContainer alignTop flexWrap isRow>
                  {data.takeshape.getCollection.products.map(product => (
                    <Product key={product.id} {...product}/>
                  ))}
                </FlexContainer>
                {healthCareNumPages > 1 ? (
                  <Pagination {...paginationProps}/>
                ) : null}
              </div>
            </Results>
          </FlexContainer>
        </Container>
      </PageWrapper>
    </Layout>
  )
}

export default ProductsCatPage

export const HealthCareProductListQuery = graphql`
  query healthCareProductListQuery{
    takeshape {
      getCollection(_id: "93eb721f-5aa6-48f1-9330-f59eb55b8769") {
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