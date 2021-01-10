import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
// Components
import CustomSlider from './slider'
import SliderCard from './sliderCard'
// Styles
import { Container, Heading } from './globals'


const FleaAndTickCollection = () => {
  const data = useStaticQuery(graphql`
    query{
      takeshape {
        getSliderCollection(
          _id: "f4b5d800-e191-43ac-b096-6073700c1f30"
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
    <Container borderBottom paddingBottom>
      <Heading>{data.takeshape.getSliderCollection.collectionName}</Heading>
      <CustomSlider>
        {data.takeshape.getSliderCollection.products.map(product => (
          <SliderCard
            key={product._id}
            product={product}
          />
        ))}
      </CustomSlider>
    </Container>
  )
}

export default FleaAndTickCollection