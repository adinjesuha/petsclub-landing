import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import { device } from '../utils/breakpoints'
import { Container } from './globals'

const BrandSection = styled.section`
  padding: 4rem 0;
`

const HeadLine = styled.div`
  text-align: center;
  max-width: 520px;
  margin: auto;
  span{
    display: inline-block;
    color: rgba(39,43,55, .5);
    padding-bottom: .8rem;
  }
  h3{
    font-size: 1.6rem;
    margin-bottom: 2rem;
  }
`

const BrandsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-content: flex-start;
  flex-wrap: wrap;
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
    <BrandSection>
      <Container>
        <HeadLine>
          <span> NUESTRAS MARCAS</span>
          <h3>AGREGANDO MARCAS PREMIUM TODOS LOS MESES</h3>
        </HeadLine>
        <BrandsContainer>
          {data.allFile.edges.map(image => (
            <Brand>
              <Img fluid={image.node.childImageSharp.fluid} key={image.node.base}/>
            </Brand>
          ))}
        </BrandsContainer>
      </Container>
    </BrandSection>
  )
}

export default Brands