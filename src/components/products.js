import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'

import { Container, FlexContainer } from './globals'
import Product from './product'

const ProductsSection = styled.div`
  margin-top: 3rem;
  .header{
    font-size: 1.5rem;
    font-weight: normal;
    text-transform: uppercase;
  }
`

const Products = () => {
  const data = useStaticQuery(graphql`
    query{
      takeshape {
        getProductList {
          items {
            _id
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
  `)
  return (
    <ProductsSection>
      <Container>
        <h3 className="header">Los Más Vendidos</h3>
        <FlexContainer alignTop flexWrap isRow>
          {data.takeshape.getProductList.items.map(product => (
            <Product 
              key={product.id}
              {...product}
            />
          ))}
        </FlexContainer>
     </Container>
    </ProductsSection>
  )
}

export default Products