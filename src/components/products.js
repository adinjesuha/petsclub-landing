import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'
import styled, { css } from 'styled-components'

import { device } from '../utils/breakpoints'
import { Container, FlexContainer } from './globals'

const ProductBox = styled.div`
  background-color: ${props => props.bgColor};
  width: 100%;
  height: 420px;
  order: ${props => props.order};
  .gatsby-image-wrapper{
    width: 100%;
    height: 100%;
  }
  ${props => props.description && css`
    padding: 0 2rem;
    order: 4;
    height: 464px;
    @media ${device.tablet}{
      width: 100%;
      flex: 0 1 100%;
    }
  `}
  .product-description{
    width: 100%;
    height: 100%;
    text-align:center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    span{
      display: inline-block;
      color: rgba(39,43,55, .5);
      padding-bottom: .8rem;
    }
    h3{
      font-size: 1.6rem;
      margin-bottom: 2rem;
    }
    p{
      font-size: 1.2rem;
      color: rgba(39,43,55, .5);
    }
    a{
      color: #52555f;
      font-weight: 500;
      letter-spacing: 2.2px;
      text-transform: uppercase;
      text-decoration: none;
      transition: all 300ms ease-in-out;
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
      }
      &:hover{
        color: #f53e5b;
        .arrow-btn{
          background: url(${require('../images/arrow-next-hover.svg')});
          background-position: center center;
          background-repeat: no-repeat;
          transform: translateX(10px);
          background-size: 24px 12px;
        }
      }
    }
  }
  @media ${device.tablet}{
    flex: 0 1 33.3333%;
    height: 464px;
    ${props => props.description && css`
      padding: 2rem;
      flex: 0 1 100%;
    `}
  }
  @media ${device.laptopL}{
    flex: 0 1 25%;
    height: 464px;
    ${props => props.description && css`
      order: 1;
      padding: 2rem;
      flex: 0 1 25%;
    `}
  }
`

const Products = () => {
  const data = useStaticQuery(graphql`
    query {
       food: file(relativePath: { eq: "food.png" }) {
        childImageSharp {
          fluid(maxWidth: 720, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
       food2: file(relativePath: { eq: "food-2.webp" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      },
       food3: file(relativePath: { eq: "food-3.webp" }) {
        childImageSharp {
          fluid(maxWidth: 720, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      },
    }
  `)
  return (
    <Container fluid>
      <FlexContainer>
        <ProductBox bgColor="#F6F6F6" description>
          <div className="product-description">
            <span>CALIDAD PARA TUS PELUDOS</span>
            <h3>FROM THEIR POINT OF VIEW</h3>
            <p>Natural pet food for cats and dogs that respects their nature</p>
            <a href="#">
            <span className="arrow-btn" /> Mira nuestro catálogo de productos
            </a>
          </div>
        </ProductBox>
        <ProductBox bgColor="#FFE8B9" order="1">
          <Img fluid={data.food3.childImageSharp.fluid}/>
        </ProductBox>
        <ProductBox bgColor="#D0E9EE" order="2">
          <Img fluid={data.food2.childImageSharp.fluid}/>
        </ProductBox>
        <ProductBox bgColor="#B8F5F0" order="3">
          <Img fluid={data.food.childImageSharp.fluid}/>
        </ProductBox>
      </FlexContainer>
    </Container>
  )
}

export default Products