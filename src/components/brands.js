import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import { device } from '../utils/breakpoints'
import { Container } from './globals'

const BrandSection = styled.section`
  padding-top: 6rem;
`

const HeadLine = styled.div`
  text-align: center;
  max-width: 430px;
  margin: auto;
  span{
    font-size: 1rem;
    display: inline-block;
    color: rgba(39,43,55, .5);
    padding-bottom: .8rem;
  }
  h2{
    font-size: 1.2rem;
    text-transform: uppercase;
    margin: 0;
  }
  @media ${device.tablet}{
    span{
      font-size: 1.2rem;
    }
    h2{
      font-size: 1.6rem;
    }
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

const LinkButton = styled.a`
  background-color: #f53e5b;
  color: #fff;
  display: inline-block;
  border: 2px solid transparent;
  border-radius: 4px;
  font-size: 1.2rem;
  font-weight: 700;
  text-decoration: none;
  text-align: center;
  padding: 12px 0;
  width: 100%;
  transition: background-color .3s,color .3s,border-color .3s;
  margin: 0 auto;
  .arrow-btn{
    display: inline-block;
    background: url(${require('../images/arrow-next.svg')});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 24px 12px;
    width: 24px;
    height: 12px;
    margin: 0 auto;
    transition: all 300ms ease-in-out;
    margin-left: 4px;
  }
  &:hover{
    background-color: #dc3550;
    .arrow-btn{
      transform: translateX(8px);
    }
  }
  @media ${device.tablet}{
    display: block;
    padding: 18px 0;
    width: 240px;
    .arrow-btn{
      background-size: 28px 14px;
      width: 28px;
      height: 14px;
    }
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
          <span>12+ MARCAS Y SUMANDO</span>
          <h2>Agregando nuevas marcas a nuestro catálogo todos los meses.</h2>
        </HeadLine>
        <BrandsContainer>
          {data.allFile.edges.map(image => (
            <Brand>
              <Img fluid={image.node.childImageSharp.fluid} key={image.node.base}/>
            </Brand>
          ))}
        </BrandsContainer>
        <LinkButton href="#">
          Ver Catálogo
          <span className="arrow-btn"/>
        </LinkButton>
      </Container>
    </BrandSection>
  )
}

export default Brands