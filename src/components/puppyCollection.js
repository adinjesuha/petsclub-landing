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
        getSliderCollection(
          _id: "57490367-6e04-42c8-be31-f851b91be00e"
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
    <Container borderBottom paddingBottom marginTop>
      <PuppySection>
        <Heading>{data.takeshape.getSliderCollection.collectionName}</Heading>
        <CustomSlider>
          {data.takeshape.getSliderCollection.products.map(product => (
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