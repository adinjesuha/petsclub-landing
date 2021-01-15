import React from "react"
import { graphql, Link } from "gatsby"
import Img from 'gatsby-image'

import { Container, FlexContainer, Heading, BannerContainer, PageWrapper, Filters, Results } from "../components/globals"
import SEO from "../components/seo"
import Layout from '../components/layout'
import Product from "../components/product"
import Pagination from "../components/pagination"

const ProductsDogPage = (props) => {
  const { data } = props
  const { currentPage, dogNumPages } = props.pageContext
  const productSlug = '/alimento-para-perros-paginated/' 
  const isFirst = currentPage === 1
  const isLast = currentPage === dogNumPages
  const prevPage = currentPage - 1 === 1 ? productSlug : productSlug + (currentPage - 1).toString()
  const nextPage = productSlug + (currentPage + 1).toString()

  console.log(props)

  let paginationProps = {
    isFirst,
    prevPage,
    numPages: dogNumPages,
    productSlug,
    currentPage,
    isLast,
    nextPage
  }

  return (  
    <Layout>
      <SEO 
        title={"Alimento para Perros - Página " + currentPage + " de " + dogNumPages}
        description={"Alimento para Perros - Página " + currentPage + " de " + dogNumPages}
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
                {/* <Heading capitalize medium>{data.takeshape.getCollection.title}</Heading> */}
                {/* <BannerContainer>
                  <Img fluid={sources} alt="Alimento para Perros Pets Club" />
                </BannerContainer> */}
                <FlexContainer alignTop flexWrap isRow>
                {data.takeshape.getProductList.items.map(product => (
                  <Product key={product._id} {...product}/>
                ))}
                </FlexContainer>
                {dogNumPages > 1 ? (
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

export default ProductsDogPage

export const DogProductListQuery = graphql`
  query dogProductListQuery($from: Int, $size: Int) {
    takeshape {
      getProductList(
        where: {
          category: {
            name: {
              eq: "Food"
            }
          }
          specie: {
            name: {
              eq: "Dog"
            }
          }
        }
        sort: {field: "lifeStage", order: "ASC"}
        from: $from
        size: $size
      ){
        items{
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