import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'
// Components
import CustomSlider from './slider'
import SliderCard from './sliderCard'
// Styles
import { Container, Heading } from './globals'

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
        getSliderCollection(
          _id: "55289b66-21f4-478f-8365-6fabbeda2838"
        ){
          collectionName
          products{
            _id
            name
            vendor{
              searchSummary
            }
            image{
              path
              fluid(maxWidth: 190) {
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
    <Container marginTop borderBottom>
      <FeaturedSection>
        <Heading>{data.takeshape.getSliderCollection.collectionName}</Heading>
        <CustomSlider>
          {data.takeshape.getSliderCollection.products.map(product => (
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