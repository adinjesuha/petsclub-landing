import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import { device } from '../utils/breakpoints'
import { Container } from './globals'

const BrandSection = styled.section`
  margin-top: 3rem;
  .header{
    font-size: 1.5rem;
    font-weight: normal;
    text-transform: uppercase;
  }
`

const BrandsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-content: flex-start;
  flex-wrap: wrap;
  margin: 2rem 0;
`

const Brand = styled.div`
  background-color: #fff;
  border: .1rem solid #eee;
  margin-left: -.1rem;
  margin-bottom: -.1rem;
  padding: .3rem 0;
  position: relative;
  flex-basis: 33.33333%;
  max-width: 33.33333%;
  height: 120px;
  .gatsby-image-wrapper{
    max-width: 100px;
    height: auto;
    margin: auto;
  }
  @media ${device.laptop}{
    flex-basis: 16.66667%;
    max-width: 16.66667%;
  }
`

const Brands = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {extension: {regex: "/(png)/"}, relativeDirectory: {eq: "brands"}}
      ) {
        edges {
          node {
            base
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
  return(
    <Container borderBottom>
      <BrandSection>
        <h3 className="header">12+ Marcas Y Sumando</h3>
        <BrandsContainer>
          {data.allFile.edges.map(image => (
            <Brand>
              <Img fluid={image.node.childImageSharp.fluid} key={image.node.base}/>
            </Brand>
          ))}
        </BrandsContainer>
      </BrandSection>
    </Container>
  )
}

export default Brands