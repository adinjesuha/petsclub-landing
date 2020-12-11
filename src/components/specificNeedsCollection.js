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

const SpecificNeedsCollection = () => {
  const data = useStaticQuery(graphql`
    query{
      takeshape {
        getCollection(
          _id: "5d77bd22-4405-4c2e-af2d-2636766f7f2c"
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
        <Heading>Necesidades Especificas</Heading>
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

export default SpecificNeedsCollection