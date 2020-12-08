import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'
// Components
import CustomSlider from './slider'
import SliderCard from './sliderCard'
// Styles
import { Container, Heading } from './globals'

const PuppySection = styled.div`
  margin-top: 3rem;
`

const PuppyCollection = () => {
  const data = useStaticQuery(graphql`
    query{
      takeshape {
        getCollection(
          _id: "059336b1-1d18-4ef4-8aa7-6a1c8645a7e6"
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
    <Container borderBottom paddingBottom marginTop>
      <PuppySection>
        <Heading>Exclusivo para Cachorros</Heading>
        <CustomSlider>
          {data.takeshape.getCollection.products.map(product => (
            <SliderCard
              key={product._id}
              product={product}
            />
          ))}
        </CustomSlider>
      </PuppySection>
    </Container>
  )
}

export default PuppyCollection