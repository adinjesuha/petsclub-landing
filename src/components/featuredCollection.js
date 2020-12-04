import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'
// Components
import CustomSlider from './slider'
import SliderCard from './sliderCard'
// Styles
import { Container } from './globals'

const FeaturedSection = styled.div`
  margin-top: 3rem;
  .header{
    font-size: 1.5rem;
    font-weight: normal;
    text-transform: uppercase;
  }
`

const FeaturedCollection = () => {
  const data = useStaticQuery(graphql`
    query{
      takeshape {
        getCollection(
          _id: "6483884d-d86f-4a42-aae2-e68da0c800a1"
        ){
          title
          products{
            _id
            name
            vendor{
              searchSummary
            }
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
    <Container marginTop>
      <FeaturedSection>
        <h3 className="header">Los Más Vendidos</h3>
        <CustomSlider>
          {data.takeshape.getCollection.products.map(product => (
            <SliderCard
              key={product._id}
              product={product}
            />
          ))}
        </CustomSlider>
      </FeaturedSection>
    </Container>
  )
}

export default FeaturedCollection